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
  Heart,
  X
} from 'lucide-react';

type HobbyCategory = 'all' | 'basketball' | 'soccer' | 'gaming';

interface VideoEntry {
  title: string;
  game: string;
  thumbnail: string;
  videoUrl: string;
  videoEmbedUrl: string;
}

interface HobbyItem {
  id: string;
  category: 'basketball' | 'soccer' | 'gaming';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl?: string;
  videoEmbedUrl?: string;
  videos?: VideoEntry[];
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
  const [activeVideoModal, setActiveVideoModal] = useState<{ title: string; embedUrl: string; youtubeUrl: string } | null>(null);

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
        '/src/assets/images/ronaldo_celebration.gif',
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
        'When it comes to video games, my go-to titles are PUBG Mobile and Highway Racer Pro (HRP). In PUBG Mobile, I jump into squad matches, strategize positioning, and fight for the chicken dinner. In Highway Racer Pro, it is all about adrenaline, dodging traffic, and mastering high-speed car controls. Watch my featured gameplay videos below!',
      image:
        'https://img.youtube.com/vi/k3aKITOrBcs/hqdefault.jpg',
      videoUrl: 'https://youtu.be/k3aKITOrBcs',
      videoEmbedUrl: 'https://www.youtube.com/embed/k3aKITOrBcs?autoplay=1&rel=0',
      videos: [
        {
          title: 'Highway Racer Pro — High Speed Traffic Run',
          game: 'Highway Racer Pro (HRP)',
          thumbnail: 'https://img.youtube.com/vi/k3aKITOrBcs/hqdefault.jpg',
          videoUrl: 'https://youtu.be/k3aKITOrBcs',
          videoEmbedUrl: 'https://www.youtube.com/embed/k3aKITOrBcs?autoplay=1&rel=0',
        },
        {
          title: 'PUBG Mobile — Squad Gameplay & Highlights',
          game: 'PUBG Mobile',
          thumbnail: 'https://img.youtube.com/vi/2mfx9hJ0VB4/hqdefault.jpg',
          videoUrl: 'https://youtu.be/2mfx9hJ0VB4',
          videoEmbedUrl: 'https://www.youtube.com/embed/2mfx9hJ0VB4?autoplay=1&rel=0',
        },
      ],
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
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800/80">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>My Favorite Hobbies & Sports</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Basketball, Soccer, PUBG Mobile & HRP
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Outside of high school classes and web design, this is how I stay active and have fun: playing basketball and soccer with friends, following Cristiano Ronaldo, and gaming sessions in PUBG Mobile and Highway Racer Pro.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Hobbies ({hobbies.length})
            </button>
            <button
              onClick={() => setActiveTab('basketball')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'basketball'
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Basketball
            </button>
            <button
              onClick={() => setActiveTab('soccer')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'soccer'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Soccer & Ronaldo
            </button>
            <button
              onClick={() => setActiveTab('gaming')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'gaming'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
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
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row"
            >
              {/* Media Preview */}
              <div className="lg:w-5/12 relative aspect-16/9 lg:aspect-auto overflow-hidden bg-slate-100 dark:bg-slate-950">
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {hobby.title}
                  </h2>
                  <div className="text-xs font-medium text-amber-600 dark:text-amber-400">
                    {hobby.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl px-4">
                  {hobby.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                        {stat.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Favorite Aspect */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/50 text-xs text-slate-700 dark:text-slate-200">
                  <span className="font-bold text-slate-900 dark:text-white">Why I Love It: </span>
                  {hobby.favoriteAspect}
                </div>

                {/* Video Play Buttons for Gaming or single video */}
                {hobby.videos && hobby.videos.length > 0 ? (
                  <div className="pt-2 space-y-2">
                    <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Featured Gameplay Videos:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {hobby.videos.map((vid, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-800 transition-colors"
                        >
                          <div className="min-w-0 pr-2">
                            <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                              {vid.game}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                              {vid.title}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              setActiveVideoModal({
                                title: vid.title,
                                embedUrl: vid.videoEmbedUrl,
                                youtubeUrl: vid.videoUrl,
                              })
                            }
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-[11px] shrink-0 transition-all cursor-pointer shadow-2xs"
                          >
                            <Play className="w-3 h-3 fill-white" />
                            Watch
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : hobby.videoEmbedUrl ? (
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() =>
                        setActiveVideoModal({
                          title: hobby.title,
                          embedUrl: hobby.videoEmbedUrl!,
                          youtubeUrl: hobby.videoUrl || 'https://youtu.be/k3aKITOrBcs',
                        })
                      }
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-xs cursor-pointer group"
                    >
                      <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                      Watch Gameplay Video
                    </button>
                    <a
                      href={hobby.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-purple-600 dark:text-purple-400 hover:underline font-medium"
                    >
                      Open YouTube link ↗
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/9 bg-slate-950">
              <iframe
                src={activeVideoModal.embedUrl}
                title={activeVideoModal.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors cursor-pointer z-10"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activeVideoModal.title}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  PUBG Mobile
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Squad gameplay and clutch moments in PUBG Mobile. Watch right here or open directly on YouTube.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 text-xs">
                <a
                  href={activeVideoModal.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Watch on YouTube
                </a>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
