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
      title: 'Featured Sports / Gaming Highlight (Video Slot)',
      category: 'Videos',
      type: 'video',
      url: '/src/assets/images/soccer_ronaldo_celebrate_1790100465423.jpg',
      caption: 'Video showcase placeholder — ready for your YouTube highlight clip whenever you are ready to paste the link!',
      date: 'Ready for Link',
      isPlaceholder: true,
    },
  ];

  const categories = ['All', 'Portraits', 'Sports & Action', 'Travel Dreams', 'School & Tech', 'Videos'];

  const filteredItems = activeCategory === 'All'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
            <Image className="w-3.5 h-3.5 text-amber-600" />
            <span>Media Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Photos, Sports & Travel Dreams
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A visual showcase of my high school journey, playing basketball and soccer with friends, and my future dream travel destinations in Dubai and Paris.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5 mt-4">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Video Link Ready:</span> Whenever you have your YouTube link ready, just send it over and I will embed it directly into the video player slot!
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-100">
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
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
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
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col"
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
                    <span>Video Slot</span>
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
                <div className="w-10 h-10 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-1">
                  <span className="flex items-center gap-1 font-semibold text-amber-700">
                    <Tag className="w-3 h-3 text-amber-600" />
                    {item.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-600">
                <span>View Full Photo</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-slate-950">
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900">{selectedItem.title}</h3>
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
                  {selectedItem.category}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.caption}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Date: {selectedItem.date}</span>
                <span className="text-amber-600 font-medium">Click outside or press X to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
