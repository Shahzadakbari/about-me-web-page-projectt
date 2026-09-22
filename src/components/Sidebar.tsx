import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Home,
  Camera,
  Trophy,
  Compass,
  Image as ImageIcon,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  unreadCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onNavigate,
  unreadCount,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItemClass = (isActive: boolean) =>
    `w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
      isActive
        ? 'bg-slate-100 text-slate-900 font-semibold shadow-2xs'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
    }`;

  const sidebarContent = (
    <div className="flex flex-col h-full py-6 px-5 space-y-6">
      {/* Brand Header */}
      <button
        onClick={() => handleSelect('home')}
        className="flex items-center gap-3.5 text-left group focus:outline-hidden"
      >
        <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-extrabold flex items-center justify-center text-lg shadow-xs group-hover:scale-105 transition-transform">
          S
        </div>
        <div>
          <div className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
            Shahzad
          </div>
          <div className="text-xs text-slate-400 font-medium">Personal Portfolio</div>
        </div>
      </button>

      {/* Navigation Links */}
      <div className="space-y-1">
        <button
          onClick={() => handleSelect('home')}
          className={navItemClass(currentPage === 'home')}
        >
          <span>Home</span>
          <Home className="w-4 h-4 text-slate-400" />
        </button>

        <button
          onClick={() => handleSelect('hobby')}
          className={navItemClass(currentPage === 'hobby')}
        >
          <span>Hobbies & Tech</span>
          <Camera className="w-4 h-4 text-slate-400" />
        </button>

        <button
          onClick={() => handleSelect('sports')}
          className={navItemClass(currentPage === 'sports')}
        >
          <span>Sports & Athletics</span>
          <Trophy className="w-4 h-4 text-slate-400" />
        </button>

        <button
          onClick={() => handleSelect('future')}
          className={navItemClass(currentPage === 'future')}
        >
          <span>Future Goals</span>
          <Compass className="w-4 h-4 text-slate-400" />
        </button>

        <button
          onClick={() => handleSelect('media')}
          className={navItemClass(currentPage === 'media')}
        >
          <span>Media Gallery</span>
          <ImageIcon className="w-4 h-4 text-slate-400" />
        </button>

        <button
          onClick={() => handleSelect('admin')}
          className={navItemClass(currentPage === 'admin')}
        >
          <div className="flex items-center gap-2">
            <span>Admin Inbox</span>
            {unreadCount > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 ml-1">
                {unreadCount}
              </span>
            )}
          </div>
          <ShieldCheck className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 bg-white sticky top-0 z-30">
        <button
          onClick={() => handleSelect('home')}
          className="flex items-center gap-2.5 focus:outline-hidden"
        >
          <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm shadow-xs">
            S
          </div>
          <span className="font-bold text-slate-900 text-sm">Shahzad • Portfolio</span>
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl overflow-y-auto max-h-[80vh] z-40">
          {sidebarContent}
        </div>
      )}

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden md:block w-64 lg:w-72 shrink-0 border-r border-slate-100 bg-white">
        <div className="sticky top-0 h-full max-h-screen overflow-y-auto">
          {sidebarContent}
        </div>
      </aside>
    </>
  );
};
