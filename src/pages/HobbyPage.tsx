import React, { useState } from 'react';
import {
  Trophy,
  Gamepad2,
  Activity,
  Flame,
  Clock,
  Sparkles,
  Users,
  Target,
  Zap,
  Play,
  Heart
} from 'lucide-react';

type HobbyCategory = 'all' | 'basketball' | 'soccer' | 'gaming';

interface HobbyItem {
  id: string;
  category: 'basketball' | 'soccer' | 'gaming';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: typeof Trophy;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  keySkills: string[];
  stats: { label: string; value: string }[];
  favoriteAspect: string;
  highlights: string[];
}

export const HobbyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HobbyCategory>('all');

  const hobbies: HobbyItem[] = [
    {
      id: 'basketball',
      category: 'basketball',
      title: 'Basketball with Friends',
      subtitle: 'Fast-paced pickup games, shooting hoops, and having fun',
      description:
        'Playing basketball with my friends is one of my absolute favorite things to do. We head to the outdoor courts after school and on weekends to run friendly games, practice shooting, and compete with lots of energy and laughs.',
      image:
        '/src/assets/images/basketball_dunk.gif',
      icon: Trophy,
      accentColor: 'border-amber-500/30 text-amber-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-800',
      keySkills: ['Court Fun', 'Team Spirit', 'Shooting Hoops', 'Fast Breaks'],
      stats: [
        { label: 'How I Play', value: 'With Friends' },
        { label: 'Court Type', value: 'Outdoor & Park' },
        { label: 'Favorite Part', value: 'Scoring with friends' },
      ],
      favoriteAspect:
        'The friendly competition and camaraderie. Whether it is 3v3 or just shooting around with friends, it is the best way to de-stress and stay active.',
      highlights: [
        'Running friendly pickup games with friends',
        'Practicing free throws and three-point shots',
        'Staying energized and conditioned outside class',
      ],
    },
    {
      id: 'soccer',
      category: 'soccer',
      title: 'Soccer & Following Ronaldo',
      subtitle: 'Weekend matches with friends & inspired by Cristiano Ronaldo',
      description:
        'Soccer is another sport I love playing with my friends. We set up matches, pass the ball around, and enjoy every minute on the field. Plus, Cristiano Ronaldo is the undisputed GOAT (Greatest of All Time) — watching his dedication, iconic celebrations, and incredible work ethic inspires me every day.',
      image:
        '/src/assets/images/soccer_ronaldo_celebrate_1790100465423.jpg',
      icon: Activity,
      accentColor: 'border-emerald-500/30 text-emerald-600',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      keySkills: ['Passing & Moving', 'Team Chemistry', 'Stamina', 'Ronaldo Fan'],
      stats: [
        { label: 'Favorite Player', value: 'Cristiano Ronaldo' },
        { label: 'Play Style', value: 'Games with Friends' },
        { label: 'GOAT Status', value: 'CR7 #1' },
      ],
      favoriteAspect:
        'Celebrating goals with friends and watching Cristiano Ronaldo clutch out big matches with unshakeable confidence.',
      highlights: [
        'Casual matches with friends at local parks and fields',
        'Watching Ronaldo highlights and classic championship games',
        'Practicing ball control and having a blast playing together',
      ],
    },
    {
      id: 'gaming',
      category: 'gaming',
      title: 'PUBG Mobile & Highway Racer Pro (HRP)',
      subtitle: 'Intense battle royale squads & high-speed highway racing',
      description:
        'When it comes to video games, my go-to titles are PUBG Mobile and Highway Racer Pro (HRP). In PUBG Mobile, I jump into squad matches, strategize positioning, and fight for the chicken dinner. In Highway Racer Pro, it is all about adrenaline, dodging traffic, and mastering high-speed car controls.',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000&auto=format&fit=crop&q=80',
      icon: Gamepad2,
      accentColor: 'border-purple-500/30 text-purple-600',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-800',
      keySkills: ['Quick Reflexes', 'Squad Strategy', 'Highway Precision', 'Focus'],
      stats: [
        { label: 'Main Battle Royale', value: 'PUBG Mobile' },
        { label: 'Main Racing Game', value: 'Highway Racer Pro (HRP)' },
        { label: 'Session Type', value: 'Squads & Solo Racing' },
      ],
      favoriteAspect:
        'Clutching up in final circles on PUBG Mobile with friends and pulling off close passes at max speed in Highway Racer Pro.',
      highlights: [
        'Dropping into hot zones with squadmates in PUBG Mobile',
        'Upgrading and speeding through lanes in Highway Racer Pro',
        'Having fun chatting and playing with friends online',
      ],
    },
  ];

  const filteredHobbies =
    activeTab === 'all'
      ? hobbies
      : hobbies.filter((hobby) => hobby.category === activeTab);

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>My Favorite Hobbies & Sports</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Basketball, Soccer, PUBG Mobile & HRP
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Outside of high school classes and web design, this is how I stay active and have fun: playing basketball and soccer with friends, following Cristiano Ronaldo, and gaming sessions in PUBG Mobile and Highway Racer Pro.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Hobbies ({hobbies.length})
            </button>
            <button
              onClick={() => setActiveTab('basketball')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'basketball'
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Basketball
            </button>
            <button
              onClick={() => setActiveTab('soccer')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'soccer'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Soccer & Ronaldo
            </button>
            <button
              onClick={() => setActiveTab('gaming')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'gaming'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              PUBG Mobile & HRP
            </button>
          </div>
        </div>
      </div>

      {/* Hobby Cards */}
      <div className="space-y-8">
        {filteredHobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <div
              key={hobby.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row"
            >
              {/* Media Preview */}
              <div className="lg:w-5/12 relative aspect-16/9 lg:aspect-auto overflow-hidden bg-slate-100">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-xs ${hobby.badgeBg} ${hobby.badgeText}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {hobby.title}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {hobby.title}
                  </h2>
                  <div className="text-xs font-medium text-amber-600">
                    {hobby.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 bg-slate-50/50 rounded-xl px-4">
                  {hobby.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {stat.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Favorite Aspect */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-slate-700">
                  <span className="font-bold text-slate-900">Why I Love It: </span>
                  {hobby.favoriteAspect}
                </div>

                {/* Highlights */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                    Key Highlights
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {hobby.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
