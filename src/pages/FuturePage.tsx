import React, { useState } from 'react';
import { GoalItem } from '../types';
import { Compass, GraduationCap, CheckCircle2, Clock, Target, Rocket, Lightbulb, Code2 } from 'lucide-react';

export const FuturePage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Academic' | 'Technical' | 'Personal'>('All');

  const goals: GoalItem[] = [
    {
      id: 'g1',
      timeframe: 'Short-Term',
      category: 'Technical',
      title: 'Master Frontend & Web Foundations',
      description: 'Complete high school web development with strong proficiency in HTML5, CSS3, responsive layout design, and JavaScript fundamentals.',
      status: 'In Progress',
      targetYear: '2026 - 2027',
    },
    {
      id: 'g2',
      timeframe: 'Short-Term',
      category: 'Academic',
      title: 'Maintain Honors GPA & STEM Coursework',
      description: 'Excel in advanced mathematics, physics, and computer science courses throughout high school to build a solid engineering foundation.',
      status: 'In Progress',
      targetYear: '2027',
    },
    {
      id: 'g3',
      timeframe: 'Medium-Term',
      category: 'Technical',
      title: 'Explore Full-Stack & Python Development',
      description: 'Expand into backend APIs, database management, and Python scripting for algorithmic problem-solving and automation.',
      status: 'Planned',
      targetYear: '2027 - 2028',
    },
    {
      id: 'g4',
      timeframe: 'Medium-Term',
      category: 'Academic',
      title: 'University Admission in Computer Science',
      description: 'Apply to top-tier collegiate Computer Science programs focusing on software systems, artificial intelligence, and software engineering.',
      status: 'Target',
      targetYear: '2029',
    },
    {
      id: 'g5',
      timeframe: 'Long-Term',
      category: 'Personal',
      title: 'Build Open Source & Meaningful Software',
      description: 'Contribute to collaborative open source repositories and engineer applications that solve real-world problems for communities.',
      status: 'Target',
      targetYear: '2030+',
    },
    {
      id: 'g6',
      timeframe: 'Long-Term',
      category: 'Technical',
      title: 'Industry Software Engineering Career',
      description: 'Lead or work with a dynamic software engineering team creating scalable, resilient web platforms and intelligent tools.',
      status: 'Target',
      targetYear: '2032+',
    },
  ];

  const filteredGoals = filter === 'All' ? goals : goals.filter(g => g.category === filter);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Phase 3 • Future Page</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Future Goals & Aspirations
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A roadmap of my academic milestones, technical ambitions, and long-term career vision. This page outlines what I am working toward both in the classroom and beyond.
          </p>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
            <strong>Placeholder Note:</strong> These goals represent a balanced student computer science roadmap. You can edit or replace any goal, target year, or milestone to match your exact plans!
          </div>
        </div>
      </div>

      {/* Timeline Roadmap */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Education & Milestone Roadmap</h2>
            <p className="text-xs text-slate-500">Chronological stages of my learning journey</p>
          </div>
        </div>

        <div className="relative border-l-2 border-blue-200 ml-4 pl-6 space-y-8">
          {/* Milestone 1 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Current Stage • 2026</span>
              <h3 className="text-base font-bold text-slate-900">High School Web Development & CS Foundations</h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                Mastering HTML, CSS, JavaScript, responsive UI design, version control, and building modern web apps.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100 group-hover:bg-blue-600 transition-colors" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target: 2028 - 2029</span>
              <h3 className="text-base font-bold text-slate-900">High School Capstone & College Preparation</h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                Completing advanced coursework, building independent software applications, and preparing college admissions portfolios.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-slate-100 group-hover:bg-blue-600 transition-colors" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target: 2029 - 2033</span>
              <h3 className="text-base font-bold text-slate-900">University Degree in Computer Science / Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                Studying algorithms, data structures, cloud architectures, and pursuing tech internships in industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Goal Cards Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Strategic Goals</h2>
            <p className="text-xs text-slate-500">Filter by category to view focused objectives</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['All', 'Academic', 'Technical', 'Personal'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGoals.map((g) => {
            const statusConfig = {
              'In Progress': { bg: 'bg-amber-50 text-amber-700 border-amber-200', icon: <Clock className="w-3 h-3" /> },
              'Planned': { bg: 'bg-blue-50 text-blue-700 border-blue-200', icon: <Target className="w-3 h-3" /> },
              'Target': { bg: 'bg-purple-50 text-purple-700 border-purple-200', icon: <Lightbulb className="w-3 h-3" /> },
            }[g.status];

            return (
              <div
                key={g.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {g.category} • {g.timeframe}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusConfig.bg}`}>
                      {statusConfig.icon}
                      {g.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {g.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {g.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    Target: {g.targetYear}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Skills I Aim to Master</h2>
            <p className="text-xs text-slate-400">Technical domains I am actively expanding into</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2 text-center text-xs">
          {[
            { skill: 'React & Vite', level: 'Actively Learning' },
            { skill: 'Tailwind CSS', level: 'Proficient' },
            { skill: 'TypeScript', level: 'Foundational' },
            { skill: 'Node & APIs', level: 'Exploring' },
            { skill: 'Python / AI', level: 'Upcoming' },
          ].map((s, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <div className="font-bold text-white text-sm">{s.skill}</div>
              <div className="text-[10px] text-blue-400 font-medium">{s.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
