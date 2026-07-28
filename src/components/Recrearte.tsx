import React, { useState } from 'react';
import { RECREARTE_WORKSHOPS } from '../data/centerData';
import { recrearteArtPath } from './Logo';
import { Palette, HandMetal, Music, Smile, Trees, Sparkles, Check, HeartHandshake } from 'lucide-react';

export const Recrearte: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('Todos');

  const allTags = ['Todos', 'Color', 'Motricidad Fina', 'Música', 'Naturaleza', 'Teatro'];

  const getWorkshopIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-amber-600" />;
      case 'HandMetal':
        return <HandMetal className="w-5 h-5 text-rose-600" />;
      case 'Music':
        return <Music className="w-5 h-5 text-sky-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-emerald-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="recrearte" className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/70 via-rose-50/40 to-white relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dots-yellow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Special Sub-Brand Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Palette className="w-4 h-4 text-amber-600" />
            <span>Taller de Expresión Creativa y Sensorial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            RECREARTE:{' '}
            <span className="text-rose-500 underline decoration-amber-400 decoration-wavy decoration-2">
              sentir, imaginar y crear
            </span>{' '}
            juntos
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Un espacio dentro de nuestro centro donde el arte, la experimentación con texturas, la música y el juego libre despiertan la sensibilidad estética y el pensamiento libre de los más pequeños.
          </p>
        </div>

        {/* Feature Hero Card with Photo */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-md mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-4 border-amber-100 shadow-sm">
                <img
                  src={recrearteArtPath}
                  alt="Niños en taller de pintura RECREARTE"
                  className="w-full h-[280px] sm:h-[320px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-rose-50 border border-rose-200 p-3 rounded-xl text-xs font-bold text-rose-800 shadow-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span>Pintura No Tóxica y Natural</span>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                Metodología Vivencial
              </span>

              <h3 className="text-2xl font-display font-bold text-slate-900">
                El proceso creativo como motor de autodescubrimiento
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                En RECREARTE no buscamos resultados idénticos ni fichas estereotipadas. Valoramos la mancha, el goteo, la textura de la arcilla mojada y la emoción de escuchar una melodía mientras el niño decide libremente qué color plasmar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-100 text-xs font-medium text-amber-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Caballetes ergonómicos adaptados</span>
                </div>
                <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-100 text-xs font-medium text-sky-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Instrumentos de percusión Orff</span>
                </div>
                <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-100 text-xs font-medium text-rose-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Materia prima de origen ecológico</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 text-xs font-medium text-emerald-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Orientación por artistas educadoras</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-slate-900">
              Talleres y Experiencias Creativas Incluidas
            </h3>
            <span className="text-xs font-semibold text-slate-500">5 Talleres Continuos</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECREARTE_WORKSHOPS.map((ws) => (
              <div
                key={ws.id}
                className={`p-6 rounded-2xl border ${ws.colorTheme.border} ${ws.colorTheme.bg} shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-white shadow-2xs border border-slate-100">
                      {getWorkshopIcon(ws.icon)}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 text-slate-700 border border-slate-200">
                      {ws.age}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-slate-900 mb-1">
                    {ws.title}
                  </h4>

                  <p className="text-xs font-semibold text-slate-600 mb-3 italic">
                    {ws.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ws.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-3 border-t border-slate-200/50 flex flex-wrap gap-1.5">
                  {ws.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
