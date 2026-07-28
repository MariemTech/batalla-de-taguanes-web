import React from 'react';
import { METHODOLOGY_PILLARS } from '../data/centerData';
import { Heart, Compass, Sprout, Languages, CheckCircle, Sparkles } from 'lucide-react';

export const Methodology: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-6 h-6 text-sky-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-600" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-amber-600" />;
      case 'Languages':
        return <Languages className="w-6 h-6 text-indigo-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="metodologia" className="py-16 lg:py-24 bg-emerald-50/40 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sprout className="w-4 h-4 text-emerald-600" />
            <span>Enfoque Pedagógico Integrador</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Aprender haciendo, sintiendo y descubriendo
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Combinamos los principios del constructivismo pedagógico con la filosofía Montessori y la provocación sensorial de Reggio Emilia, adaptando cada propuesta a la etapa evolutiva del niño.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {METHODOLOGY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${pillar.bgAccent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white shadow-xs border border-slate-100">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/80 text-slate-700 border border-slate-200">
                    Pilar 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-200/60 space-y-2">
                {pillar.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Methodology Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-emerald-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-display font-bold text-slate-900">
              ¿Quieres conocer cómo aplicamos la metodología en un día real?
            </h4>
            <p className="text-sm text-slate-600">
              Te invitamos a recorrer las aulas en funcionamiento durante nuestra jornada de puertas abiertas personalizada.
            </p>
          </div>

          <a
            href="#agendar-visita"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs"
          >
            Conocer Aulas en Vivo
          </a>
        </div>
      </div>
    </section>
  );
};
