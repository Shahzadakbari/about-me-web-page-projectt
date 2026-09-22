import React, { useState } from 'react';
import { MediaItem } from '../types';
import { Image, Play, Filter, X, Calendar, Tag, AlertCircle, Maximize2 } from 'lucide-react';

export const MediaPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Gallery items with clear placeholder labeling
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
      title: 'First Web Project Screenshot',
      category: 'School & Tech',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80',
      caption: 'Placeholder visual for code editors, HTML/CSS assignments, and classroom project development.',
      date: 'Sept 2026',
      isPlaceholder: true,
    },
    {
      id: 'm2',
      title: 'High School Campus & Study Space',
      category: 'School & Tech',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=80',
      caption: 'Placeholder photograph representing group study, collaboration, and high school academic work.',
      date: 'Sept 2026',
      isPlaceholder: true,
    },
    {
      id: 'm3',
      title: 'Golden Hour Nature Study',
      category: 'Photography',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80',
      caption: 'Placeholder for personal photography hobby showcasing landscape lighting and aperture experiments.',
      date: 'Aug 2026',
      isPlaceholder: true,
    },
    {
      id: 'm4',
      title: 'Cat & Pet Snapshot',
      category: 'Nature & Animals',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1000&auto=format&fit=crop&q=80',
      caption: 'Placeholder animal portrait inspired by early web experiments with cat imagery.',
      date: 'Aug 2026',
      isPlaceholder: true,
    },
    {
      id: 'm5',
      title: 'Weekend Soccer & Sports Match',
      category: 'Sports & Action',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
      caption: 'Placeholder action photograph for sports participation, games, and athletic highlights.',
      date: 'July 2026',
      isPlaceholder: true,
    },
    {
      id: 'm6',
      title: 'Basketball Practice Session (Video)',
      category: 'Sports & Action',
      type: 'video',
      url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&auto=format&fit=crop&q=80',
      caption: 'Placeholder video embed representing sports drills, match highlights, or athletic training clips.',
      date: 'July 2026',
      isPlaceholder: true,
    },
  ];

  const categories = ['All', 'School & Tech', 'Photography', 'Sports & Action', 'Nature & Animals'];

  const filteredItems = activeCategory === 'All'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <Image className="w-3.5 h-3.5 text-blue-600" />
            <span>Media Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Media & Project Showcase
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A curated collection of photos, video embeds, and project milestones. Click any card to open the media inspector modal with caption details and metadata.
          </p>

          {/* Placeholder Guidance Banner */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5 mt-4">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Media Customization:</span> These media items feature high-resolution student and portfolio reference photos along with an embedded video player.
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
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
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col"
          >
            {/* Media Image / Thumbnail */}
            <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              
              {/* Type Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold border border-white/10">
                {item.type === 'video' ? (
                  <>
                    <Play className="w-3 h-3 text-blue-400 fill-blue-400" />
                    <span>Video Embed</span>
                  </>
                ) : (
                  <>
                    <Image className="w-3 h-3 text-blue-400" />
                    <span>Photo</span>
                  </>
                )}
              </div>

              {/* Placeholder Tag */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                Placeholder
              </div>

              {/* Overlay Hover Effect */}
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-1">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3 text-blue-600" />
                    {item.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Inspect Media</span>
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
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900">{selectedItem.title}</h3>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                  {selectedItem.category}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.caption}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Date: {selectedItem.date}</span>
                <span className="text-blue-600 font-medium">Click outside to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
