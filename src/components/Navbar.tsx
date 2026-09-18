import React, { useState } from 'react';
import { Logo } from './Logo';
import { SiteConfig } from '../types';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  Settings, 
  HelpCircle,
  ZoomIn,
  ZoomOut,
  Clock
} from 'lucide-react';

interface NavbarProps {
  config: SiteConfig;
  fontSizeMultiplier: number;
  setFontSizeMultiplier: (fn: (prev: number) => number) => void;
  onOpenAdmin: () => void;
  onOpenHostingGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  fontSizeMultiplier,
  setFontSizeMultiplier,
  onOpenAdmin,
  onOpenHostingGuide
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'მთავარი', href: '#hero' },
    { name: 'მომსახურება', href: '#services' },
    { name: 'ოთახები', href: '#rooms' },
    { name: 'დღის განრიგი', href: '#routine' },
    { name: 'კალკულატორი', href: '#calculator' },
    { name: 'ჩვენს შესახებ', href: '#about' },
    { name: 'კითხვა-პასუხი', href: '#faq' },
    { name: 'კონტაქტი', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#145E55] text-white text-xs md:text-sm py-2 px-4 border-b border-[#1A6F64]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-emerald-100">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#E6BF5C]" />
              {config.city}, {config.district}, {config.address}
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E6BF5C]" />
              ვიზიტები: ყოველდღე 10:00 - 20:00
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Accessibility text zoom buttons */}
            <div className="flex items-center bg-emerald-900/60 rounded-lg px-2 py-0.5 text-xs text-white/90 border border-emerald-700/50">
              <span className="mr-1.5 hidden md:inline text-[11px] text-emerald-200">შრიფტი:</span>
              <button
                id="decrease-font-btn"
                onClick={() => setFontSizeMultiplier(prev => Math.max(0.9, prev - 0.1))}
                className="p-1 hover:text-amber-300 transition-colors"
                title="შრიფტის დაპატარავება"
                aria-label="შრიფტის დაპატარავება"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-1 font-mono text-[11px] text-amber-300">
                {Math.round(fontSizeMultiplier * 100)}%
              </span>
              <button
                id="increase-font-btn"
                onClick={() => setFontSizeMultiplier(prev => Math.min(1.3, prev + 0.1))}
                className="p-1 hover:text-amber-300 transition-colors"
                title="შრიფტის გადიდება (კითხვადობისთვის)"
                aria-label="შრიფტის გადიდება"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick hosting guide helper button */}
            <button
              id="hosting-guide-btn"
              onClick={onOpenHostingGuide}
              className="hidden lg:flex items-center gap-1 px-2.5 py-1 text-xs bg-amber-400/20 text-amber-200 hover:bg-amber-400/30 rounded-md transition-colors border border-amber-300/30 font-medium"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              ჰოსტინგი & დომენი
            </button>

            {/* Admin toggle button */}
            <button
              id="admin-open-btn"
              onClick={onOpenAdmin}
              className="flex items-center gap-1 px-2 py-1 text-xs text-emerald-200 hover:text-white hover:bg-emerald-800 rounded transition-colors"
              title="საიტის მართვა / ადმინ პანელი"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ადმინი</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E8DFC9] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-2 group">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 text-[15px] font-medium text-[#2E3633]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1B7A6E] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B7A6E] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Call & WhatsApp Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="header-call-btn"
              href={`tel:${config.phoneRaw}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1B7A6E] text-white hover:bg-[#156056] text-sm font-semibold shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>{config.phone}</span>
            </a>
            
            <a
              id="header-whatsapp-btn"
              href={`https://wa.me/${config.whatsapp.replace('+', '')}?text=${encodeURIComponent('გამარჯობა, მაინტერესებს მოხუცთა პანსიონატ Royal Care-ის პირობები და თავისუფალი ადგილები.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] text-sm font-semibold shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
              title="მოგვწერეთ WhatsApp-ში"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${config.phoneRaw}`}
              className="p-2.5 bg-[#1B7A6E] text-white rounded-xl sm:hidden"
              aria-label="დარეკვა"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#2E3633] hover:bg-[#ECE3CE] rounded-xl transition-colors"
              aria-label="მენიუს გახსნა"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF6EE] border-b border-[#E0D4BE] px-6 py-5 shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-base font-medium text-[#2E3633] hover:bg-[#ECE3CE] hover:text-[#1B7A6E] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8DFC9] flex flex-col gap-3">
              <a
                href={`tel:${config.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1B7A6E] text-white font-semibold text-center shadow-sm"
              >
                <Phone className="w-5 h-5" />
                <span>დარეკვა: {config.phone}</span>
              </a>

              <a
                href={`https://wa.me/${config.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-center shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>მოგვწერეთ WhatsApp-ში</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHostingGuide();
                }}
                className="py-2.5 text-center text-xs text-[#7E3E91] font-semibold hover:underline"
              >
                📖 ჰოსტინგზე განთავსების & დომენის ინსტრუქცია
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
