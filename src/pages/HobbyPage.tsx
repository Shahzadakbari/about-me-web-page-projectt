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
  Play
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
      title: 'Basketball',
      subtitle: 'Fast-paced court play, shooting drills, and team chemistry',
      description:
        'Basketball is one of my biggest passions. Whether playing pickup games at the local park, running scrimmages, or practicing jump shots and handles solo, being on the court clears my mind and pushes my endurance and competitive drive.',
      image:
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&auto=format&fit=crop&q=80',
      icon: Trophy,
      accentColor: 'border-amber-500/30 text-amber-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-800',
      keySkills: ['Perimeter Shooting', 'Court Vision', 'Ball Handling', 'Defensive Agility'],
      stats: [
        { label: 'Primary Role', value: 'Guard / Playmaker' },
        { label: 'Weekly Sessions', value: '3-4 Times' },
        { label: 'Favorite Move', value: 'Step-back Jumper' },
      ],
      favoriteAspect:
        'The quick decision-making under defensive pressure. Just like programming, basketball rewards pattern recognition, rapid spatial awareness, and consistent repetition.',
      highlights: [
        'Dedicated 3-point shooting and free-throw drills',
        'Weekend community tournament and pickup matches',
        'Conditioning: footwork ladders and sprint intervals',
      ],
    },
    {
      id: 'soccer',
      category: 'soccer',
      title: 'Soccer',
      subtitle: 'Tactical team play, ball mastery, and continuous stamina',
      description:
        'Soccer has been a huge part of my life for years. I love the non-stop flow of the match, the teamwork needed to break down defenses, and the sheer thrill of scoring a clean goal or delivering the perfect through-ball to a teammate.',
      image:
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1000&auto=format&fit=crop&q=80',
      icon: Activity,
      accentColor: 'border-emerald-500/30 text-emerald-600',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      keySkills: ['Accurate Passing', 'High Stamina', 'Pitch Awareness', 'First-Touch Control'],
      stats: [
        { label: 'Position', value: 'Winger / Midfielder' },
        { label: 'Weekly Sessions', value: '2-3 Matches' },
        { label: 'Preferred Foot', value: 'Right Foot' },
      ],
      favoriteAspect:
        'The feeling of team synergy when everyone executes a coordinated counterattack and moves the ball with single-touch precision.',
      highlights: [
        '90 minutes of continuous cardiovascular endurance',
        'Tactical positioning and spacing off the ball',
        'Following international leagues and world tournaments',
      ],
    },
    {
      id: 'gaming',
      category: 'gaming',
      title: 'Video Games',
      subtitle: 'Competitive esports, tactical strategy, and relaxing with friends',
      description:
        'Gaming is where I unwind, connect with friends online, and challenge my reflexes. From competitive sports simulations like EA FC and NBA 2K to tactical team shooters and open-world adventures, video games combine storytelling with interactive problem solving.',
      image:
        'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1000&auto=format&fit=crop&q=80',
      icon: Gamepad2,
      accentColor: 'border-purple-500/30 text-purple-600',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-800',
      keySkills: ['Rapid Reflexes', 'Strategic Planning', 'Team Voice Comms', 'Mental Focus'],
      stats: [
        { label: 'Favorite Genres', value: 'Sports & Tactical' },
        { label: 'Platforms', value: 'PC & Console' },
        { label: 'Top Games', value: 'EA FC, 2K, Valorant' },
      ],
      favoriteAspect:
        'Analyzing game mechanics and competing in multiplayer lobbies where communication, timing, and composure lead to clutch victories.',
      highlights: [
        'Competitive online squad matches with friends',
        'Appreciation for game design, physics engines, and graphics',
        'Streamlined mechanical keyboard and high-refresh setup',
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
            <span>My Favorite Hobbies</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Basketball, Soccer & Video Games
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Outside of academics and web development, staying active and enjoying hobbies keeps my energy high.
            Basketball and soccer provide physical fitness, discipline, and competitive team spirit, while video games
            offer a great creative outlet for quick reflexes and strategy with friends.
          </p>

          {/* Filter Tabs */}
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              All 3 Hobbies
            </button>
            <button
              onClick={() => setActiveTab('basketball')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'basketball'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200/60'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Basketball</span>
            </button>
            <button
              onClick={() => setActiveTab('soccer')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'soccer'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/60'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Soccer</span>
            </button>
            <button
              onClick={() => setActiveTab('gaming')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'gaming'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200/60'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Video Games</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Hobbies Cards */}
      <div className="space-y-8">
        {filteredHobbies.map((hobby) => {
          const IconComp = hobby.icon;
          return (
            <div
              key={hobby.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-slate-900 overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${hobby.badgeBg} ${hobby.badgeText} shadow-xs`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      {hobby.title}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{hobby.title}</h2>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5">
                        {hobby.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {hobby.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-1">
                      {hobby.stats.map((s, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {s.label}
                          </div>
                          <div className="text-xs font-bold text-slate-900 mt-1 truncate">
                            {s.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Skills/Tags */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Focus Areas & Techniques
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {hobby.keySkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet Box */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-500" />
                      <span>Why I Love It</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      "{hobby.favoriteAspect}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Balanced Lifestyle Comparison Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">How These Hobbies Complement My Growth</h3>
            <p className="text-xs text-slate-500">Connecting physical sports and digital entertainment to daily discipline</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-600" />
              <h4 className="text-sm font-bold text-amber-950">Basketball: Focus & Hustle</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Teaches relentless effort, hand-eye timing, and mental resilience when bouncing back after missed shots.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 space-y-2">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              <h4 className="text-sm font-bold text-emerald-950">Soccer: Vision & Teamwork</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Builds lasting stamina, trust in teammates, unselfish passing, and situational field awareness.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/60 space-y-2">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-purple-600" />
              <h4 className="text-sm font-bold text-purple-950">Video Games: Strategy & Fun</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sharpens problem solving under pressure, fast reflexes, tactical planning, and relaxed social time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
