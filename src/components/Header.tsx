import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_ITEMS } from '../data/centerData';
import { Calendar, MessageCircle, Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl =
    'https://wa.me/584141395219?text=Hola%2C%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20el%20C.E.I.P.%20Batalla%20de%20Taguanes';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2 border-b border-sky-100/70'
          : 'bg-[#FAF9F6]/95 backdrop-blur-sm py-2.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#inicio"
            className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-0.5"
            title="C.E.I.P. Batalla de Taguanes - La Nana de Mis Sueños"
          >
            <Logo size="md" isMobileCompact={true} />
          </a>

          {/* Desktop Navigation - Wide and orderly spacing */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors border-b-2 border-transparent hover:border-sky-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA: ONLY single main button "Agendar una visita" */}
          <div className="hidden md:flex items-center">
            <a
              href="#agendar-visita"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-xs hover:shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar una visita</span>
            </a>
          </div>

          {/* Mobile Right Controls: Small Agendar button + Menu Icon */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#agendar-visita"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 bg-sky-50/80 hover:bg-sky-100 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[56px] bg-slate-900/40 backdrop-blur-xs z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-4/5 max-w-sm h-[calc(100vh-56px)] bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-sky-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Logo in Mobile Drawer Header */}
              <div className="pb-4 mb-4 border-b border-slate-100 flex items-center justify-between">
                <Logo size="sm" isMobileCompact={false} />
              </div>

              {/* Mobile Navigation List */}
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-sky-50/80 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Actions: Agendar y WhatsApp */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href="#agendar-visita"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar una visita</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                <span>WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2">
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>+58 414-1395219</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

