import React from 'react';
import { Logo } from './Logo';
import { NAV_ITEMS } from '../data/centerData';
import { MapPin, Phone, Clock, MessageCircle, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/584141395219?text=Hola%2C%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20el%20C.E.I.P.%20Batalla%20de%20Taguanes';

  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300 relative pt-16 pb-12 overflow-hidden scroll-mt-16">
      {/* Floating Sticky WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
        aria-label="Abrir chat de WhatsApp"
        title="Contactar directamente por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
          WhatsApp Directo
        </span>
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" lightText={true} />
            <p className="text-sm font-semibold text-amber-300 font-display">
              La Nana de Mis Sueños
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              C.E.I.P. Batalla de Taguanes es un Centro de Educación Infantil con 30 años de experiencia acompañando a los niños en Maternal I, II y Preescolar I, II y III con afecto, pedagogía e inclusión.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-sky-400 transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Official Address */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider">
              Contacto y Dirección
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Macarena Norte, calle Los Apamates, Quinta Teófilo Enrique
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: +58 414-1395219</span>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="https://instagram.com/preescolartaguanes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  Instagram: @preescolartaguanes
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Lunes a viernes: entrada desde las 7:30 a. m. Jornada completa hasta las 4:30 p. m. Horario extendido hasta las 5:30 p. m., previa coordinación.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-950" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 C.E.I.P. Batalla de Taguanes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
