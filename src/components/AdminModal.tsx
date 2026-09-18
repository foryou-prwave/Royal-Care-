import React, { useState } from 'react';
import { SiteConfig } from '../types';
import { X, Save, RotateCcw, Download, Check, Sparkles, AlertCircle } from 'lucide-react';
import { INITIAL_SITE_CONFIG } from '../data/initialData';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSaveConfig: (newConfig: SiteConfig) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig
}) => {
  const [formData, setFormData] = useState<SiteConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    setFormData(config);
  }, [config]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('დავაბრუნოთ საწყისი პარამეტრები?')) {
      setFormData(INITIAL_SITE_CONFIG);
      onSaveConfig(INITIAL_SITE_CONFIG);
    }
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "royalcare-site-config.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2D7C5] max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100"
          aria-label="დახურვა"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1B7A6E] flex items-center justify-center font-bold">
            ⚙️
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E2623] font-['Playfair_Display',serif]">
              საიტის ადმინ პანელი (სწრაფი მართვა)
            </h2>
            <p className="text-xs text-[#5E6D66]">
              აქედან შეგიძლიათ თავად შეცვალოთ ტელეფონი, ფასები, მისამართი და ბანერი რეალურ დროში.
            </p>
          </div>
        </div>

        {savedSuccess && (
          <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>ცვლილებები წარმატებით შეინახა და საიტზე მაშინვე აისახა!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          {/* Announcement Banner Control */}
          <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC9] space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-[#145E55]">
                ზედა საინფორმაციო ბანერი (აქცია / მიღება)
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.bannerActive}
                  onChange={(e) => setFormData({ ...formData, bannerActive: e.target.checked })}
                  className="rounded text-[#1B7A6E] focus:ring-[#1B7A6E]"
                />
                <span className="font-semibold">{formData.bannerActive ? 'ჩართულია' : 'გათიშულია'}</span>
              </label>
            </div>
            <input
              type="text"
              value={formData.bannerText}
              onChange={(e) => setFormData({ ...formData, bannerText: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm bg-white"
              placeholder="ბანერის ტექსტი"
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#2E3633] mb-1">
                ტელეფონის ნომერი (გამოსაჩენი)
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E3633] mb-1">
                ტელეფონი (დარეკვისთვის, ციფრები)
              </label>
              <input
                type="text"
                value={formData.phoneRaw}
                onChange={(e) => setFormData({ ...formData, phoneRaw: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E3633] mb-1">
                WhatsApp ნომერი
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E3633] mb-1">
                საწყისი ფასი
              </label>
              <input
                type="text"
                value={formData.startingPrice}
                onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E3633] mb-1">
                მისამართი
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E3633] mb-1">
                უბანი / ქალაქი
              </label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Socials & Domain */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#2E3633] mb-1">
                Instagram Username
              </label>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2E3633] mb-1">
                ვებ დომენი
              </label>
              <input
                type="text"
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#D9CEB8] text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-[#F0E8D8] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-2 text-xs text-gray-500 hover:text-red-600 rounded-lg hover:bg-gray-100 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>საწყისზე დაბრუნება</span>
              </button>

              <button
                type="button"
                onClick={exportJSON}
                className="px-3 py-2 text-xs text-[#1B7A6E] hover:bg-emerald-50 rounded-lg border border-emerald-200 flex items-center gap-1 font-semibold"
                title="ჩამოტვირთეთ კონფიგურაცია ფაილად"
              >
                <Download className="w-3.5 h-3.5" />
                <span>JSON ექსპორტი</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
              >
                დახურვა
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#1B7A6E] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#156056] shadow-sm flex items-center gap-1.5"
              >
                <Save className="w-4 h-4" />
                <span>შენახვა საიტზე</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
