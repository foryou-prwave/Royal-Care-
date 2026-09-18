import React from 'react';
import { Logo } from './Logo';
import { SiteConfig } from '../types';
import { Phone, MessageCircle, MapPin, Instagram, Facebook, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  config: SiteConfig;
  onOpenAdmin: () => void;
  onOpenHostingGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenAdmin, onOpenHostingGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14322D] text-white pt-16 pb-12 border-t-4 border-[#C99726]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/10 p-2.5 rounded-2xl inline-block border border-white/10">
              <Logo size="md" />
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed">
              Royal Care — მოხუცთა ზრუნვისა და მოვლის თანამედროვე პანსიონატი თბილისში, დიღომი 8. 
              ოჯახური სითბო, ღირსება და 24/7 უწყვეტი სამედიცინო მეთვალყურეობა.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://facebook.com/${config.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1B7A6E] flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://instagram.com/${config.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#7E3E91] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${config.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold font-['Playfair_Display',serif] text-amber-300">
              სწრაფი ნავიგაცია
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80">
              <li>
                <a href="#hero" className="hover:text-amber-300 transition-colors">მთავარი გვერდი</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">მომსახურება და სერვისები</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-300 transition-colors">საცხოვრებელი ოთახები</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-300 transition-colors">ფასების კალკულატორი</a>
              </li>
              <li>
                <a href="#routine" className="hover:text-amber-300 transition-colors">დღის განრიგი</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">ხშირად დასმული კითხვები</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold font-['Playfair_Display',serif] text-amber-300">
              მომსახურებები
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>24/7 ექთნის პოსტი</li>
              <li>ალცჰაიმერი & დემენცია</li>
              <li>პოსტოპერაციული მოვლა</li>
              <li>5-ჯერადი ჯანსაღი კვება</li>
              <li>მწოლიარე პაციენტის მოვლა</li>
              <li>დიღომი 8-ის სუფთა ჰაერი</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold font-['Playfair_Display',serif] text-amber-300">
              კონტაქტი
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-emerald-100/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>{config.city}, {config.district}, {config.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <a href={`tel:${config.phoneRaw}`} className="hover:text-amber-300 font-bold">
                  {config.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a 
                  href={`https://wa.me/${config.whatsapp.replace('+', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-300"
                >
                  WhatsApp: +995 557 19 99 92
                </a>
              </div>
              <div className="pt-2 text-xs text-emerald-200/60">
                ვებ-მისამართი: <span className="text-amber-200 font-mono">{config.domain}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and admin access */}
        <div className="pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Royal Care. ყველა უფლება დაცულია.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">შექმნილია სიყვარულით მოხუცებისთვის</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenHostingGuide}
              className="text-amber-300 hover:underline"
            >
              📘 ჰოსტინგის & დომენის ინსტრუქცია
            </button>
            <button
              onClick={onOpenAdmin}
              className="text-emerald-300 hover:text-white hover:underline"
            >
              ⚙️ საიტის მართვა
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="ზემოთ დაბრუნება"
              aria-label="ზემოთ დაბრუნება"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
