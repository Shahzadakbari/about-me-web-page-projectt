import React, { useState } from 'react';
import { Camera, Sliders, Aperture, Layers, Sparkles, AlertCircle, Eye } from 'lucide-react';

export const HobbyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Portraits' | 'Landscapes' | 'Urban'>('All');

  const gearItems = [
    {
      title: 'Digital Camera / Mobile Sensor',
      description: 'High-resolution sensor with manual RAW exposure controls for crisp daytime and low-light detail.',
      tag: 'Hardware',
    },
    {
      title: 'Editing & Color Suite',
      description: 'Software for tweaking tone curves, split toning, exposure balancing, and color temperature.',
      tag: 'Software',
    },
    {
      title: 'Composition & Grid Techniques',
      description: 'Rule of thirds, leading lines, framing, and golden hour natural lighting manipulation.',
      tag: 'Technique',
    },
  ];

  const photoSamples = [
    {
      id: 1,
      title: 'Urban Architecture Perspective',
      category: 'Urban',
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      settings: 'f/2.8 • 1/500s • ISO 100',
    },
    {
      id: 2,
      title: 'Serene Nature Landscape',
      category: 'Landscapes',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
      settings: 'f/8.0 • 1/125s • ISO 200',
    },
    {
      id: 3,
      title: 'Natural Light Portrait Study',
      category: 'Portraits',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
      settings: 'f/1.8 • 1/1000s • ISO 100',
    },
    {
      id: 4,
      title: 'Geometric Symmetry',
      category: 'Urban',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
      settings: 'f/4.0 • 1/250s • ISO 150',
    },
  ];

  const filteredPhotos = selectedCategory === 'All' 
    ? photoSamples 
    : photoSamples.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span>Phase 4 • Hobby #1</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Digital Photography & Visual Storytelling
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Exploring the intersection of technology and art through photography. Photography teaches me patience, spatial composition, and attention to subtle visual details—qualities that directly help my web design and coding work!
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Customizing this hobby:</span> In Phase 4, you can keep Digital Photography or choose any hobby you prefer (such as 3D Modeling, Gaming, Music Production, or Robotics). All texts and photos are ready to swap!
            </div>
          </div>
        </div>
      </div>

      {/* Origin / Why It Matters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Aperture className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Composition & Framing</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Framing subjects with intention mirrors how we arrange UI layouts, spacing, and typographic balance on web pages.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Color Grading & Tone</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Learning how contrast, warm highlights, and cool shadows interplay helps create harmonious color schemes for web applications.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Digital Workflow</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            From raw capture to asset export, managing digital assets teaches organized file structures and creative patience.
          </p>
        </div>
      </div>

      {/* Equipment & Toolkit */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">My Gear & Creative Tools</h2>
            <p className="text-xs text-slate-500">Hardware and software components I rely on</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {gearItems.map((gear, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                {gear.tag}
              </span>
              <h4 className="font-bold text-slate-900 text-sm">{gear.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{gear.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photography Showcase */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Sample Shots & Experiments</h2>
            <p className="text-xs text-slate-500">Placeholder gallery showing visual capture styles</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['All', 'Portraits', 'Landscapes', 'Urban'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-900/80 text-white text-[10px] font-bold">
                  Placeholder
                </span>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">{photo.category}</span>
                <h4 className="font-bold text-slate-900 text-sm truncate">{photo.title}</h4>
                <div className="pt-2 flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                  <Eye className="w-3 h-3 text-slate-400" />
                  <span>{photo.settings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
