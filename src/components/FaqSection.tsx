import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

interface FaqProps {
  faqItems: FaqItem[];
  phone: string;
  phoneRaw: string;
}

export const FaqSection: React.FC<FaqProps> = ({ faqItems, phone, phoneRaw }) => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF6EE]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#145E55] text-xs font-semibold uppercase tracking-wider mb-3">
            კითხვა-პასუხი
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2623] mb-4 font-['Playfair_Display',serif]">
            ხშირად დასმული შეკითხვები
          </h2>
          <p className="text-[#4E5B55] text-base">
            ყველაფერი, რაც გაინტერესებთ მიღების პროცესის, პირობებისა და ცხოვრების წესის შესახებ.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E2D7C5] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#FAF6EE]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1E2623] font-['Playfair_Display',serif]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#1B7A6E] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-emerald-100' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#4E5B55] leading-relaxed border-t border-[#F0E8D8] bg-[#FCFAF5]/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#145E55] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold font-['Playfair_Display',serif]">გაქვთ სხვა შეკითხვა?</h4>
            <p className="text-xs sm:text-sm text-emerald-100">
              ჩვენი კონსულტანტი სიამოვნებით გაგესაუბრებათ და გიპასუხებთ ყველა დეტალზე.
            </p>
          </div>
          <a
            href={`tel:${phoneRaw}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-stone-900 font-bold text-sm hover:bg-amber-300 transition-colors flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
