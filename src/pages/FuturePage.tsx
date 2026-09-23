import React, { useState } from 'react';
import { GoalItem } from '../types';
import { Compass, GraduationCap, CheckCircle2, Clock, Target, Rocket, Lightbulb, Plane, HeartPulse, Sparkles } from 'lucide-react';

export const FuturePage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Academic' | 'Technical' | 'Personal'>('All');

  const goals: GoalItem[] = [
    {
      id: 'g1',
      timeframe: 'Short-Term',
      category: 'Academic',
      title: "Achieve Straight A's & B's in Sophomore Year",
      description: "Excel in sophomore high school coursework, especially in mathematics, science, and web design classes with focused study habits.",
      status: 'In Progress',
      targetYear: '2026 - 2027',
    },
    {
      id: 'g2',
      timeframe: 'Short-Term',
      category: 'Technical',
      title: 'Master Modern Web Design Foundations',
      description: 'Build responsive, visually appealing websites using HTML, CSS, JavaScript, and modern design principles.',
      status: 'In Progress',
      targetYear: '2027',
    },
    {
      id: 'g3',
      timeframe: 'Medium-Term',
      category: 'Academic',
      title: 'Community College & Medical Pre-requisites',
      description: 'Enroll in community college post-high school graduation to complete all general education and core science pre-requisite courses.',
      status: 'Planned',
      targetYear: '2028 - 2030',
    },
    {
      id: 'g4',
      timeframe: 'Medium-Term',
      category: 'Personal',
      title: 'Dream Travel: Visit Dubai & Paris',
      description: 'Embark on world travel adventures to explore the iconic skyline of Dubai and walk through the historic streets and landmarks of Paris.',
      status: 'Planned',
      targetYear: '2028 - 2031',
    },
    {
      id: 'g5',
      timeframe: 'Long-Term',
      category: 'Academic',
      title: 'Doctoral Program & Medical Career',
      description: 'Transition into specialized medical training and earn credentials to practice as a doctor, helping patients and serving the healthcare community.',
      status: 'Target',
      targetYear: '2032+',
    },
    {
      id: 'g6',
      timeframe: 'Long-Term',
      category: 'Personal',
      title: 'Global Travel & Lifelong Health',
      description: 'Maintain healthy athletic habits in basketball and soccer while traveling internationally to experience diverse global cultures.',
      status: 'Target',
      targetYear: '2032+',
    },
  ];

  const filteredGoals = filter === 'All' ? goals : goals.filter(g => g.category === filter);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-200 dark:border-amber-800/80">
            <Compass className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Future Aspirations</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Future Goals, Medical Path & Travel Dreams
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            My roadmap from high school sophomore year to college, completing medical pre-requisites to become a doctor, and traveling the world to Dubai and Paris.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 text-xs font-medium border border-blue-200 dark:border-blue-800">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Sophomore: A's & B's
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium border border-emerald-200 dark:border-emerald-800">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Career: Doctor
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 text-xs font-medium border border-purple-200 dark:border-purple-800">
              <Plane className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Travel: Dubai & Paris
            </span>
          </div>
        </div>
      </div>

      {/* Travel Highlights Feature Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
            <Plane className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Dream Travel Destinations</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Places I look forward to exploring in the future</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dubai Card */}
          <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-md transition-all flex flex-col bg-slate-50 dark:bg-slate-800/60">
            <div className="aspect-16/9 w-full overflow-hidden bg-slate-200 dark:bg-slate-950 relative">
              <img
                src="/src/assets/images/dubai_skyline_sunset_1790100477620.jpg"
                alt="Dubai Skyline & Architecture"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 text-white text-xs font-bold backdrop-blur-xs">
                Dubai, UAE
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Futuristic Architecture & Modern Wonders</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Dreaming of visiting the Burj Khalifa, the Dubai Marina, desert adventures, and seeing world-class modern architecture in person.
              </p>
            </div>
          </div>

          {/* Paris Card */}
          <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-md transition-all flex flex-col bg-slate-50 dark:bg-slate-800/60">
            <div className="aspect-16/9 w-full overflow-hidden bg-slate-200 dark:bg-slate-950 relative">
              <img
                src="/src/assets/images/paris_eiffel_tower_1790100487684.jpg"
                alt="Paris & The Eiffel Tower"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 text-white text-xs font-bold backdrop-blur-xs">
                Paris, France
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">The City of Light & Historical Culture</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Visiting the iconic Eiffel Tower, strolling along the Seine River, exploring world-renowned museums, and experiencing Parisian culture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Roadmap */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs space-y-8 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Education & Milestone Roadmap</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Chronological stages of my learning and career journey</p>
          </div>
        </div>

        <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-4 pl-6 space-y-8">
          {/* Milestone 1 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-100 dark:ring-amber-950" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Current Stage • 2026 - 2028</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">High School Sophomore & Academic Excellence</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Striving for top grades (A's and B's), excelling in mathematics and web design, staying physically conditioned in basketball and soccer with friends.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-950" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Target: Post-High School • 2028 - 2030</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Community College & Pre-Med Prerequisites</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Completing foundational requirements and prerequisite courses at community college, preparing for transfer into advanced university medical programs.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100 dark:ring-emerald-950" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Target: 2030 - 2034+</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">University Medical Program & Doctor Career</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Joining medical programs, completing clinical rotations, and earning credentials as a practicing doctor to make a lasting difference in patient care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Goal Cards Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Strategic Goals</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Filter by category to view focused objectives</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['All', 'Academic', 'Technical', 'Personal'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
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
              'In Progress': { bg: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800', icon: <Clock className="w-3 h-3" /> },
              'Planned': { bg: 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800', icon: <Target className="w-3 h-3" /> },
              'Target': { bg: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800', icon: <Lightbulb className="w-3 h-3" /> },
            }[g.status];

            return (
              <div
                key={g.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {g.category} • {g.timeframe}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusConfig.bg}`}>
                      {statusConfig.icon}
                      {g.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                    {g.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {g.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    Target: {g.targetYear}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Academic & Personal Pillars */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Current Focus Areas</h2>
            <p className="text-xs text-slate-400">Academic & personal growth for sophomore year</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2 text-center text-xs">
          {[
            { skill: 'High School Math', level: 'Targeting A Grades' },
            { skill: 'Web Design', level: 'HTML, CSS & Projects' },
            { skill: 'Basketball & Soccer', level: 'Playing with Friends' },
            { skill: 'College Pre-Reqs', level: 'Community College Path' },
            { skill: 'Doctor Aspirations', level: 'Long-term Calling' },
          ].map((s, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <div className="font-bold text-white text-sm">{s.skill}</div>
              <div className="text-[10px] text-amber-400 font-medium">{s.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
