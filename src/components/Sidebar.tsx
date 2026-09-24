import React, { useState } from 'react';
import { PageId } from '../types';
import { useTheme } from '../context/ThemeContext';
import {
  Home,
  Gamepad2,
  Trophy,
  Compass,
  Image as ImageIcon,
  Mail,
  ShieldCheck,
  Menu,
  X,
  Sun,
  Moon
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
  const { theme, toggleTheme } = useTheme();

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItemClass = (isActive: boolean) =>
    `w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
      isActive
        ? 'bg-slate-100 text-slate-900 font-semibold shadow-2xs dark:bg-slate-800 dark:text-amber-400'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60'
    }`;

  const sidebarContent = (
    <div className="flex flex-col h-full py-6 px-5 justify-between">
      <div className="space-y-6">
        {/* Brand Header */}
        <button
          onClick={() => handleSelect('home')}
          className="flex items-center gap-3.5 text-left group focus:outline-hidden w-full cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-xs group-hover:scale-105 transition-transform bg-slate-100 dark:bg-slate-800 shrink-0">
            <img
              src="/src/assets/images/user_profile.jpg"
              alt="Ahmad Shahzad Akbari"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-tight truncate">
              Ahmad Shahzad
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-400 font-medium">Class of 2029 • Portfolio</div>
          </div>
        </button>

        {/* Navigation Links - All 6 required pages + Admin */}
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
            <span>Hobbies (Choice #1)</span>
            <Gamepad2 className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => handleSelect('sports')}
            className={navItemClass(currentPage === 'sports')}
          >
            <span>Sports & Athletics (Choice #2)</span>
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
            onClick={() => handleSelect('contact')}
            className={navItemClass(currentPage === 'contact')}
          >
            <span>Contact Form</span>
            <Mail className="w-4 h-4 text-slate-400" />
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

      {/* Theme Toggle in Sidebar */}
      <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer"
        >
          <span className="flex items-center gap-2">
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-amber-400" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
            <span>{theme === 'dark' ? 'Dark Mode Active' : 'Light Mode Active'}</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 shadow-2xs font-bold">
            {theme === 'dark' ? 'Dark' : 'Light'}
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-30">
        <button
          onClick={() => handleSelect('home')}
          className="flex items-center gap-2.5 focus:outline-hidden cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shadow-xs shrink-0">
            <img
              src="/src/assets/images/user_profile.jpg"
              alt="Ahmad Shahzad Akbari"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-sm">Ahmad Shahzad</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-y-auto max-h-[80vh] z-40">
          {sidebarContent}
        </div>
      )}

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden md:block w-64 lg:w-72 shrink-0 border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
        <div className="sticky top-0 h-full max-h-screen overflow-y-auto flex flex-col justify-between">
          {sidebarContent}
        </div>
      </aside>
    </>
  );
};
