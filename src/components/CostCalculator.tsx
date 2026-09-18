import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageCircle, HelpCircle } from 'lucide-react';
import { SiteConfig } from '../types';

interface CalculatorProps {
  config: SiteConfig;
  onApplyEstimate: (notes: string) => void;
}

export const CostCalculator: React.FC<CalculatorProps> = ({ config, onApplyEstimate }) => {
  const [roomType, setRoomType] = useState<'single' | 'double' | 'triple'>('double');
  const [careLevel, setCareLevel] = useState<'independent' | 'partial' | 'full'>('partial');
  const [specialNeed, setSpecialNeed] = useState<string[]>([]);
  const [stayDuration, setStayDuration] = useState<'permanent' | 'temporary'>('permanent');

  const toggleSpecialNeed = (need: string) => {
    setSpecialNeed(prev => 
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  // Base calculation logic for Georgian market standards
  const calculatePrice = () => {
    let base = 1500;
    
    // Room multiplier
    if (roomType === 'single') base += 800;
    if (roomType === 'double') base += 300;
    if (roomType === 'triple') base += 0;

    // Care level
    if (careLevel === 'independent') base += 0;
    if (careLevel === 'partial') base += 350;
    if (careLevel === 'full') base += 700; // bedridden / full assistance

    // Special needs
    if (specialNeed.includes('dementia')) base += 250;
    if (specialNeed.includes('rehab')) base += 300;
    if (specialNeed.includes('specialDiet')) base += 100;

    if (stayDuration === 'temporary') {
      // Slight premium for short-term/temporary
      base = Math.round(base * 1.15);
    }

    const min = Math.round(base / 50) * 50;
    const max = min + 250;

    return { min, max };
  };

  const { min, max } = calculatePrice();

  const getSummaryText = () => {
    const roomName = roomType === 'single' ? '1-ადგილიანი VIP' : roomType === 'double' ? '2-ადგილიანი კომფორტი' : '3-ადგილიანი';
    const careName = careLevel === 'independent' ? 'დამოუკიდებელი' : careLevel === 'partial' ? 'ნაწილობრივი დახმარება' : 'მწოლიარე/სრული მოვლა';
    const needs = specialNeed.length > 0 ? specialNeed.join(', ') : 'სტანდარტული';
    const duration = stayDuration === 'permanent' ? 'გრძელვადიანი' : 'მოკლევადიანი/დროებითი';
    return `მოთხოვნა კალკულატორიდან: ოთახი: ${roomName}, მოვლა: ${careName}, სპეციალური საჭიროება: ${needs}, ვადა: ${duration}. სავარაუდო თანხა: ${min} - ${max} ₾.`;
  };

  const handleWhatsAppSend = () => {
    const summary = getSummaryText();
    const text = encodeURIComponent(`გამარჯობა Royal Care! კალკულატორით გამოვთვალე ჩემი საჭიროება:\n${summary}\nგთხოვთ დამიკავშირდეთ დეტალებისთვის.`);
    window.open(`https://wa.me/${config.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#FAF6EE] border-b border-[#E8DFC9]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-[#E2D7C5] p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1B7A6E] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#7E3E91] uppercase tracking-wider">
                გამჭვირვალე ფასწარმოქმნა
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2623] font-['Playfair_Display',serif]">
                მომსახურების ღირებულების ონლაინ კალკულატორი
              </h2>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#4E5B55] mb-8">
            შეარჩიეთ სასურველი პირობები და მიიღეთ სავარაუდო ყოველთვიური ღირებულება. ზუსტი ფასი დგინდება ექიმის მიერ პაციენტის მდგომარეობის შეფასების შემდეგ.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Room Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#145E55] mb-2.5">
                  1. აირჩიეთ ოთახის ტიპი
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: 'single', label: '1-ადგილიანი', sub: 'VIP პერსონალური' },
                    { id: 'double', label: '2-ადგილიანი', sub: 'კომფორტი' },
                    { id: 'triple', label: '3-ადგილიანი', sub: 'სტანდარტი' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRoomType(item.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        roomType === item.id
                          ? 'bg-emerald-50/80 border-[#1B7A6E] text-[#145E55] shadow-2xs font-semibold'
                          : 'border-[#E8DFC9] bg-[#FAF6EE]/50 hover:bg-[#FAF6EE] text-[#333]'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                      <div className="text-[11px] text-gray-500 truncate">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Care Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#145E55] mb-2.5">
                  2. პაციენტის დამოუკიდებლობის ხარისხი
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'independent', title: 'დამოუკიდებელი', desc: 'გადაადგილდება თავად, სჭირდება მეთვალყურეობა და კვება' },
                    { id: 'partial', title: 'ნაწილობრივი დახმარება', desc: 'სჭირდება დახმარება ჩაცმაში, ჰიგიენასა და გასეირნებაში' },
                    { id: 'full', title: 'სრული მოვლა / მწოლიარე', desc: '24/7 პერსონალური მზრუნველობა, გადაბრუნება, კვება საწოლში' },
                  ].map((lvl) => (
                    <label
                      key={lvl.id}
                      onClick={() => setCareLevel(lvl.id as any)}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        careLevel === lvl.id
                          ? 'bg-emerald-50/80 border-[#1B7A6E] shadow-2xs'
                          : 'border-[#E8DFC9] bg-white hover:bg-[#FAF6EE]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="careLevel"
                        checked={careLevel === lvl.id}
                        onChange={() => setCareLevel(lvl.id as any)}
                        className="mt-1 text-[#1B7A6E] focus:ring-[#1B7A6E]"
                      />
                      <div>
                        <div className="text-sm font-bold text-[#1E2623]">{lvl.title}</div>
                        <div className="text-xs text-[#55635C]">{lvl.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Special Needs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#145E55] mb-2.5">
                  3. სპეციალური სამედიცინო საჭიროებები (სურვილისამებრ)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'dementia', label: 'დემენცია / ალცჰაიმერი' },
                    { id: 'rehab', label: 'პოსტოპერაციული / ინსულტი' },
                    { id: 'specialDiet', label: 'ინდივიდუალური დიეტა' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleSpecialNeed(item.id)}
                      className={`p-2.5 px-3 rounded-xl border text-xs text-left flex items-center justify-between transition-all ${
                        specialNeed.includes(item.id)
                          ? 'bg-purple-50 border-[#7E3E91] text-[#7E3E91] font-bold'
                          : 'border-[#E8DFC9] bg-[#FAF6EE]/50 hover:bg-[#FAF6EE] text-[#444]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {specialNeed.includes(item.id) ? (
                        <CheckCircle2 className="w-4 h-4 text-[#7E3E91]" />
                      ) : (
                        <span className="w-4 h-4 rounded border border-gray-300 inline-block" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Duration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#145E55] mb-2">
                  4. განთავსების ხანგრძლივობა
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStayDuration('permanent')}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold ${
                      stayDuration === 'permanent'
                        ? 'bg-[#1B7A6E] text-white border-[#1B7A6E]'
                        : 'bg-white border-[#E8DFC9] text-[#333]'
                    }`}
                  >
                    გრძელვადიანი (მუდმივი)
                  </button>
                  <button
                    type="button"
                    onClick={() => setStayDuration('temporary')}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold ${
                      stayDuration === 'temporary'
                        ? 'bg-[#1B7A6E] text-white border-[#1B7A6E]'
                        : 'bg-white border-[#E8DFC9] text-[#333]'
                    }`}
                  >
                    მოკლევადიანი (დროებითი)
                  </button>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF6EE] rounded-2xl p-6 border border-[#E8DFC9]">
              <div>
                <span className="text-xs font-bold text-[#7E3E91] uppercase tracking-wider">
                  სავარაუდო ღირებულება
                </span>
                
                <div className="mt-3 mb-2 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-[#145E55] font-['Playfair_Display',serif]">
                    {min} – {max} ₾
                  </span>
                  <span className="text-xs text-gray-500 font-medium">/ თვეში</span>
                </div>

                <p className="text-xs text-[#5A6861] leading-relaxed mb-6">
                  ფასში სრულად შედის: 4-5-ჯერადი კვება, 24/7 ექთნის მოვლა, სასიცოცხლო პარამეტრების კონტროლი, თეთრეულის ცვლა და სრული კომფორტი.
                </p>

                <div className="bg-white/80 rounded-xl p-3 border border-[#E2D7C5] space-y-2 text-xs text-[#38433E] mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A6E]" />
                    <span>არანაირი ფარული გადასახადი</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A6E]" />
                    <span>უფასო პირველადი ვიზიტი და გასინჯვა</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B7A6E]" />
                    <span>ინდივიდუალური მორგება თქვენს ბიუჯეტზე</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  id="send-calculator-whatsapp"
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#20ba59] shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>გაგზავნა WhatsApp-ში (ზუსტი ფასისთვის)</span>
                </button>

                <button
                  id="apply-calculator-form"
                  onClick={() => onApplyEstimate(getSummaryText())}
                  className="w-full py-3 px-4 rounded-xl bg-[#1B7A6E] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#156056] transition-all"
                >
                  <span>ვიზიტის დაჯავშნა ამ მონაცემებით</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
