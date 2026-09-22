import React from 'react';
import { PageId } from '../types';
import { Mail, ShieldCheck, Heart } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Student info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                AA
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Ahmad Shahzad Akbari
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Personal portfolio and About Me project created for high school web development.
              Designed with a contemporary slate-gray and cobalt-blue color system.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                Primary: Slate Gray
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 border border-blue-800">
                Secondary: Cobalt Blue
              </span>
            </div>
          </div>

          {/* Col 2: Navigation shortcuts */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-400 transition-colors text-slate-300"
                >
                  Home & Biography
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('media')}
                  className="hover:text-blue-400 transition-colors text-slate-300"
                >
                  Media Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('future')}
                  className="hover:text-blue-400 transition-colors text-slate-300"
                >
                  Future Goals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hobby')}
                  className="hover:text-blue-400 transition-colors text-slate-300"
                >
                  Hobby: Creative Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sports')}
                  className="hover:text-blue-400 transition-colors text-slate-300"
                >
                  Sports & Athletics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Admin */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Connect & Admin
            </h4>
            <div className="flex items-center gap-2 mb-4">
              <a
                href="https://github.com/Shahzadakbari"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors border border-slate-700"
                title="GitHub: Shahzadakbari"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors border border-slate-700"
                title="LinkedIn Placeholder"
              >
                <LinkedinIcon />
              </a>
              <button
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors border border-slate-700"
                title="Send Message"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => onNavigate('admin')}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white py-1.5 px-2.5 rounded bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Admin Portal (Instructor & Student)
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ahmad Shahzad Akbari. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite, Tailwind CSS & persistent JSON storage <Heart className="w-3 h-3 text-blue-500 fill-blue-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
