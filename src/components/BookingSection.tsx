import React, { useState } from 'react';
import { VisitBookingData } from '../types';
import { Logo } from './Logo';
import { Calendar as CalendarIcon, Clock, CheckCircle2, User, Mail, Phone, MessageSquare, X, Check, Info } from 'lucide-react';

export const BookingSection: React.FC = () => {
  const whatsappVisitUrl =
    'https://wa.me/584141395219?text=' +
    encodeURIComponent(
      'Hola, he visitado la web del C.E.I.P. Batalla de Taguanes y me gustaría solicitar una visita al centro. ¿Qué horarios tienen disponibles esta semana?'
    );

  const [selectedAgeLevel, setSelectedAgeLevel] = useState<string>('maternal-1');

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<VisitBookingData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.email) {
      alert('Por favor completa todos los campos requeridos (*)');
      return;
    }

    setIsSubmitting(true);

    const bookingPayload: VisitBookingData = {
      parentName: formData.parentName,
      email: formData.email,
      phone: formData.phone,
      childName: formData.childName || 'Por definir',
      childAge: selectedAgeLevel,
      selectedDate: 'Pendiente de confirmación',
      selectedTimeSlot: 'Turno Mañana',
      notes: formData.notes,
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking(bookingPayload);
      setShowSuccessModal(true);
    }, 500);
  };

  // Generate mailto link for sending a copy to the representative's email
  const getMailtoCopyUrl = (booking: VisitBookingData) => {
    const subject = encodeURIComponent(
      `Copia de Solicitud de Visita - C.E.I.P. Batalla de Taguanes (La Nana de Mis Sueños)`
    );
    const body = encodeURIComponent(
      `Hola ${booking.parentName},\n\n` +
        `Esta es una copia del resumen de tu solicitud de visita al C.E.I.P. Batalla de Taguanes - La Nana de Mis Sueños:\n\n` +
        `• Representante: ${booking.parentName}\n` +
        `• Correo: ${booking.email}\n` +
        `• Teléfono: ${booking.phone}\n` +
        `• Nivel de interés: ${booking.childAge.toUpperCase()}\n` +
        `• Alumno/a: ${booking.childName}\n` +
        `• Observaciones: ${booking.notes || 'Sin observaciones'}\n\n` +
        `El centro se pondrá en contacto contigo a la brevedad para coordinar y confirmar la fecha y hora de la visita.\n\n` +
        `Atentamente,\n` +
        `C.E.I.P. Batalla de Taguanes - La Nana de Mis Sueños\n` +
        `WhatsApp: +58 414-1395219\n` +
        `Instagram: @preescolartaguanes`
    );
    return `mailto:${booking.email}?subject=${subject}&body=${body}`;
  };

  // Generate WhatsApp link with full booking details for the center
  const getWhatsAppBookingUrl = (booking: VisitBookingData) => {
    const text = encodeURIComponent(
      `Hola, he enviado una solicitud de visita a través de la página web.\n\n` +
        `*Datos de la solicitud:*\n` +
        `• Representante: ${booking.parentName}\n` +
        `• Teléfono: ${booking.phone}\n` +
        `• Correo: ${booking.email}\n` +
        `• Nivel de interés: ${booking.childAge.toUpperCase()}\n` +
        `• Alumno/a: ${booking.childName}\n` +
        `• Observaciones: ${booking.notes || 'Ninguna'}`
    );
    return `https://wa.me/584141395219?text=${text}`;
  };

  const [copied, setCopied] = useState(false);
  const handleCopySummary = (booking: VisitBookingData) => {
    const summaryText =
      `Solicitud de Visita - C.E.I.P. Batalla de Taguanes\n` +
      `Representante: ${booking.parentName}\n` +
      `Correo: ${booking.email}\n` +
      `Teléfono: ${booking.phone}\n` +
      `Nivel: ${booking.childAge.toUpperCase()}\n` +
      `Alumno/a: ${booking.childName}\n` +
      `Observaciones: ${booking.notes || 'Sin observaciones'}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="agendar-visita" className="py-16 lg:py-24 bg-slate-50/70 relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarIcon className="w-4 h-4 text-sky-600" />
            <span>Atención Personalizada a Familias</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Reserva de visitas
          </h2>

          <p className="mt-3 text-slate-700 text-base leading-relaxed">
            Las visitas se realizan de lunes a viernes por la mañana, mediante cita previa.
          </p>
          <p className="text-xs text-sky-800 font-semibold mt-1">
            Los horarios disponibles se publicarán semanalmente.
          </p>
        </div>

        {/* Direct WhatsApp Callout while schedule is pending configuration */}
        <div className="max-w-2xl mx-auto mb-10 text-center bg-sky-50 border border-sky-200 p-6 rounded-3xl shadow-xs space-y-3">
          <div className="flex items-center justify-center gap-2 text-sky-900 font-bold text-sm">
            <Info className="w-5 h-5 text-sky-600" />
            <span>¿Prefieres coordinar directamente tu visita?</span>
          </div>
          <p className="text-xs text-slate-600">
            Puedes consultar la disponibilidad inmediata de esta semana a través de nuestro canal directo de atención.
          </p>
          <div>
            <a
              href={whatsappVisitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-100" />
              <span>Solicitar una visita por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Age level interest */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                1. Nivel de interés para tu hijo/a:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {[
                  { id: 'maternal-1', label: 'Maternal I' },
                  { id: 'maternal-2', label: 'Maternal II' },
                  { id: 'preescolar-1', label: 'Preescolar I' },
                  { id: 'preescolar-2', label: 'Preescolar II' },
                  { id: 'preescolar-3', label: 'Preescolar III' },
                ].map((lvl) => (
                  <button
                    type="button"
                    key={lvl.id}
                    onClick={() => setSelectedAgeLevel(lvl.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedAgeLevel === lvl.id
                        ? 'border-sky-600 bg-sky-600 text-white shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Parent Contact Info */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                2. Datos de contacto de la familia
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre completo del representante *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Ej. María García"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Teléfono de contacto *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. +58 414-0000000"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ejemplo@correo.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre del alumno/a (opcional)
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="Ej. Lucas"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Observaciones o consultas (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Escribe aquí cualquier duda previa o preferencia de día..."
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-md hover:shadow-lg disabled:opacity-60 text-sm flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Enviando solicitud...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Enviar Solicitud de Cita</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2.5">
                El centro se pondrá en contacto contigo para confirmar el día y la hora de la visita.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showSuccessModal && confirmedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-sky-100 relative text-center space-y-5 animate-in fade-in zoom-in duration-200">
            
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mx-auto flex justify-center">
              <Logo size="lg" showText={true} />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <Check className="w-4 h-4" /> Solicitud Enviada
              </span>
              <h3 className="text-xl font-display font-bold text-slate-900">
                ¡Gracias, {confirmedBooking.parentName}!
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hemos recibido tu solicitud de visita para el C.E.I.P. Batalla de Taguanes.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1.5 text-left">
              <div className="flex items-center justify-between">
                <p className="font-bold text-slate-800">Resumen de la solicitud:</p>
                <button
                  onClick={() => handleCopySummary(confirmedBooking)}
                  className="text-[10px] font-semibold text-sky-700 hover:underline flex items-center gap-1"
                >
                  {copied ? '✓ ¡Copiado!' : 'Copiar texto'}
                </button>
              </div>
              <p className="text-slate-600">• <strong>Representante:</strong> {confirmedBooking.parentName}</p>
              <p className="text-slate-600">• <strong>Nivel:</strong> {confirmedBooking.childAge.toUpperCase()}</p>
              <p className="text-slate-600">• <strong>Teléfono:</strong> {confirmedBooking.phone}</p>
              <p className="text-slate-600">• <strong>Correo:</strong> {confirmedBooking.email}</p>
              {confirmedBooking.childName && confirmedBooking.childName !== 'Por definir' && (
                <p className="text-slate-600">• <strong>Alumno/a:</strong> {confirmedBooking.childName}</p>
              )}
            </div>

            <p className="text-xs text-sky-800 font-semibold">
              El centro se pondrá en contacto contigo para confirmar el día y la hora de la visita.
            </p>

            <div className="space-y-2.5 pt-1">
              {/* Option A: Send copy to representative's email */}
              <a
                href={getMailtoCopyUrl(confirmedBooking)}
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold text-sky-900 bg-sky-100 hover:bg-sky-200 transition-colors flex items-center justify-center gap-2 border border-sky-200"
              >
                <Mail className="w-4 h-4 text-sky-700" />
                <span>Enviar copia a mi correo ({confirmedBooking.email})</span>
              </a>

              {/* Option B: Send request to center via WhatsApp */}
              <a
                href={getWhatsAppBookingUrl(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-100" />
                <span>Enviar solicitud al WhatsApp del centro</span>
              </a>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-2.5 px-4 rounded-2xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
