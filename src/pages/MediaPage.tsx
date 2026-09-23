import React, { useState } from 'react';
import { MediaItem } from '../types';
import { Image, Play, Filter, X, Calendar, Tag, AlertCircle, Maximize2 } from 'lucide-react';

export const MediaPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Gallery items updated with real project photos and sports & travel
  const mediaItems: MediaItem[] = [
    {
      id: 'm0',
      title: 'Ahmad Shahzad Akbari — Student Portrait',
      category: 'Portraits',
      type: 'image',
      url: '/src/assets/images/user_profile.jpg',
      caption: 'Official student portrait for high school portfolio and web profile.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
    {
      id: 'm1',
      title: 'Pickup Basketball with Friends (GIF)',
      category: 'Sports & Action',
      type: 'image',
      url: '/src/assets/images/basketball_dunk.gif',
      caption: 'Playing outdoor basketball with friends, shooting hoops, and running fast breaks.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
    {
      id: 'm2',
      title: 'Soccer Matches & Ronaldo Celebration (GIF)',
      category: 'Sports & Action',
      type: 'image',
      url: '/src/assets/images/ronaldo_celebration.gif',
      caption: 'Cristiano Ronaldo celebration GIF — the GOAT whose dedication inspires our friendly matches and hard work.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
    {
      id: 'm3',
      title: 'Dream Destination: Dubai Skyline',
      category: 'Travel Dreams',
      type: 'image',
      url: '/src/assets/images/dubai_skyline_sunset_1790100477620.jpg',
      caption: 'Aspiration to travel to Dubai and experience its futuristic architecture and Burj Khalifa.',
      date: 'Future Goal',
      isPlaceholder: false,
    },
    {
      id: 'm4',
      title: 'Dream Destination: Paris & The Eiffel Tower',
      category: 'Travel Dreams',
      type: 'image',
      url: '/src/assets/images/paris_eiffel_tower_1790100487684.jpg',
      caption: 'Goal to visit Paris, walk along the Seine River, and explore the historic landmarks.',
      date: 'Future Goal',
      isPlaceholder: false,
    },
    {
      id: 'm5',
      title: 'Web Design & Math Workspace',
      category: 'School & Tech',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80',
      caption: 'Building responsive web design assignments and working through mathematics study sessions.',
      date: 'Sept 2026',
      isPlaceholder: true,
    },
    {
      id: 'm6',
      title: 'PUBG Mobile Squad Gameplay & Highlights',
      category: 'Videos',
      type: 'video',
      url: 'https://img.youtube.com/vi/2mfx9hJ0VB4/hqdefault.jpg',
      videoEmbedUrl: 'https://www.youtube.com/embed/2mfx9hJ0VB4?autoplay=1&rel=0',
      caption: 'Watch my PUBG Mobile squad gameplay and clutch action! Intense firefights, strategic rotations, and aiming for the chicken dinner.',
      date: 'Sept 2026',
      isPlaceholder: false,
    },
  ];

  const categories = ['All', 'Portraits', 'Sports & Action', 'Travel Dreams', 'School & Tech', 'Videos'];

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
            <span>Media Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Photos, Sports, PUBG & Travel Dreams
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            A visual showcase of my high school journey, playing basketball and soccer with friends, my PUBG Mobile gameplay highlights, and future dream travel destinations in Dubai and Paris.
          </p>

          <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/60 text-xs text-purple-900 dark:text-purple-200 flex items-start gap-2.5 mt-4">
            <Play className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5 fill-purple-600 dark:fill-purple-400" />
            <div>
              <span className="font-bold text-purple-950 dark:text-white">Featured Video Active:</span> PUBG Mobile squad gameplay is now available to watch! Click the video card below to play the video right in the interactive player modal.
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-lg transition-all flex flex-col"
          >
            {/* Media Image / Thumbnail */}
            <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Type Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold border border-white/10">
                {item.type === 'video' ? (
                  <>
                    <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>Watch Video</span>
                  </>
                ) : (
                  <>
                    <Image className="w-3 h-3 text-amber-400" />
                    <span>Photo</span>
                  </>
                )}
              </div>

              {/* Tag */}
              {!item.isPlaceholder ? (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                  Featured
                </div>
              ) : (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-slate-800/90 text-slate-200 text-[10px] font-bold uppercase tracking-wider">
                  Slot
                </div>
              )}

              {/* Overlay Hover Effect */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {item.type === 'video' ? (
                    <Play className="w-5 h-5 text-amber-600 fill-amber-600 ml-0.5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-1">
                  <span className="flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-400">
                    <Tag className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    {item.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                <span>{item.type === 'video' ? 'Play PUBG Video' : 'View Full Photo'}</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/9 bg-slate-950">
              {selectedItem.type === 'video' && selectedItem.videoEmbedUrl ? (
                <iframe
                  src={selectedItem.videoEmbedUrl}
                  title={selectedItem.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedItem.title}</h3>
                <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-200 dark:border-amber-800">
                  {selectedItem.category}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedItem.caption}
              </p>

              {selectedItem.type === 'video' && (
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://youtu.be/2mfx9hJ0VB4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Open on YouTube
                  </a>
                  <span className="text-[11px] text-slate-400">https://youtu.be/2mfx9hJ0VB4</span>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Date: {selectedItem.date}</span>
                <span className="text-amber-600 dark:text-amber-400 font-medium">Click outside or press X to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
