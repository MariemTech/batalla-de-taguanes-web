import React from 'react';
import { outdoorGardenPath, logoImagePath } from './Logo';
import { ShieldCheck, HeartHandshake, BookOpenCheck, CheckCircle2, Award } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="proyecto" className="py-16 lg:py-24 bg-white relative overflow-hidden scroll-mt-16">
      {/* Gentle organic background separation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Institutional Section Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-sky-600" />
            <span>Nuestro Proyecto Educativo Institucional</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Quiénes somos & 30 años de trayectoria
          </h2>
          
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Tres décadas dedicadas con rigor pedagógico, innovación continua y una profunda vocación humana a la educación de la primera infancia en el C.E.I.P. Batalla de Taguanes (La Nana de Mis Sueños).
          </p>
        </div>

        {/* Sober 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Authentic Outdoor Garden / Facility Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
              <img
                src={outdoorGardenPath}
                alt="Jardín y parque del C.E.I.P. Batalla de Taguanes"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white mb-2">
                  <span>Instalaciones Propias • 500 m² de Jardín</span>
                </div>
                <p className="text-sm font-semibold text-slate-100">
                  Espacios al aire libre diseñados para el juego libre, la psicomotricidad y la conexión diaria con la naturaleza.
                </p>
              </div>
            </div>

            {/* Official Logo Emblem in Institutional Section */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3 max-w-xs">
              <img
                src={logoImagePath}
                alt="Logotipo C.E.I.P. Batalla de Taguanes"
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-sky-100"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">Batalla de Taguanes</p>
                <p className="text-[11px] text-sky-700 font-medium">La Nana de Mis Sueños</p>
                <p className="text-[10px] text-slate-500">Fundado en 1996 • Oficial</p>
              </div>
            </div>
          </div>

          {/* Right: Institutional Values & History Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-slate-900">
                Seguridad, experiencia y estabilidad para la tranquilidad de las familias
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Desde nuestros inicios en 1996, concebimos nuestro centro como una extensión del hogar. Entendemos que confiar el cuidado de un hijo de meses o pocos años exige transparencia absoluta, un proyecto educativo consolidado y un equipo estable de profesionales altamente cualificados.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A lo largo de 30 años, hemos visto crecer a generaciones de niños que hoy regresan como padres a depositarnos la misma confianza. Esa continuidad es nuestro mayor orgullo y nuestro mejor aval.
              </p>
            </div>

            {/* Pillars of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Entorno Seguro</h4>
                  <p className="text-xs text-slate-600 mt-1">Accesos biométricos, protección integral y normativas al día.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Vocación Estable</h4>
                  <p className="text-xs text-slate-600 mt-1">Educadoras de larga permanencia que conocen a cada familia.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-start gap-3">
                <BookOpenCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Innovación Rigurosa</h4>
                  <p className="text-xs text-slate-600 mt-1">Metodología actualizada inspirada en la neuroeducación infantil.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Comunicación Continua</h4>
                  <p className="text-xs text-slate-600 mt-1">Agenda digital diaria y tutorías periódicas presenciales.</p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-sky-600 text-slate-700 italic text-sm">
              "Educamos no solo para el futuro escolar, sino para que cada niño crezca seguro de sus capacidades, respetado en sus emociones y feliz en su día a día."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
