import React from 'react';
import { Trophy, Activity, Heart, Award, Shield, AlertCircle, Play, Users, Star } from 'lucide-react';

export const SportsPage: React.FC = () => {
  const sportsCards = [
    {
      title: 'Soccer with Friends',
      role: 'Games with Friends • Cristiano Ronaldo Fan',
      description: 'Playing pickup soccer matches with friends at local parks and school fields. Inspired by Cristiano Ronaldo, the best player in the world.',
      stats: 'Teamwork • High Energy • Having Fun with Friends',
      image: '/src/assets/images/soccer_ronaldo_celebrate_1790100465423.jpg',
      color: 'emerald',
    },
    {
      title: 'Basketball with Friends',
      role: 'Outdoor Court Games & Shooting Hoops',
      description: 'Running casual pickup basketball games with friends, working on jump shots, fast breaks, and friendly competition after school.',
      stats: 'Quick Reflexes • Shooting Hoops • Friendly Competition',
      image: '/src/assets/images/basketball_court_sunset_1790100453864.jpg',
      color: 'amber',
    },
    {
      title: 'Active Conditioning',
      role: 'Cardio & Keeping in Shape',
      description: 'Staying healthy, energized, and conditioned through active sports sessions, sprinting, and regular games with friends.',
      stats: 'Stamina • Health • Staying Active',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
      color: 'blue',
    },
  ];

  const weeklySchedule = [
    { day: 'Monday', activity: 'Casual soccer match with friends after school', duration: '60 mins' },
    { day: 'Wednesday', activity: 'Basketball pickup game & shooting practice at the park', duration: '50 mins' },
    { day: 'Friday', activity: 'Outdoor running & weekend sports warm-up', duration: '40 mins' },
    { day: 'Weekend', activity: 'Full basketball & soccer games with friends', duration: '90 mins' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Sports & Athletics</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Basketball & Soccer with Friends
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            I love playing basketball and soccer with my friends. It is the best way to stay active, build team spirit, and have fun. In soccer, Cristiano Ronaldo is the greatest player ever and a huge inspiration for hard work and greatness!
          </p>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-slate-700 flex items-start gap-2.5">
            <Star className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Player Inspiration:</span> Cristiano Ronaldo is the best. His discipline, confidence, and match-winning clutch moments set the standard.
            </div>
          </div>
        </div>
      </div>

      {/* Disciplines Grid with Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sportsCards.map((sport, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col overflow-hidden">
            <div className="aspect-16/10 w-full overflow-hidden bg-slate-100">
              <img
                src={sport.image}
                alt={sport.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  {sport.role}
                </span>
                <h3 className="font-bold text-slate-900 text-lg">
                  {sport.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sport.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                Key Focus: <span className="text-slate-800 font-semibold">{sport.stats}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ronaldo & Team Highlight Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>The GOAT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Cristiano Ronaldo Spotlight</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Why CR7 is my favorite athlete and soccer icon
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="text-sm font-bold text-white">Work Ethic & Dedication</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              First to arrive at training and relentless in pursuing perfection every single day of his career.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="text-sm font-bold text-white">Clutch Mentality</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Stepping up in the biggest tournament games and championship moments under maximum pressure.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="text-sm font-bold text-white">Iconic Celebrations</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The iconic "Siuuu" celebration that unites soccer fans around the globe whenever he scores a goal.
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Training Routine */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
            <Award className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Weekly Sports Routine</h2>
            <p className="text-xs text-slate-500">How I stay active playing basketball and soccer with friends</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {weeklySchedule.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-600">{item.day}</span>
                <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {item.duration}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {item.activity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
