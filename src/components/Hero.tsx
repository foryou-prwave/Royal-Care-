import React from 'react';
import { SiteConfig } from '../types';
import { 
  ShieldCheck, 
  Heart, 
  Trees, 
  Calendar, 
  PhoneCall, 
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  config: SiteConfig;
  onBookVisit: () => void;
  onCalculate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onBookVisit, onCalculate }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-4 pb-16 md:py-20">
      {/* Top Banner if enabled */}
      {config.bannerActive && config.bannerText && (
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <div className="bg-amber-100/90 border border-amber-300/80 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs md:text-sm text-amber-900 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C99726] flex-shrink-0 animate-pulse" />
              <span className="font-medium">{config.bannerText}</span>
            </div>
            <a 
              href="#contact" 
              className="font-bold underline text-[#1B7A6E] hover:text-[#135E55] ml-2 whitespace-nowrap text-xs"
            >
              დაჯავშნა &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Decorative background aura */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#C99726]/30 text-[#145E55] text-xs md:text-sm font-semibold mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1B7A6E] animate-ping" />
              <span className="text-[#C99726] font-serif">ROYAL CARE</span> • მოვლისა და ზრუნვის პანსიონატი
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-[#1E2623] leading-[1.25] tracking-tight mb-5 font-serif">
              სითბო, ღირსება და{' '}
              <span className="text-[#1B7A6E] underline decoration-[#C99726]/60 decoration-wavy decoration-2">
                24/7 პროფესიონალური ზრუნვა
              </span>{' '}
              თქვენი საყვარელი ადამიანებისთვის
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#4A5550] mb-8 leading-relaxed max-w-2xl font-normal">
              დიღომი 8-ის წყნარ, ეკოლოგიურად სუფთა კერძო დასახლებაში. მყუდრო ოთახები, 
              ექიმებისა და ექთნების უწყვეტი სამედიცინო კონტროლი, 5-ჯერადი ჯანსაღი კვება და ოჯახური გარემო.
            </p>

            {/* Key feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-[#E8DFC9] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1B7A6E] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-[#242B28]">24/7 სამედიცინო მეთვალყურეობა</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-[#E8DFC9] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#7E3E91] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-[#242B28]">დემენციისა და ალცჰაიმერის მოვლა</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-[#E8DFC9] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#C99726] flex items-center justify-center flex-shrink-0">
                  <Trees className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-[#242B28]">სუფთა ჰაერი & გამწვანებული ეზო</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-[#E8DFC9] shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#145E55] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-[#242B28]">ოპერაციის შემდგომი რეაბილიტაცია</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-book-visit-btn"
                onClick={onBookVisit}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1B7A6E] text-white font-semibold shadow-md hover:bg-[#156056] hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-amber-300" />
                <span>უფასო ვიზიტის დაჯავშნა</span>
              </button>

              <button
                id="hero-calculator-btn"
                onClick={onCalculate}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#1B7A6E] border-2 border-[#1B7A6E] font-semibold hover:bg-emerald-50/50 transition-all cursor-pointer"
              >
                <span>ღირებულების კალკულატორი</span>
              </button>

              <a
                href={`tel:${config.phoneRaw}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-[#7E3E91] bg-purple-50 hover:bg-purple-100 font-semibold transition-colors border border-purple-200 text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>დარეკეთ: {config.phone}</span>
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-[#E8DFC9]/70 text-xs sm:text-sm text-[#4E5B55]">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#1B7A6E] text-base">5.7K+</span>
                <span>მიმდევარი FB-ზე</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C99726]" />
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#1B7A6E] text-base">24/7</span>
                <span>ექთნის მორიგეობა</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C99726]" />
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#1B7A6E] text-base">100%</span>
                <span>ინდივიდუალური მიდგომა</span>
              </div>
            </div>
          </div>

          {/* Visual Images Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Exterior Residence Image */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-[#E8F0EC] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Royal Care პანსიონატი დიღომი 8-ში"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-[#E8DFC9] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#C99726]" />
                    <div>
                      <p className="text-xs font-bold text-[#1E2623]">{config.city}, {config.district}</p>
                      <p className="text-[11px] text-[#55635C]">{config.address}</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-1 rounded-md bg-emerald-100 text-[#145E55] font-semibold">
                    გამწვანებული ზონა
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Card: Caring Nurse */}
              <div className="hidden sm:flex absolute -bottom-8 -left-8 w-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white flex-col">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                  alt="მზრუნველი ექთანი მოხუცთან"
                  className="w-full h-28 object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-2.5 bg-white">
                  <p className="text-xs font-bold text-[#145E55] flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#7E3E91] fill-current" />
                    თბილი დამოკიდებულება
                  </p>
                  <p className="text-[11px] text-[#63736C]">როგორც საკუთარ ოჯახში</p>
                </div>
              </div>

              {/* Floating Quality Tag */}
              <div className="absolute -top-4 -right-4 bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-[#C99726]/40 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-[#C99726]">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-[#242B28]">Royal Care</div>
                  <div className="text-[10px] text-[#7E3E91] font-semibold">უმაღლესი სტანდარტი</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
