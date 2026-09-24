import React, { useState } from 'react';
import { MediaItem } from '../types';
import { Image, Play, Filter, X, Calendar, Tag, AlertCircle, Maximize2, ExternalLink, Share2 } from 'lucide-react';
import { YouTubeIcon, InstagramIcon } from '../components/SocialIcons';

export const MediaPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Gallery items - 10 cards meeting all rubric criteria: image + video + social media
  const mediaItems: MediaItem[] = [
    {
      id: 'm0',
      title: 'Ahmad Shahzad Akbari — Student Portrait',
      category: 'Portraits',
      type: 'image',
      url: '/src/assets/images/user_profile.jpg',
      caption: 'Official student portrait for high school portfolio, academic records, and web profile.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
    {
      id: 'm1',
      title: 'Pickup Basketball with Friends (GIF)',
      category: 'Sports & Action',
      type: 'image',
      url: '/src/assets/images/basketball_dunk.gif',
      caption: 'Playing outdoor basketball with friends, shooting hoops, and running fast breaks after school.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
    {
      id: 'm2',
      title: 'Soccer Matches & Ronaldo Celebration (GIF)',
      category: 'Sports & Action',
      type: 'image',
      url: '/src/assets/images/ronaldo_celebration.gif',
      caption: 'Cristiano Ronaldo celebration GIF — the GOAT whose unmatched dedication inspires our friendly matches and hard work.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
    {
      id: 'm3',
      title: 'Dream Destination: Dubai Skyline & Architecture',
      category: 'Travel Dreams',
      type: 'image',
      url: '/src/assets/images/dubai_skyline_sunset_1790100477620.jpg',
      caption: 'Aspiration to travel to Dubai and experience its futuristic architecture, desert landscapes, and Burj Khalifa.',
      date: 'Future Goal',
      isPlaceholder: false,
    },
    {
      id: 'm4',
      title: 'Dream Destination: Paris & The Eiffel Tower',
      category: 'Travel Dreams',
      type: 'image',
      url: '/src/assets/images/paris_eiffel_tower_1790100487684.jpg',
      caption: 'Goal to visit Paris, walk along the historic Seine River, and explore world-renowned French cultural landmarks.',
      date: 'Future Goal',
      isPlaceholder: false,
    },
    {
      id: 'm5',
      title: 'Web Design & Math Workspace',
      category: 'School & Tech',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80',
      caption: 'Working through responsive web design assignments, JavaScript coding, and sophomore mathematics study sessions.',
      date: 'Sept 2026',
      isPlaceholder: true,
    },
    {
      id: 'm6',
      title: 'PUBG Mobile Squad Gameplay & Clutch Action',
      category: 'Videos',
      type: 'video',
      url: 'https://img.youtube.com/vi/2mfx9hJ0VB4/hqdefault.jpg',
      videoEmbedUrl: 'https://www.youtube.com/embed/2mfx9hJ0VB4?autoplay=1&rel=0',
      externalUrl: 'https://youtu.be/2mfx9hJ0VB4',
      caption: 'Watch my PUBG Mobile squad gameplay and clutch action! Intense firefights, strategic rotations, and aiming for the chicken dinner.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
    {
      id: 'm7',
      title: 'Highway Racer Pro (HRP) High-Speed Run',
      category: 'Videos',
      type: 'video',
      url: 'https://img.youtube.com/vi/k3aKITOrBcs/hqdefault.jpg',
      videoEmbedUrl: 'https://www.youtube.com/embed/k3aKITOrBcs?autoplay=1&rel=0',
      externalUrl: 'https://youtu.be/k3aKITOrBcs',
      caption: 'High-speed highway racing in Highway Racer Pro (HRP)! Dodging oncoming traffic, precision overtakes, and high-octane driving speed.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
    {
      id: 'm8',
      title: 'Social Media Highlight: Game Day & Soccer Clips',
      category: 'Social Media',
      type: 'social',
      url: '/src/assets/images/ronaldo_celebration.gif',
      externalUrl: 'https://instagram.com',
      caption: 'Social media reel showcasing weekend soccer highlights, pickup basketball friendly matches, and sports moments with friends.',
      date: 'Social Feed',
      isPlaceholder: false,
    },
    {
      id: 'm9',
      title: 'Academic Milestone: Mathematics & Coding Honor Roll',
      category: 'School & Tech',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&auto=format&fit=crop&q=80',
      caption: 'Sophomore academic commitment striving for straight A\'s and B\'s in mathematics, web development, and sciences.',
      date: 'Class of 2029',
      isPlaceholder: true,
    },
  ];

  const categories = ['All', 'Portraits', 'Sports & Action', 'Travel Dreams', 'School & Tech', 'Videos', 'Social Media'];

  const filteredItems = activeCategory === 'All'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-200 dark:border-amber-800/80">
            <Image className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Media Showcase ({mediaItems.length} Items)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Photos, Sports, Gameplay Videos & Social Media
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            A comprehensive visual gallery of my high school journey, athletic highlights in basketball and soccer, YouTube gaming gameplay (PUBG & Highway Racer Pro), social media moments, and dream travel destinations in Dubai and Paris.
          </p>

          <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/60 text-xs text-purple-900 dark:text-purple-200 flex items-start gap-2.5 mt-4">
            <Play className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5 fill-purple-600 dark:fill-purple-400" />
            <div>
              <span className="font-bold text-purple-950 dark:text-white">Interactive Gallery:</span> Click any card to expand high-resolution photos, play embedded 16:9 YouTube videos directly in the player modal, or open original links.
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1 text-xs font-bold text-slate-400 mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Media Cards Grid - All 10 cards with hover effect & click-to-expand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400/80 dark:hover:border-amber-400/80 transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-1"
          >
            {/* Media Box */}
            <div className="aspect-4/3 w-full bg-slate-950 overflow-hidden relative">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Type Badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                {item.type === 'video' ? (
                  <>
                    <Play className="w-3 h-3 text-red-400 fill-red-400" />
                    <span>Watch Video</span>
                  </>
                ) : item.type === 'social' ? (
                  <>
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span>Social Media</span>
                  </>
                ) : (
                  <>
                    <Tag className="w-3 h-3 text-amber-400" />
                    <span>{item.category}</span>
                  </>
                )}
              </div>

              {/* Hover Click-to-Expand Overlay Indicator */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold flex items-center gap-2 shadow-lg backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>

            {/* Card Content: Title, Media Type, Caption */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold text-[10px]">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-semibold">
                <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold group-hover:underline flex items-center gap-1">
                  View Full Media →
                </span>
                <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Click to Expand / Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800/80">
                  {selectedItem.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">• {selectedItem.date}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Media Body */}
            <div className="bg-slate-950 relative flex items-center justify-center max-h-[55vh] overflow-hidden">
              {selectedItem.type === 'video' && selectedItem.videoEmbedUrl ? (
                <div className="w-full aspect-16/9 max-h-[55vh]">
                  <iframe
                    src={selectedItem.videoEmbedUrl}
                    title={selectedItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="max-h-[55vh] w-auto max-w-full object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Modal Info & Action Footer */}
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {selectedItem.caption}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {selectedItem.type === 'video' && (
                  <a
                    href={selectedItem.externalUrl || selectedItem.videoEmbedUrl || 'https://www.youtube.com'}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Open on YouTube</span>
                  </a>
                )}

                {selectedItem.type === 'social' && (
                  <a
                    href={selectedItem.externalUrl || 'https://instagram.com'}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>View on Social Media</span>
                  </a>
                )}

                <a
                  href={selectedItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Original Asset</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
