import React, { useState } from 'react';
import { EDUCATIONAL_LEVELS } from '../data/centerData';
import { Baby, Footprints, Sparkles, GraduationCap, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const Levels: React.FC = () => {
  const [selectedLevelId, setSelectedLevelId] = useState<string>('maternal-1');

  const selectedLevel =
    EDUCATIONAL_LEVELS.find((lvl) => lvl.id === selectedLevelId) || EDUCATIONAL_LEVELS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby className="w-5 h-5 text-sky-600" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-rose-600" />;
      default:
        return <Baby className="w-5 h-5" />;
    }
  };

  return (
    <section id="niveles" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Baby className="w-4 h-4 text-sky-600" />
            <span>Niveles por Etapas de Crecimiento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Etapas adaptadas a cada momento madurativo
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Maternal I, Maternal II y Preescolar I, II y III. Cada grupo cuenta con instalaciones específicas, materiales homologados y un equipo docente especialista.
          </p>
        </div>

        {/* Level Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {EDUCATIONAL_LEVELS.map((lvl) => {
            const isSelected = lvl.id === selectedLevelId;
            return (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevelId(lvl.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? `${lvl.color.pill} shadow-sm ring-2 ring-sky-400/50 scale-102`
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {getIcon(lvl.iconName)}
                <span>{lvl.name}</span>
                <span className="text-[10px] opacity-75 font-medium bg-white/60 px-2 py-0.5 rounded-md">
                  {lvl.ageRange}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Level Focus Card */}
        <div
          className={`p-6 sm:p-10 rounded-3xl border ${selectedLevel.color.border} ${selectedLevel.color.bg} shadow-sm transition-all duration-300`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${selectedLevel.color.pill}`}>
                    {selectedLevel.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-white/80 px-3 py-1 rounded-full border border-slate-200">
                    Edad: {selectedLevel.ageRange}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                  {selectedLevel.name}
                </h3>

                <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {selectedLevel.description}
                </p>
              </div>

              {/* Ratio badge */}
              <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200 flex items-center gap-3">
                <Users className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">{selectedLevel.ratio}</span>
              </div>

              {/* Objectives */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Objetivos Principales de esta etapa:
                </h4>
                <div className="space-y-1.5">
                  {selectedLevel.objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Activities Column */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-sm font-display font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Actividades y Espacios Clave</span>
              </h4>

              <ul className="space-y-3">
                {selectedLevel.keyActivities.map((act, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800 flex items-center justify-between"
                  >
                    <span>{act}</span>
                    <ArrowRight className="w-4 h-4 text-sky-500 shrink-0" />
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href="#agendar-visita"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
                >
                  Consultar disponibilidad para {selectedLevel.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
