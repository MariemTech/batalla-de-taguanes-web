import React from 'react';
import { Clock, Utensils, MessageCircle, AlertCircle } from 'lucide-react';

export const Schedules: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/584141395219?text=Hola%2C%20quisiera%20consultar%20sobre%20los%20horarios%20del%20C.E.I.P.%20Batalla%20de%20Taguanes';

  const whatsappComiditasUrl =
    'https://wa.me/584141395219?text=Hola%2C%20quisiera%20consultar%20sobre%20el%20servicio%20puntual%20Comiditas%20911';

  const timelineItems = [
    { time: '7:30 a. m.', label: 'Entrada al centro' },
    { time: '11:45 a. m.', label: 'Salida de media jornada' },
    { time: '2:30 p. m.', label: 'Salida de media jornada con almuerzo' },
    { time: '4:30 p. m.', label: 'Salida de jornada completa' },
    { time: '5:30 p. m.', label: 'Horario extendido, previa coordinación con el centro' },
  ];

  return (
    <section id="horarios" className="py-16 lg:py-24 bg-white relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* BLOQUE HORARIOS */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Jornadas y Modalidades</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Horarios que se adaptan a cada familia
            </h2>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Ofrecemos diferentes modalidades de permanencia para que cada familia pueda elegir la que mejor se adapte a sus necesidades.
            </p>
          </div>

          {/* Sencilla y visual línea horaria (Horizontal en desktop, vertical en móvil) */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs mb-8">
            {/* Horizontal Timeline Desktop */}
            <div className="hidden lg:grid grid-cols-5 gap-4 relative">
              <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-sky-200 z-0" />

              {timelineItems.map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shadow-md mb-4 border-4 border-white">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-bold text-sky-800 bg-sky-100/80 px-2.5 py-1 rounded-full mb-2">
                    {item.time}
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Vertical Timeline Mobile */}
            <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-sky-200 ml-3">
              {timelineItems.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-6 h-6 rounded-full bg-sky-600 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                    <span className="inline-block text-xs font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full mb-1">
                      {item.time}
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
              El horario extendido está sujeto a disponibilidad y debe coordinarse previamente con el centro.
            </p>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-100" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>


        {/* BLOQUE ALIMENTACIÓN */}
        <div id="alimentacion" className="pt-8 border-t border-slate-200 scroll-mt-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Utensils className="w-4 h-4 text-emerald-700" />
              <span>Alimentación en el Centro</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
              Alimentación
            </h2>

            <p className="mt-3 text-slate-700 text-base sm:text-lg font-medium">
              Cada familia envía el desayuno, el almuerzo y las meriendas de su hijo.
            </p>
          </div>

          {/* Bloque destacado: Comiditas 911 */}
          <div className="bg-amber-50/90 rounded-3xl p-6 sm:p-8 border border-amber-200/90 max-w-3xl mx-auto shadow-xs text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-bold">
              <AlertCircle className="w-4 h-4 text-amber-800" />
              <span>Comiditas 911</span>
            </div>

            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
              Sabemos que pueden surgir imprevistos. Si algún día se te complica enviar la comida, puedes solicitar Comiditas 911. Previa coordinación y con un coste adicional, el centro proporciona un menú balanceado del día.
            </p>

            <p className="text-xs text-slate-600 font-medium">
              Comiditas 911 es una solución puntual para ayudar a las familias y no un servicio habitual de comedor.
            </p>

            <div className="pt-2">
              <a
                href={whatsappComiditasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-amber-900 bg-amber-200 hover:bg-amber-300 transition-all border border-amber-300"
              >
                <MessageCircle className="w-4 h-4 text-amber-800" />
                <span>Consultar Comiditas 911</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
