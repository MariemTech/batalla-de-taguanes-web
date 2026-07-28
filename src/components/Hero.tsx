import React from 'react';
import { heroClassroomPath, Logo } from './Logo';
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Heart,
  Award,
  Sparkles,
  Instagram,
  Users,
  CheckCircle2,
  Compass,
  ArrowRight,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/584141395219?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20el%20C.E.I.P.%20Batalla%20de%20Taguanes';

  return (
    <>
      {/* PORTADA (HERO SECTION) */}
      <section id="inicio" className="relative pt-24 lg:pt-28 pb-12 lg:pb-16 bg-sky-100/70 overflow-hidden">
        {/* Decorative Sky Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-20 right-12 w-32 h-32 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-dots-pattern pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Curved Hero Canvas Container */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-xl shadow-sky-900/5 border border-sky-100 relative overflow-hidden">
            {/* Subtle Organic Wave Top Decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-50/80 rounded-full blur-xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Headlines & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold tracking-wide">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>30 años acompañando sus primeros pasos</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-[1.18] tracking-tight">
                  Un hogar para aprender, crecer y{' '}
                  <span className="text-sky-600 underline decoration-amber-300 decoration-wavy decoration-2 underline-offset-4">
                    sentirse querido.
                  </span>
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                  Sabemos lo que significa dejar a tu bebé o a tu hijo pequeño al cuidado de otras personas. Por eso, lo recibimos con cercanía, respetamos su ritmo y acompañamos cada etapa para que tú también puedas sentirte tranquila.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href="#agendar-visita"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Ven a conocernos</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-xs hover:shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    <span>Hablar por WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Classroom Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Organic Frame Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 to-amber-100 organic-shape-1 transform rotate-3 scale-105 opacity-80" />

                  {/* Photo */}
                  <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
                    <img
                      src={heroClassroomPath}
                      alt="Niños en aula Montessori de C.E.I.P. Batalla de Taguanes"
                      className="w-full h-[320px] sm:h-[380px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-sky-100 shadow-md flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Logo size="sm" showText={false} />
                        <div>
                          <p className="text-xs font-bold text-slate-800">C.E.I.P. Batalla de Taguanes</p>
                          <p className="text-[11px] text-slate-500">La Nana de Mis Sueños</p>
                        </div>
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
                        30 Años
                      </span>
                    </div>
                  </div>

                  {/* Floating Gentle Badge */}
                  <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-md border border-sky-100 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-bold text-slate-800">Acompañamiento cálido</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Franja de confianza (4 Quick Key Highlights) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8">
            <div className="bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-sky-200/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-sky-100 text-sky-700">
                  <Heart className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">Atención</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-display font-bold text-slate-900">Desde los 4 meses.</p>
                <p className="text-xs text-slate-600 mt-1">Cuidado amoroso desde la etapa lactante.</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-amber-100 text-amber-700">
                  <Award className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">Historia</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-display font-bold text-slate-900">30 años de trayectoria.</p>
                <p className="text-xs text-slate-600 mt-1">Sólida experiencia y tradición pedagógica.</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-emerald-200/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Experiencia</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-display font-bold text-slate-900">Equipo +10 años exp.</p>
                <p className="text-xs text-slate-600 mt-1">Docentes e investigadoras calificadas.</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-rose-200/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-rose-100 text-rose-700">
                  <Users className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">Dedicación</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-display font-bold text-slate-900">Acompañamiento personal.</p>
                <p className="text-xs text-slate-600 mt-1">Respeto absoluto a las necesidades individuales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INMEDIATAMENTE POSTERIOR */}
      <section className="py-16 lg:py-20 bg-white relative border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4 text-sky-600" />
            <span>Confianza compartida</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight max-w-3xl mx-auto">
            La confianza de una familia abre la puerta a otra
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Muchas familias llegan a Batalla de Taguanes porque otra familia les habló de su experiencia y les recomendó conocernos. Para nosotros, esa confianza compartida es uno de los mayores reconocimientos a nuestra labor.
          </p>

          {/* Frase destacada (bloque limpio sin comillas de persona) */}
          <div className="bg-slate-50 border-l-4 border-sky-500 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-left shadow-2xs space-y-3">
            <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic">
              Cuando una familia nos recomienda, no solo habla de un preescolar: habla del lugar al que confió una etapa irrepetible de la vida de su hijo.
            </p>
            <div className="inline-block px-3 py-1 rounded-md bg-sky-100/80 text-sky-900 text-xs font-semibold">
              Inspirado en experiencias compartidas por nuestra comunidad en Instagram.
            </div>
          </div>

          <div>
            <a
              href="https://www.instagram.com/preescolartaguanes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-pink-700 hover:text-pink-800 bg-pink-50 hover:bg-pink-100 px-4 py-2.5 rounded-full transition-colors border border-pink-200"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Conoce nuestra comunidad en Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* SIGUIENTE BLOQUE: ENTENDEMOS LO QUE ESTÁS BUSCANDO */}
      <section className="py-16 lg:py-20 bg-slate-50/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-amber-700" />
              <span>Nuestra Propuesta</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Entendemos lo que estás buscando
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              No buscas simplemente un lugar donde dejarlo durante unas horas. Buscas saber que estará acompañado, que respetarán sus necesidades y que encontrará un ambiente donde pueda sentirse seguro mientras aprende, juega y comienza a descubrir el mundo.
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Tranquilidad para ti
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                La confianza de saber que puedes comunicarte con un equipo cercano y especializado.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Cercanía para tu hijo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Un acompañamiento personalizado que reconoce su ritmo, su personalidad y sus necesidades.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">
                Una etapa llena de descubrimientos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Experiencias de juego, exploración y convivencia que favorecen su desarrollo integral.
              </p>
            </div>
          </div>

          {/* FRASE DE CIERRE */}
          <div className="bg-sky-600 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-lg space-y-5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold leading-snug">
              La tranquilidad de una familia comienza cuando sabe que su hijo está en buenas manos.
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl mx-auto leading-relaxed">
              Ven a conocernos, conversa con nuestro equipo y descubre si Batalla de Taguanes es el lugar que estás buscando para esta etapa.
            </p>
            <div className="pt-2">
              <a
                href="#agendar-visita"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-sky-900 bg-white hover:bg-sky-50 transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 text-sky-700" />
                <span>Agendar una visita</span>
                <ArrowRight className="w-4 h-4 text-sky-700" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
