import React, { useState } from 'react';
import { FAQS } from '../data/centerData';
import { HelpCircle, Plus, Minus, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappFaqUrl =
    'https://wa.me/584141395219?text=' +
    encodeURIComponent(
      'Hola, quisiera recibir información sobre el maternal y preescolar Batalla de Taguanes.'
    );

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>Resolución de Dudas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Preguntas frecuentes de las familias
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Resolvemos algunas dudas prácticas antes de comenzar esta nueva etapa.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-sky-300 bg-sky-50/40 shadow-xs'
                    : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-display leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-sky-100/80 bg-white/90">
                    <p className="pt-3.5">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Callout & Button */}
        <div className="mt-12 text-center pt-8 border-t border-slate-100 space-y-4">
          <p className="text-base sm:text-lg font-display font-bold text-slate-900">
            ¿Tienes otra pregunta? Conversemos.
          </p>

          <div>
            <a
              href={whatsappFaqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-100" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
