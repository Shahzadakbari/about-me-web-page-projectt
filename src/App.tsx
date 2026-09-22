import React, { useState, useEffect } from 'react';
import { PageId, Message } from './types';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { MediaPage } from './pages/MediaPage';
import { FuturePage } from './pages/FuturePage';
import { HobbyPage } from './pages/HobbyPage';
import { SportsPage } from './pages/SportsPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('ahmad_admin_auth') === 'true';
  });

  // Fetch messages from backend API on mount
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages');
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      } else {
        loadLocalFallbackMessages();
      }
    } catch {
      loadLocalFallbackMessages();
    }
  };

  const loadLocalFallbackMessages = () => {
    const saved = localStorage.getItem('ahmad_messages_fallback');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  };

  // Submit contact message to backend JSON store
  const handleSendMessage = async (data: {
    name: string;
    email: string;
    subject: string;
    category: string;
    message: string;
  }): Promise<boolean> => {
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        if (result.message) {
          setMessages((prev) => [result.message, ...prev]);
        }
        return true;
      }
    } catch {
      // Offline / client fallback
    }

    // Local fallback
    const fallbackMsg: Message = {
      id: 'local-' + Date.now(),
      createdAt: new Date().toISOString(),
      name: data.name,
      email: data.email,
      subject: data.subject || 'General Inquiry',
      category: data.category || 'General',
      message: data.message,
      isRead: false,
    };
    const updated = [fallbackMsg, ...messages];
    setMessages(updated);
    localStorage.setItem('ahmad_messages_fallback', JSON.stringify(updated));
    return true;
  };

  // Toggle read status
  const handleToggleRead = async (id: string, currentRead: boolean) => {
    try {
      await fetch(`/api/messages/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: !currentRead }),
      });
    } catch {
      // continue local update
    }

    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isRead: !currentRead } : m))
    );
  };

  // Delete message
  const handleDeleteMessage = async (id: string) => {
    try {
      await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
      });
    } catch {
      // continue local update
    }

    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  // Admin login check
  const handleAdminLogin = async (password: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAdminAuthenticated(true);
        localStorage.setItem('ahmad_admin_auth', 'true');
        return true;
      }
    } catch {
      // Local fallback for offline testing
      if (password === 'admin123' || password === 'ahmad2026') {
        setIsAdminAuthenticated(true);
        localStorage.setItem('ahmad_admin_auth', 'true');
        return true;
      }
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('ahmad_admin_auth');
  };

  // Test simulation: create a new random inquiry to test persistence
  const handleCreateTestMessage = async () => {
    const sampleNames = ['Jordan Smith', 'Coach Williams', 'Emma Vance', 'Prof. Thorne'];
    const sampleCats = ['Feedback', 'Question', 'Collaboration', 'Education'];
    const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    const randomCat = sampleCats[Math.floor(Math.random() * sampleCats.length)];

    await handleSendMessage({
      name: randomName,
      email: `${randomName.toLowerCase().replace(' ', '.')}@example.com`,
      subject: `Inquiry regarding ${randomCat.toLowerCase()}`,
      category: randomCat,
      message: `Hello Ahmad! This is a test inquiry to verify message storage and notifications in your admin panel.`,
    });
  };

  const unreadCount = messages.filter((m) => !m.isRead).length;

  return (
    <div className="min-h-screen bg-amber-400 p-2 sm:p-5 lg:p-8 flex justify-center items-start selection:bg-amber-400 selection:text-slate-950 font-sans text-slate-800">
      {/* Sidenote Outer Rounded Container */}
      <div className="w-full max-w-[1360px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-300/70 flex flex-col md:flex-row min-h-[92vh]">
        {/* Left Categorized Sidebar */}
        <Sidebar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          unreadCount={unreadCount}
        />

        {/* Right Main Content Stage */}
        <main className="flex-1 p-5 sm:p-8 lg:p-12 overflow-y-auto bg-white min-w-0 flex flex-col justify-between">
          <div className="flex-1">
            {currentPage === 'home' && (
              <HomePage
                onNavigate={setCurrentPage}
                onSendMessage={handleSendMessage}
              />
            )}
            {currentPage === 'media' && <MediaPage />}
            {currentPage === 'future' && <FuturePage />}
            {currentPage === 'hobby' && <HobbyPage />}
            {currentPage === 'sports' && <SportsPage />}
            {currentPage === 'admin' && (
              <AdminPage
                messages={messages}
                isAuthenticated={isAdminAuthenticated}
                onLogin={handleAdminLogin}
                onLogout={handleAdminLogout}
                onToggleRead={handleToggleRead}
                onDeleteMessage={handleDeleteMessage}
                onCreateTestMessage={handleCreateTestMessage}
              />
            )}
          </div>

          {/* Minimalist Sidenote Bottom Signature */}
          <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <div>
              © {new Date().getFullYear()} Ahmad Shahzad Akbari • Personal Portfolio
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="hover:text-slate-700 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('hobby')}
                className="hover:text-slate-700 transition-colors cursor-pointer"
              >
                Hobbies
              </button>
              <button
                onClick={() => setCurrentPage('sports')}
                className="hover:text-slate-700 transition-colors cursor-pointer"
              >
                Sports
              </button>
              <button
                onClick={() => setCurrentPage('admin')}
                className="hover:text-slate-700 transition-colors cursor-pointer"
              >
                Admin
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
