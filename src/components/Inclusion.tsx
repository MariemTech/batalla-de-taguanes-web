import React from 'react';
import { SPECIALISTS } from '../data/centerData';
import { inclusiveCarePath } from './Logo';
import {
  UserCheck,
  Brain,
  MessageSquareHeart,
  Sparkles,
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export const Inclusion: React.FC = () => {
  const getSpecialistIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-sky-700" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-emerald-700" />;
      case 'MessageSquareHeart':
        return <MessageSquareHeart className="w-5 h-5 text-rose-700" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-700" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-indigo-700" />;
      default:
        return <Heart className="w-5 h-5 text-sky-700" />;
    }
  };

  return (
    <section id="inclusion" className="py-16 lg:py-24 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sensitive Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-4 h-4 text-sky-600" />
            <span>Atención a la Diversidad e Inclusión Educativa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Acompañamiento especializado, respetuoso y multidisciplinar
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Cada niño aprende a su ritmo y posee una singularidad única. Nuestro equipo especialista apoya el desarrollo integral de cada alumno en estrecha colaboración con sus familias.
          </p>
        </div>

        {/* Real Photo & Narrative Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Modelo de Inclusión Activa</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-slate-900">
                Un entorno donde la diferencia enriquece a la comunidad
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Creemos firmemente en el valor de la inclusión temprana. Adaptamos el currículo, las herramientas manipulativas y la dinámica de aula para garantizar que ningún niño se quede atrás o aislado.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Detección precoz de necesidades educativas especiales</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Planes de estimulación y desarrollo individualizados</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Coordinación directa con neuropediatras y terapeutas externos</span>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src={inclusiveCarePath}
                  alt="Terapeuta especialista acompañando a un niño con juegos de madera"
                  className="w-full h-[260px] sm:h-[300px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-medium text-slate-500 italic">
                  Garantizamos privacidad, dignidad y afecto en cada sesión de apoyo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialists Team Grid */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-display font-bold text-slate-900">
              Nuestro Equipo Multidisciplinario de Especialistas
            </h3>
            <p className="text-xs text-slate-500">
              Profesionales tituladas integradas en la vida diaria del centro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALISTS.map((spec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 shrink-0">
                      {getSpecialistIcon(spec.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block">
                        Especialidad
                      </span>
                      <h4 className="text-base font-display font-bold text-slate-900">
                        {spec.role}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-700 mb-2">
                    {spec.title}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md block text-center">
                    Área: {spec.focusArea}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
