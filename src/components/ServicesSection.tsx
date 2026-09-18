import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { 
  Stethoscope, 
  Brain, 
  Activity, 
  HeartHandshake, 
  Utensils, 
  Trees, 
  Check, 
  ArrowRight,
  X,
  Phone
} from 'lucide-react';

interface ServicesProps {
  services: ServiceItem[];
  phone: string;
  phoneRaw: string;
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({
  services,
  phone,
  phoneRaw,
  onBookService
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-[#1B7A6E]" />;
      case 'Brain': return <Brain className="w-6 h-6 text-[#7E3E91]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#1B7A6E]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#7E3E91]" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-[#C99726]" />;
      case 'Trees': return <Trees className="w-6 h-6 text-[#1B7A6E]" />;
      default: return <Stethoscope className="w-6 h-6 text-[#1B7A6E]" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5EFEB]/70 border-t border-b border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#145E55] text-xs font-semibold uppercase tracking-wider mb-3">
            ჩვენი სერვისები
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2623] mb-4 font-['Playfair_Display',serif]">
            ყოვლისმომცველი ზრუნვა და სამედიცინო ყურადღება
          </h2>
          <p className="text-[#4E5B55] text-base md:text-lg">
            თითოეული ბენეფიციარის ჯანმრთელობისა და ემოციური კომფორტისთვის შექმნილი ინდივიდუალური პროგრამები.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-[#E2D7C5] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#1B7A6E]/50"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] border border-[#E8DFC9] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF6EE] text-[#7E3E91] border border-[#7E3E91]/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#1E2623] mb-2.5 font-['Playfair_Display',serif]">
                  {service.title}
                </h3>

                <p className="text-sm text-[#4E5B55] leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#3B4641]">
                      <Check className="w-4 h-4 text-[#1B7A6E] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F0E8D8] flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#1B7A6E] hover:text-[#135E55] flex items-center gap-1 group/btn"
                >
                  <span>დეტალური ინფორმაცია</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => onBookService(service.title)}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#FAF6EE] text-[#7E3E91] hover:bg-purple-100 transition-colors"
                >
                  შეკითხვა
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#E8DFC9] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-[#6D7B74] hover:text-black rounded-full hover:bg-gray-100"
              aria-label="დახურვა"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                {getIcon(selectedService.icon)}
              </div>
              <div>
                <span className="text-xs font-semibold text-[#7E3E91] uppercase tracking-wider">
                  {selectedService.badge || 'მომსახურება'}
                </span>
                <h3 className="text-2xl font-bold text-[#1E2623] font-['Playfair_Display',serif]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#4A5550] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="bg-[#FAF6EE] rounded-2xl p-4 border border-[#E8DFC9] mb-6">
              <h4 className="text-sm font-bold text-[#1E2623] mb-3">რა შედის ამ მომსახურებაში:</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#38433E]">
                    <Check className="w-4 h-4 text-[#1B7A6E] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  const sTitle = selectedService.title;
                  setSelectedService(null);
                  onBookService(sTitle);
                }}
                className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-[#1B7A6E] text-white font-semibold text-center hover:bg-[#156056] transition-colors"
              >
                კონსულტაციის მიღება
              </button>
              <a
                href={`tel:${phoneRaw}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-50 text-[#7E3E91] font-semibold hover:bg-purple-100 transition-colors border border-purple-200"
              >
                <Phone className="w-4 h-4" />
                <span>{phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
