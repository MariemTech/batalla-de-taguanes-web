import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, MessageCircle, Quote, Sparkles } from 'lucide-react';

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  isFeatured?: boolean;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote:
        'Es el mejor colegio. Hay ternura, amor, sueños hermosos, dedicación y, lo más importante, calor familiar.',
      author: 'Rudy',
      isFeatured: true,
    },
    {
      id: 2,
      quote:
        'Mis dos hijos pasaron por allí y siempre agradeceré el cariño y la dedicación que recibieron. Son lo máximo.',
      author: 'Osio',
    },
    {
      id: 3,
      quote: 'La mejor etapa escolar de mi hijo fue allí. ¡Qué bonito se les recuerda!',
      author: 'Neym',
    },
    {
      id: 4,
      quote:
        'Siempre las recordamos con cariño y las mantenemos presentes para nuestra chiqui, que ya no está tan chiqui.',
      author: 'Neur',
    },
    {
      id: 5,
      quote:
        'Gracias por todas las experiencias hermosas que comparte mi nieto cada día en sus instalaciones.',
      author: 'Mjlr',
    },
    {
      id: 6,
      quote: 'Excelentes profesionales. Gracias por ser tan entregadas con nuestros peques.',
      author: 'Alix',
    },
    {
      id: 7,
      quote: 'Las adoro. Son las maestras más dedicadas del mundo.',
      author: 'Rebe',
    },
  ];

  const whatsappVisitUrl =
    'https://wa.me/584141395219?text=' +
    encodeURIComponent(
      'Hola, quisiera recibir información y solicitar una visita a La Nana de Mis Sueños.'
    );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-sky-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4 text-amber-600" />
            <span>Historias de nuestra comunidad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Lo que permanece en las familias
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            La tranquilidad de dejar a sus hijos en un lugar que, con los años, continúan recordando con cariño.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-12">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Testimonio anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Siguiente testimonio"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track Window */}
          <div
            className="overflow-hidden rounded-3xl p-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/3 shrink-0 px-2 sm:px-3 flex"
                >
                  <div
                    className={`w-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                      item.isFeatured
                        ? 'bg-amber-50/90 border-2 border-amber-300/80 shadow-md'
                        : 'bg-white border border-slate-200 shadow-xs hover:shadow-md'
                    }`}
                  >
                    {item.isFeatured && (
                      <div className="absolute -top-3.5 left-6 bg-amber-200 text-amber-900 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-300 flex items-center gap-1 shadow-2xs">
                        <Sparkles className="w-3 h-3 text-amber-700" />
                        <span>Reseña destacada</span>
                      </div>
                    )}

                    <div className="space-y-4">
                      <Quote className="w-8 h-8 text-sky-400/60 shrink-0" />
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                        “{item.quote}”
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-900 font-display">
                        — {item.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al grupo de testimonios ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx
                    ? 'w-8 bg-sky-600'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Closing Callout & Call to Action Button */}
        <div className="mt-16 text-center max-w-2xl mx-auto space-y-6 pt-6 border-t border-sky-100">
          <p className="text-base sm:text-lg text-slate-800 font-display font-medium leading-relaxed">
            Cada familia tiene una historia. Queremos que la suya comience con confianza, tranquilidad y mucho cariño.
          </p>

          <div>
            <a
              href={whatsappVisitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-100" />
              <span>Quiero conocer el centro</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
