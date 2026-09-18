import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SiteConfig } from '../types';

interface FloatingActionsProps {
  config: SiteConfig;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ config }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${config.whatsapp.replace('+', '')}?text=${encodeURIComponent('გამარჯობა Royal Care! მაინტერესებს პანსიონატში მიღების პირობები.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba59] hover:shadow-xl transition-all transform hover:-translate-y-1 group"
        aria-label="მოგვწერეთ WhatsApp-ში"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs sm:text-sm font-semibold pr-1 hidden sm:inline group-hover:inline">
          მოგვწერეთ WhatsApp
        </span>
      </a>

      {/* Direct Phone Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${config.phoneRaw}`}
        className="flex items-center gap-2 px-4 py-3 bg-[#1B7A6E] text-white rounded-full shadow-lg hover:bg-[#156056] hover:shadow-xl transition-all transform hover:-translate-y-1 group animate-soft-pulse"
        aria-label="დარეკვა"
      >
        <Phone className="w-5 h-5" />
        <span className="text-xs sm:text-sm font-semibold pr-1">
          {config.phone}
        </span>
      </a>
    </div>
  );
};
