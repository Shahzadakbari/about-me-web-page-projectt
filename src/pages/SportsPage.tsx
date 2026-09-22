import React from 'react';
import { Trophy, Activity, Heart, Award, Shield, AlertCircle, Play } from 'lucide-react';

export const SportsPage: React.FC = () => {
  const sportsCards = [
    {
      title: 'Soccer (Association Football)',
      role: 'Midfielder / Playmaker',
      description: 'Focusing on ball control, vision, passing accuracy, and transition speed across the pitch.',
      stats: 'Agility • Endurance • Team Tactics',
      color: 'blue',
    },
    {
      title: 'Basketball',
      role: 'Guard / Shooting Focus',
      description: 'Developing quick defensive footwork, perimeter shooting rhythm, and fast-break decision making.',
      stats: 'Hand-Eye Coordination • Reflexes • Speed',
      color: 'slate',
    },
    {
      title: 'Strength & Conditioning',
      role: 'Cardio & Flexibility',
      description: 'Weekly resistance exercises, track sprints, and core stability routines to prevent injury and boost energy.',
      stats: 'Stamina • Discipline • Health',
      color: 'emerald',
    },
  ];

  const weeklySchedule = [
    { day: 'Monday', activity: 'High-intensity soccer scrimmage & ball handling', duration: '60 mins' },
    { day: 'Wednesday', activity: 'Basketball court drills & perimeter shooting', duration: '45 mins' },
    { day: 'Friday', activity: 'Cardio interval running & core training', duration: '40 mins' },
    { day: 'Weekend', activity: 'Friendly matches, recovery walk, or stretching', duration: '90 mins' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <Trophy className="w-3.5 h-3.5 text-blue-600" />
            <span>Phase 5 • Sports & Athletics</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Athletics, Teamwork & Discipline
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Staying physically active plays a central role in maintaining focus, building resilience, and learning the power of sportsmanship. Participating in athletics reinforces the mindset that consistent practice yields progress.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Phase 5 Sports Customization:</span> When we reach Phase 5, you can tell me your exact favorite sport, personal positions, favorite professional athletes, or upload photos from your own games!
            </div>
          </div>
        </div>
      </div>

      {/* Disciplines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sportsCards.map((sport, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  {sport.role}
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-0.5">
                  {sport.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {sport.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500">
              Key Focus: <span className="text-slate-800 font-semibold">{sport.stats}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Video & Highlight Media Section */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Match Highlights & Practice Clips</h2>
            <p className="text-xs text-slate-400">Featured video showcase placeholder</p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            Video Embed Ready
          </span>
        </div>

        <div className="relative aspect-16/9 max-w-4xl mx-auto rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 flex flex-col items-center justify-center p-8 text-center group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-blue-600 group-hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 mb-4">
            <Play className="w-8 h-8 fill-white ml-1" />
          </div>
          <h4 className="text-lg font-bold text-white mb-1">Sports Video Showcase</h4>
          <p className="text-xs text-slate-400 max-w-md">
            Placeholder for embedding a YouTube match clip or personal scrimmage highlight reel.
          </p>
          <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-blue-400 border border-slate-700">
            [Placeholder: Replace with YouTube/Vimeo embed in Phase 5]
          </span>
        </div>
      </div>

      {/* Weekly Training Routine */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Weekly Training Regimen</h2>
            <p className="text-xs text-slate-500">How I balance athletic activity with academic study</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {weeklySchedule.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600">{item.day}</span>
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

      {/* Life Lessons from Sports */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Values Learned on the Field</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Resilience Under Pressure</span>
            </div>
            <p className="leading-relaxed">
              Facing tough competitors teaches mental composure and handling mistakes with poise.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Heart className="w-4 h-4 text-blue-600" />
              <span>Team Communication</span>
            </div>
            <p className="leading-relaxed">
              No single player wins games alone. Constant communication keeps everyone aligned.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>Consistency & Discipline</span>
            </div>
            <p className="leading-relaxed">
              Small drills repeated daily compound into major skills over the course of a season.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
