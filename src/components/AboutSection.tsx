import React from 'react';
import { SiteConfig } from '../types';
import { ShieldCheck, Heart, Sparkles, MapPin, Check } from 'lucide-react';

interface AboutProps {
  config: SiteConfig;
}

export const AboutSection: React.FC<AboutProps> = ({ config }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column: 2 Images layout */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border-2 border-white shadow-md aspect-[3/4]">
                  <img
                    src="/src/assets/images/healthy_senior_dining_1789649156291.jpg"
                    alt="ჯანსაღი დაბალანსებული კვება"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E2D7C5] shadow-xs">
                  <div className="text-xl font-bold text-[#145E55] font-['Playfair_Display',serif]">5-ჯერადი</div>
                  <div className="text-xs text-[#525F59]">ჯანსაღი & ნატურალური კვება</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-2xl bg-[#145E55] text-white shadow-xs">
                  <div className="text-xl font-bold font-['Playfair_Display',serif] text-amber-300">დიღომი 8</div>
                  <div className="text-xs text-emerald-100">თბილისის ყველაზე მშვიდი და სუფთა უბანი</div>
                </div>
                <div className="rounded-3xl overflow-hidden border-2 border-white shadow-md aspect-[3/4]">
                  <img
                    src="/src/assets/images/nurse_caring_senior_1789649127356.jpg"
                    alt="ზრუნვა და ყურადღება"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#145E55] text-xs font-semibold uppercase tracking-wider mb-3">
              ჩვენს შესახებ
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2623] mb-6 font-['Playfair_Display',serif] leading-tight">
              Royal Care — ადგილი, სადაც ყოველი დღე სავსეა პატივისცემითა და სითბოთი
            </h2>

            <p className="text-base text-[#4A5550] leading-relaxed mb-6">
              ჩვენი მისიაა შევქმნათ ისეთი გარემო, სადაც თქვენი მშობლები და ბებია-ბაბუები თავს იგრძნობენ 
              არა სამედიცინო დაწესებულებაში, არამედ საკუთარ თბილ სახლში — პროფესიონალური სამედიცინო უსაფრთხოების სრული გარანტიით.
            </p>

            <div className="space-y-3.5 mb-8">
              {[
                "24/7 კვალიფიციური ექთნებისა და მომვლელების უწყვეტი მორიგეობა",
                "ექიმის რეგულარული კონსულტაციები და მედიკამენტების ზუსტი კონტროლი",
                "ინდივიდუალური მიდგომა დემენციისა და ალცჰაიმერის მქონე პირებთან",
                "სუფთა ჰაერი, ხეხილიანი ეზო და მშვიდი სასეირნო სივრცე დიღომი 8-ში",
                "ყოველდღიური სისუფთავე, ულტრაიისფერი დეზინფექცია და ჰიგიენა"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#1B7A6E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-[#2E3633]">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E2D7C5] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#7E3E91] flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1E2623]">ჩვენი ფილოსოფია</h4>
                <p className="text-xs text-[#525F59]">
                  ღირსეული სიბერე ყველა ადამიანის უფლებაა. ჩვენ ვზრუნავთ მათზე მთელი გულით.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
