import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Calendar,
  MapPin,
  BookOpen,
  Send,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Mail,
  Award,
  Code2,
  Trophy
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSendMessage: (data: {
    name: string;
    email: string;
    subject: string;
    category: string;
    message: string;
  }) => Promise<boolean>;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSendMessage,
}) => {
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Full Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'General',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    // Also submit as a newsletter contact inquiry
    onSendMessage({
      name: 'Newsletter Subscriber',
      email: newsletterEmail,
      subject: 'Newsletter Subscription',
      category: 'General',
      message: `User subscribed to updates with email: ${newsletterEmail}`,
    });
    setTimeout(() => setNewsletterSubscribed(false), 5000);
    setNewsletterEmail('');
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const ok = await onSendMessage(formData);
      if (ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', category: 'General', message: '' });
        setTimeout(() => setSubmitSuccess(false), 6000);
      } else {
        setErrorMessage('Could not send message. Please try again.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* 1. Hero Split Card - Exact Sidenote Theme */}
      <section className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Portrait Image with Studio Backdrop */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-3/4 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 group">
              <img
                src="/src/assets/images/user_profile.jpg"
                alt="Ahmad Shahzad Akbari"
                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Text & Newsletter */}
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
              <span>Sophomore Year • Class of 2029</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Hey! I'm Shahzad.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              I am a high school <span className="font-semibold text-slate-900">sophomore</span> passionate about{' '}
              <button
                onClick={() => onNavigate('future')}
                className="text-blue-600 font-medium underline hover:text-blue-700 transition-colors"
              >
                Web Design
              </button>{' '}
              and <span className="font-semibold text-slate-900">Mathematics</span>. Outside class, you can find me playing{' '}
              <button
                onClick={() => onNavigate('sports')}
                className="text-blue-600 font-medium underline hover:text-blue-700 transition-colors"
              >
                basketball & soccer
              </button>{' '}
              with my friends, dropping in on PUBG Mobile, or exploring future goals toward becoming a{' '}
              <button
                onClick={() => onNavigate('future')}
                className="text-blue-600 font-medium underline hover:text-blue-700 transition-colors"
              >
                doctor
              </button>
              .
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2 space-y-2">
              <div className="text-xs font-semibold text-slate-900">
                Subscribe to my newsletter
              </div>

              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Thanks for subscribing! I'll keep you posted on new updates.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold text-sm transition-colors shadow-2xs shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100">
                <Calendar className="w-3.5 h-3.5 text-amber-600" /> Born July 7, 2011
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100">
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> California, USA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Focus: Web Dev & CS
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Blog & Highlights 3-Column Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-950">Blog & Highlights</h2>
          <button
            onClick={() => onNavigate('hobby')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            View more →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div
            onClick={() => onNavigate('hobby')}
            className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            <div className="aspect-4/3 w-full bg-slate-900 overflow-hidden relative">
              <img
                src="/src/assets/images/basketball_dunk.gif"
                alt="Basketball with Friends"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 text-amber-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                HOOPS • GIF
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                  Basketball & Pickup Games
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Hitting the outdoor courts and playing basketball with friends after school.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Sept 2026
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onNavigate('sports')}
            className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            <div className="aspect-4/3 w-full bg-slate-900 overflow-hidden relative">
              <img
                src="/src/assets/images/ronaldo_celebration.gif"
                alt="Cristiano Ronaldo Siuu Celebration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 text-amber-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                CR7 • GIF
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                  Soccer & Watching Ronaldo
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Playing weekend soccer with friends and following the legendary Cristiano Ronaldo — the greatest of all time.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Sept 2026
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => onNavigate('future')}
            className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            <div className="aspect-4/3 w-full bg-slate-100 overflow-hidden">
              <img
                src="/src/assets/images/dubai_skyline_sunset_1790100477620.jpg"
                alt="Dream Destinations: Dubai and Paris"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                  Future Goals & World Travel
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Working hard in school toward my medical career, and my dream travel destinations: Dubai and Paris!
                </p>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Sept 2026
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Detailed Biography Section */}
      <section id="bio-details-section" className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-400 text-slate-950">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">About Ahmad Shahzad Akbari</h2>
              <p className="text-xs text-slate-500">Student Biography, Academic Path & Core Skills</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-amber-600" /> Web Design & Math
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Passionate about web design and mathematics. Striving for straight A's and B's this sophomore school year while building real-world web projects.
            </p>
          </div>

          <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-600" /> Playing with Friends
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Love playing basketball and soccer with friends. Big fan of Cristiano Ronaldo, and gaming sessions in PUBG Mobile and Highway Racer Pro (HRP).
            </p>
          </div>

          <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" /> Path to Becoming a Doctor
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Planning to attend community college post-high school to complete medical prerequisites, then transfer to university toward becoming a doctor.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Interactive Contact Form */}
      <section id="contact-section" className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-950">Send a Message</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Have a question, feedback on this project, or want to collaborate? Messages are delivered to the persistent admin inbox.
          </p>
        </div>

        {submitSuccess ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
              <p className="text-xs text-emerald-700 mt-0.5">
                Thank you for reaching out. Your message has been saved to the backend inbox.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jordan Smith"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. jordan@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                >
                  <option value="General">General Inquiry</option>
                  <option value="School & Tech">School / Web Project</option>
                  <option value="Athletics">Sports & Athletics</option>
                  <option value="Collaboration">Collaboration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your note or question here..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
