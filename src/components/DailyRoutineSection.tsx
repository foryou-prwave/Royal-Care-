import React from 'react';
import { DAILY_ROUTINE } from '../data/initialData';
import { Sun, Coffee, Trees, Utensils, Moon, Smile, CheckCircle, Heart, Clock } from 'lucide-react';

export const DailyRoutineSection: React.FC = () => {
  const getRoutineIcon = (name: string) => {
    switch (name) {
      case 'Sun': return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-[#C99726]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#1B7A6E]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#C99726]" />;
      case 'Moon': return <Moon className="w-5 h-5 text-[#7E3E91]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-amber-600" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-[#1B7A6E]" />;
      default: return <Heart className="w-5 h-5 text-[#7E3E91]" />;
    }
  };

  return (
    <section id="routine" className="py-16 md:py-24 bg-[#F5EFEB]/50 border-b border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#7E3E91] text-xs font-semibold uppercase tracking-wider mb-3">
            ცხოვრების წესი
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2623] mb-4 font-['Playfair_Display',serif]">
            როგორ გამოიყურება ერთი დღე Royal Care-ში?
          </h2>
          <p className="text-[#4E5B55] text-base md:text-lg">
            დაბალანსებული დღის რეჟიმი: სამედიცინო ზრუნვა, ჯანსაღი კვება, სუფთა ჰაერი და თბილი ურთიერთობები.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DAILY_ROUTINE.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-[#E2D7C5] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1B7A6E] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EE] flex items-center justify-center border border-[#E8DFC9]">
                    {getRoutineIcon(item.icon)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#1E2623] mb-2 font-['Playfair_Display',serif]">
                  {item.title}
                </h3>

                <p className="text-xs text-[#525F59] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0E8D8] text-[11px] text-[#7E3E91] font-semibold flex items-center gap-1">
                <span>ეტაპი {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
