import React, { useState, useEffect } from 'react';
import { SiteConfig } from './types';
import { INITIAL_SITE_CONFIG, SERVICES_DATA, ROOMS_DATA, FAQ_DATA } from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { RoomsSection } from './components/RoomsSection';
import { CostCalculator } from './components/CostCalculator';
import { DailyRoutineSection } from './components/DailyRoutineSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AdminModal } from './components/AdminModal';
import { HostingGuideModal } from './components/HostingGuideModal';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('royalcare_site_config');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_SITE_CONFIG;
  });

  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(1.0);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isHostingGuideOpen, setIsHostingGuideOpen] = useState(false);
  const [bookingNotes, setBookingNotes] = useState<string>('');

  const handleSaveConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('royalcare_site_config', JSON.stringify(newConfig));
    } catch {
      // Storage unavailable
    }
  };

  const handleScrollToBooking = (notes?: string) => {
    if (notes) {
      setBookingNotes(notes);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCalculator = () => {
    const calcElem = document.getElementById('calculator');
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#FAF6EE] text-[#242B28] flex flex-col font-sans transition-all"
      style={{ fontSize: `${fontSizeMultiplier * 100}%` }}
    >
      {/* Top sticky Navigation */}
      <Navbar
        config={config}
        fontSizeMultiplier={fontSizeMultiplier}
        setFontSizeMultiplier={setFontSizeMultiplier}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenHostingGuide={() => setIsHostingGuideOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          config={config}
          onBookVisit={() => handleScrollToBooking('მსურს უფასო გაცნობითი ვიზიტის დაჯავშნა')}
          onCalculate={handleScrollToCalculator}
        />

        {/* Services & Care Specializations */}
        <ServicesSection
          services={SERVICES_DATA}
          phone={config.phone}
          phoneRaw={config.phoneRaw}
          onBookService={(serviceName) => 
            handleScrollToBooking(`დაინტერესებული ვარ მომსახურებით: ${serviceName}`)
          }
        />

        {/* Accommodation Rooms & Living Conditions */}
        <RoomsSection
          rooms={ROOMS_DATA}
          onSelectRoomForBooking={(roomTitle) => 
            handleScrollToBooking(`მსურს ოთახის დათვალიერება/დაჯავშნა: ${roomTitle}`)
          }
        />

        {/* Transparent Interactive Cost Calculator */}
        <CostCalculator
          config={config}
          onApplyEstimate={(estimateSummary) => 
            handleScrollToBooking(estimateSummary)
          }
        />

        {/* Daily Schedule & Life at Royal Care */}
        <DailyRoutineSection />

        {/* About Royal Care & Digomi 8 Location Advantage */}
        <AboutSection config={config} />

        {/* Frequently Asked Questions */}
        <FaqSection
          faqItems={FAQ_DATA}
          phone={config.phone}
          phoneRaw={config.phoneRaw}
        />

        {/* Contact, Booking Form & Interactive Map */}
        <ContactSection
          config={config}
          prefilledNotes={bookingNotes}
        />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenHostingGuide={() => setIsHostingGuideOpen(true)}
      />

      {/* Quick Call & WhatsApp Floating Action Buttons */}
      <FloatingActions config={config} />

      {/* Admin Content Manager Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

      {/* Hosting, Domain & Google Indexing Guide Modal */}
      <HostingGuideModal
        isOpen={isHostingGuideOpen}
        onClose={() => setIsHostingGuideOpen(false)}
      />
    </div>
  );
}
