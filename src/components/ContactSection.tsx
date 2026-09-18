import React, { useState } from 'react';
import { SiteConfig } from '../types';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Instagram, 
  Facebook, 
  Send, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ContactProps {
  config: SiteConfig;
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactProps> = ({ config, prefilledNotes = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    serviceInterest: 'ზოგადი დათვალიერება და კონსულტაცია',
    notes: prefilledNotes || ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Update notes if prefilled notes changes
  React.useEffect(() => {
    if (prefilledNotes) {
      setFormData(prev => ({ ...prev, notes: prefilledNotes }));
    }
  }, [prefilledNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Simulate direct instant booking message
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `გამარჯობა Royal Care! მსურს ვიზიტის დაჯავშნა:\nსახელი: ${formData.name || 'დაუზუსტებელი'}\nტელეფონი: ${formData.phone || 'დაუზუსტებელი'}\nთარიღი: ${formData.preferredDate || 'შეთანხმებით'}\nმომსახურება: ${formData.serviceInterest}\nდეტალები: ${formData.notes || 'არ არის'}`
    );
    window.open(`https://wa.me/${config.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5EFEB] border-t border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#145E55] text-xs font-semibold uppercase tracking-wider mb-3">
            კონტაქტი & ვიზიტი
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2623] mb-4 font-['Playfair_Display',serif]">
            დაგვიკავშირდით ან მობრძანდით დიღომი 8-ში
          </h2>
          <p className="text-[#4E5B55] text-base md:text-lg">
            ჩვენი კარები ყოველთვის ღიაა. შეგიძლიათ პირადად დაათვალიეროთ გარემო და გაიცნოთ პერსონალი.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Information & Map Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D7C5] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#1E2623] font-['Playfair_Display',serif] border-b border-[#F0E8D8] pb-4">
                საკონტაქტო რეკვიზიტები
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#1B7A6E] flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <MapPin className="w-5 h-5 text-[#C99726]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500">მისამართი</h4>
                  <p className="text-base font-bold text-[#1E2623] mt-0.5">
                    {config.city}, {config.district}, {config.address}
                  </p>
                  <p className="text-xs text-gray-500">საფოსტო ინდექსი: {config.postalCode}</p>
                </div>
              </div>

              {/* Phone & Hotline */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#1B7A6E] flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500">ცხელი ხაზი</h4>
                  <a
                    href={`tel:${config.phoneRaw}`}
                    className="text-lg font-bold text-[#1B7A6E] hover:underline block mt-0.5"
                  >
                    {config.phone}
                  </a>
                  <p className="text-xs text-gray-500">ზარები მიიღება ყოველდღე 24/7</p>
                </div>
              </div>

              {/* WhatsApp & Messaging */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#25D366] flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500">WhatsApp & Viber</h4>
                  <a
                    href={`https://wa.me/${config.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#25D366] hover:underline block mt-0.5"
                  >
                    +995 557 19 99 92 (სწრაფი ჩატი)
                  </a>
                  <p className="text-xs text-gray-500">მყისიერი პასუხი შეტყობინებებზე</p>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-purple-50 text-[#7E3E91] flex items-center justify-center flex-shrink-0 border border-purple-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500">მნახველების საათები</h4>
                  <p className="text-sm font-semibold text-[#1E2623] mt-0.5">
                    ყოველდღე: 10:00 – 20:00
                  </p>
                  <p className="text-xs text-gray-500">(მოსვენების საათი: 14:30 – 16:30)</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-[#F0E8D8] flex items-center gap-4">
                <span className="text-xs font-semibold text-gray-500">გამოგვყევით:</span>
                <a
                  href={`https://facebook.com/${config.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook (5.7K)</span>
                </a>
                <a
                  href={`https://instagram.com/${config.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 text-xs font-semibold hover:bg-pink-100 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@{config.instagram}</span>
                </a>
              </div>
            </div>

            {/* Map Preview Box */}
            <div className="bg-white rounded-3xl p-5 border border-[#E2D7C5] shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase text-[#145E55] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C99726]" />
                  ლოკაცია რუკაზე (დიღომი 8)
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('დიღომი 8, ნიკოლოზ ბერაძის 28, თბილისი')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1B7A6E] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Google Maps-ში გახსნა</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              <div className="rounded-2xl overflow-hidden border border-[#E8DFC9] bg-stone-100 h-48 relative flex items-center justify-center text-center p-4">
                {/* Visual stylised interactive map canvas */}
                <iframe
                  title="Royal Care Location"
                  className="w-full h-full border-0 absolute inset-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11905.827361819623!2d44.7570!3d41.7820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472c1c3f25d9f%3A0x89e81b67f1b74737!2sDigomi%208%2C%20Tbilisi!5e0!3m2!1sen!2sge!4v1700000000000"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Visit Booking Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D7C5] shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#1B7A6E]" />
                  <span className="text-xs font-bold text-[#7E3E91] uppercase tracking-wider">
                    უფასო გაცნობითი ვიზიტი
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1E2623] mb-2 font-['Playfair_Display',serif]">
                  დაჯავშნეთ ვიზიტი ან მოითხოვეთ ზარი
                </h3>
                <p className="text-sm text-[#525F59] mb-6">
                  შეავსეთ ფორმა და ჩვენი ადმინისტრატორი 15 წუთში დაგიკავშირდებათ დეტალების დასაზუსტებლად.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#1B7A6E] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-[#145E55]">მოთხოვნა წარმატებით გაიგზავნა!</h4>
                    <p className="text-xs sm:text-sm text-[#3E5048]">
                      მადლობა, {formData.name}. ჩვენი ადმინისტრატორი მალე დაგიკავშირდებათ ნომერზე: <strong>{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-4 py-2 rounded-xl bg-white border border-emerald-300 text-xs font-semibold text-[#145E55]"
                    >
                      ახალი მოთხოვნის გაგზავნა
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#2E3633] mb-1.5">
                        თქვენი სახელი და გვარი *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="მაგ: გიორგი ბერიძე"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D9CEB8] focus:border-[#1B7A6E] focus:ring-1 focus:ring-[#1B7A6E] outline-none text-sm bg-[#FAF6EE]/40"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#2E3633] mb-1.5">
                          ტელეფონის ნომერი *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="557 19 99 92"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#D9CEB8] focus:border-[#1B7A6E] focus:ring-1 focus:ring-[#1B7A6E] outline-none text-sm bg-[#FAF6EE]/40"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#2E3633] mb-1.5">
                          სასურველი თარიღი
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#D9CEB8] focus:border-[#1B7A6E] focus:ring-1 focus:ring-[#1B7A6E] outline-none text-sm bg-[#FAF6EE]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2E3633] mb-1.5">
                        რა ტიპის მოვლა გაინტერესებთ?
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D9CEB8] focus:border-[#1B7A6E] focus:ring-1 focus:ring-[#1B7A6E] outline-none text-sm bg-[#FAF6EE]/40"
                      >
                        <option>ზოგადი დათვალიერება და კონსულტაცია</option>
                        <option>24/7 სამედიცინო მეთვალყურეობა</option>
                        <option>დემენციისა და ალცჰაიმერის მოვლა</option>
                        <option>ოპერაციის შემდგომი რეაბილიტაცია</option>
                        <option>მწოლიარე პაციენტის სრული მოვლა</option>
                        <option>მოკლევადიანი (დროებითი) განთავსება</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2E3633] mb-1.5">
                        დამატებითი კომენტარი ან პაციენტის საჭიროება
                      </label>
                      <textarea
                        rows={3}
                        placeholder="მოგვიყევით პაციენტის ასაკისა და ჯანმრთელობის შესახებ..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D9CEB8] focus:border-[#1B7A6E] focus:ring-1 focus:ring-[#1B7A6E] outline-none text-sm bg-[#FAF6EE]/40 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="submit-contact-form-btn"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#1B7A6E] text-white font-semibold hover:bg-[#156056] shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>ვიზიტის დაჯავშნა</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Instant WhatsApp alternative */}
              <div className="pt-5 mt-6 border-t border-[#F0E8D8] text-center">
                <p className="text-xs text-gray-500 mb-2.5">ან მოგვწერეთ პირდაპირ მესენჯერში:</p>
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>პირდაპირ WhatsApp-ში დაკავშირება</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
