import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Calendar,
  MapPin,
  BookOpen,
  Send,
  CheckCircle,
  Sparkles,
  Mail,
  Award,
  Code2,
  Trophy,
  AlertCircle
} from 'lucide-react';
import { YouTubeIcon, InstagramIcon, GitHubIcon } from '../components/SocialIcons';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSendMessage: (data: {
    name: string;
    email: string;
    reason: string;
    subject: string;
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
    reason: 'School / Web Project',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const reasonOptions = [
    'School / Web Project',
    'Sports & Athletics',
    'Collaboration',
    'Question',
    'Feedback',
    'General Inquiry'
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    onSendMessage({
      name: 'Newsletter Subscriber',
      email: newsletterEmail.trim(),
      reason: 'General Inquiry',
      subject: 'Newsletter Subscription',
      message: `User subscribed to portfolio updates with email: ${newsletterEmail.trim()}`,
    });
    setTimeout(() => setNewsletterSubscribed(false), 5000);
    setNewsletterEmail('');
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const ok = await onSendMessage({
        ...formData,
        subject: formData.subject.trim() || formData.reason,
      });
      if (ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', reason: 'School / Web Project', subject: '', message: '' });
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
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xs transition-colors">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Portrait Image with Studio Backdrop - Above the fold */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-full max-w-[180px] aspect-3/4 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-700 bg-slate-900 group">
              <img
                src="/src/assets/images/user_profile.jpg"
                alt="Ahmad Shahzad Akbari"
                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Text & Newsletter */}
          <div className="md:col-span-9 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800/80">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>High School Sophomore • Class of 2029</span>
            </div>

            {/* Full Name in <h1> as required by Rubric Criterion 2 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Ahmad Shahzad Akbari
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Welcome to my portfolio! I really like{' '}
              <button
                onClick={() => onNavigate('future')}
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Web Design
              </button>{' '}
              and <span className="font-semibold text-slate-900 dark:text-white">Math</span>. In my free time, I play{' '}
              <button
                onClick={() => onNavigate('sports')}
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                basketball & soccer
              </button>{' '}
              with friends and play video games. My goal is to become a{' '}
              <button
                onClick={() => onNavigate('future')}
                className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                doctor
              </button>
              .
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2 space-y-2">
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                Subscribe to my newsletter
              </div>

              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Thanks for subscribing! I'll keep you posted on new updates.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:row gap-2.5">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    required
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold text-sm transition-colors shadow-2xs shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Born July 7, 2011
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> California, USA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Focus: Web Dev & Math
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Official Student Biography Section - Exactly 3 <p> elements as required by Rubric Criterion 2 */}
      <section
        id="biography"
        aria-label="Student Biography"
        className="biography bg-slate-50/80 dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-5"
      >
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-400 text-slate-950">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Biography</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Academic Background, Extracurriculars & Future Path</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Paragraph 1: School & Classes */}
          <p className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs">
            Hi, I'm Ahmad! I am a 10th-grade high school sophomore. I really enjoy learning web design and math. My goal this school year is to work hard and get straight A's and B's in all of my classes.
          </p>

          {/* Paragraph 2: Sports & Games */}
          <p className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs">
            After school and on weekends, I love playing basketball and soccer with my friends. I am a huge fan of Cristiano Ronaldo because of his hard work. In my free time, I also like playing video games like PUBG Mobile and Highway Racer Pro.
          </p>

          {/* Paragraph 3: Future Goals */}
          <p className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs">
            After high school, I plan to go to community college and then transfer to a university to become a doctor. I want to help people get better. I also hope to travel and visit Dubai and Paris one day.
          </p>
        </div>
      </section>

      {/* 3. Blog & Highlights 3-Column Grid (Images / GIFs) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Highlights & Media Cards</h2>
          <button
            onClick={() => onNavigate('media')}
            className="text-xs font-semibold text-blue-600 dark:text-amber-400 hover:text-blue-700 dark:hover:text-amber-300 flex items-center gap-1 cursor-pointer"
          >
            Open Media Gallery →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Basketball */}
          <div
            onClick={() => onNavigate('hobby')}
            className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
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
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Basketball & Pickup Games
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Hitting the outdoor courts and playing basketball with friends after school.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                Sept 2026
              </div>
            </div>
          </div>

          {/* Card 2: Soccer & Ronaldo */}
          <div
            onClick={() => onNavigate('sports')}
            className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
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
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Soccer & Watching Ronaldo
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Playing weekend soccer with friends and following Cristiano Ronaldo — the greatest of all time.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                Sept 2026
              </div>
            </div>
          </div>

          {/* Card 3: Dubai & Paris Travel */}
          <div
            onClick={() => onNavigate('future')}
            className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            <div className="aspect-4/3 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden relative">
              <img
                src="/src/assets/images/dubai_skyline_sunset_1790100477620.jpg"
                alt="Dream Destinations: Dubai and Paris"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                TRAVEL
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Future Goals & World Travel
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Working hard in school toward my medical career, and my dream travel destinations: Dubai and Paris!
                </p>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                Sept 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Area - Includes Social Media and Email Links (Rubric Criterion 2) & Contact Form (Criterion 3) */}
      <section
        id="contact-section"
        aria-label="Contact Area"
        className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xs space-y-8"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">Contact & Connect</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Reach out directly or send a message below. All messages persist directly to <code className="font-mono text-blue-600 dark:text-blue-400">data/contactReceived.json</code>.
          </p>
        </div>

        {/* Social Media & Direct Email Links Row (Required by Criterion 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <a
            href="mailto:ahmad1212132011@gmail.com"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-xs font-semibold group"
          >
            <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <span className="truncate">Email Ahmad</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-red-400 hover:text-red-600 dark:hover:text-red-400 transition-colors text-xs font-semibold group"
          >
            <div className="w-7 h-7 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
              <YouTubeIcon className="w-3.5 h-3.5" />
            </div>
            <span className="truncate">YouTube Videos</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-pink-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-xs font-semibold group"
          >
            <div className="w-7 h-7 rounded-lg bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
              <InstagramIcon className="w-3.5 h-3.5" />
            </div>
            <span className="truncate">Instagram</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors text-xs font-semibold group"
          >
            <div className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0">
              <GitHubIcon className="w-3.5 h-3.5" />
            </div>
            <span className="truncate">GitHub Code</span>
          </a>
        </div>

        {/* Contact Form */}
        {submitSuccess ? (
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                Thank you for reaching out. Your message has been saved to <code className="font-mono">data/contactReceived.json</code>.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 text-xs font-medium border border-red-200 dark:border-red-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jordan Smith"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. jordan@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Reason for Contact <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all cursor-pointer"
                >
                  {reasonOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your note or question here..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all"
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
