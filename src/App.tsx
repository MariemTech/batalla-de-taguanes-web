import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Methodology } from './components/Methodology';
import { Levels } from './components/Levels';
import { Recrearte } from './components/Recrearte';
import { Inclusion } from './components/Inclusion';
import { Schedules } from './components/Schedules';
import { BookingSection } from './components/BookingSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] font-sans antialiased text-slate-800">
      {/* Fixed Sticky Header with Moon & Bear Logo */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section inspired by Presentation Slide 1 */}
        <Hero />

        {/* 30 Years Trajectory Section (Sober & Trustworthy) */}
        <AboutUs />

        {/* Constructivist & Montessori Methodology */}
        <Methodology />

        {/* Educational Levels (4 months to 5 years) */}
        <Levels />

        {/* RECREARTE Section (Sub-brand visual identity) */}
        <Recrearte />

        {/* Inclusion & Specialists Team */}
        <Inclusion />

        {/* Schedules, Dining & Services */}
        <Schedules />

        {/* Visit Reservation Calendar & Booking Form */}
        <BookingSection />

        {/* Parent Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Institutional Footer & Floating WhatsApp */}
      <Footer />
    </div>
  );
}

