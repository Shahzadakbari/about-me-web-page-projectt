import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  User, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Code, 
  Camera, 
  Trophy, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Info
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSendMessage: (data: { name: string; email: string; subject: string; category: string; message: string }) => Promise<boolean>;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSendMessage }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'General',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-700">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Student Portfolio • High School Web Dev</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-200">Ahmad Shahzad Akbari</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                Aspiring software developer, student, and sports enthusiast. Welcome to my personal web page!
              </p>
            </div>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Born: July 7, 2011</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Focus: Computer Science</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>California, USA</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md hover:shadow-blue-500/25 transition-all flex items-center gap-2"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('media')}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
              >
                View Media Gallery
              </button>
            </div>
          </div>

          {/* Hero Right: Profile Photo Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-2 bg-linear-to-tr from-blue-600 to-slate-700 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-slate-800 border-2 border-dashed border-slate-600 flex flex-col items-center justify-center p-6 text-center group hover:border-blue-400 transition-colors">
                <div className="w-20 h-20 rounded-full bg-slate-700/80 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-105 transition-transform">
                  <User className="w-10 h-10" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/60 mb-2">
                  Placeholder
                </span>
                <p className="text-xs text-slate-300 font-medium">Profile Photo</p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Upload your portrait photo to <code className="bg-slate-900 px-1 py-0.5 rounded text-blue-300">public/profile.jpg</code>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Biography Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Info className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            My Journey & Background
          </h2>

          <div className="space-y-4 text-slate-600 leading-relaxed">
            {/* Note badge explaining placeholder */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-start gap-3">
              <span className="font-bold text-blue-700 shrink-0 uppercase tracking-wider mt-0.5">Note:</span>
              <p>
                This biography section contains standard placeholder text. You can easily customize this text to tell your own story, your favorite school subjects, your background, and your dreams.
              </p>
            </div>

            <p className="text-base">
              Hello! My name is <strong>Ahmad Shahzad Akbari</strong>. I am currently a high school student undertaking my first computer science and web development course. I have always been fascinated by how software works behind the scenes—from interactive web applications to mobile interfaces and game logic.
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-base">
              When I am not working on coding assignments, I spend my time exploring creative digital photography, analyzing sports strategies, and collaborating with fellow students on technology challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Pillar Cards */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">What I'm Passionate About</h3>
            <p className="text-sm text-slate-500">Core areas of interest in my academic and personal life</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div 
            onClick={() => onNavigate('future')}
            className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Coding & Web Tech
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Building user interfaces, learning frontend frameworks, and designing clean code logic.
              </p>
            </div>
            <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore Goals <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => onNavigate('hobby')}
            className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Creative Photography
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Exploring perspective, composition, editing styles, and digital visual storytelling.
              </p>
            </div>
            <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              View Hobby Page <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => onNavigate('sports')}
            className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Sports & Athletics
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Staying active through team sports, agility training, and developing competitive teamwork.
              </p>
            </div>
            <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              View Sports Page <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => onNavigate('media')}
            className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Media Showcase
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                A curated media gallery featuring photos, video embeds, and course project milestones.
              </p>
            </div>
            <div className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse Gallery <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
              <Send className="w-3.5 h-3.5 text-blue-600" />
              <span>Contact Form</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Get in Touch
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Have a question, feedback on this project, or want to collaborate? Fill out this form and your message will be saved securely to the website's persistent storage backend.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email (Direct)</span>
                <p className="text-sm font-medium text-slate-900">ahmad1212132011@gmail.com</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Admin Dashboard</span>
                <p className="text-sm font-medium text-slate-900">
                  All messages submitted here can be reviewed and managed in the{' '}
                  <button 
                    onClick={() => onNavigate('admin')}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Admin Portal
                  </button>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            {submitSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Thank you for your message!</p>
                  <p className="text-xs mt-0.5">Your inquiry has been stored in the backend JSON database.</p>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Alex Johnson"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="General">General Inquiries</option>
                    <option value="Feedback">Project Feedback</option>
                    <option value="Question">Question for Ahmad</option>
                    <option value="Education">School / Class Assignment</option>
                    <option value="Collaboration">Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-semibold text-sm shadow-md hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};
