import React, { useState } from 'react';
import { X, Globe, Server, Search, CheckCircle, ExternalLink, HelpCircle, Layers } from 'lucide-react';

interface HostingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingGuideModal: React.FC<HostingGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'hosting' | 'domain' | 'google' | 'admin'>('hosting');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2D7C5] max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100"
          aria-label="დახურვა"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#C99726] flex items-center justify-center font-bold">
            📘
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E2623] font-['Playfair_Display',serif]">
              გზამკვლევი: ჰოსტინგი, royalcare.ge დომენი & Google
            </h2>
            <p className="text-xs text-[#5E6D66]">
              დეტალური ნაბიჯ-ნაბიჯ ინსტრუქცია თქვენი საიტის გასაშვებად და სამართავად.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#E8DFC9] pb-3 mb-6">
          {[
            { id: 'hosting', label: '1. ჰოსტინგზე განთავსება', icon: Server },
            { id: 'domain', label: '2. royalcare.ge დომენი', icon: Globe },
            { id: 'google', label: '3. Google-ში გამოჩენა & SEO', icon: Search },
            { id: 'admin', label: '4. როგორ ვმართო ცვლილებები', icon: Layers },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1B7A6E] text-white shadow-xs'
                    : 'bg-[#FAF6EE] text-[#333] hover:bg-[#F0E8D8]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content per Tab */}
        <div className="space-y-4 text-sm text-[#38433E] leading-relaxed">
          {activeTab === 'hosting' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <h3 className="font-bold text-[#145E55] mb-1">რა არის საუკეთესო და უფასო ვარიანტი?</h3>
                <p className="text-xs text-[#2A6157]">
                  ეს საიტი აგებულია თანამედროვე React + Vite ტექნოლოგიით. ის მუშაობს ელვისებურად სწრაფად და <strong>ჰოსტინგისთვის არ გჭირდებათ თვეში ზედმეტი თანხის გადახდა!</strong>
                </p>
              </div>

              <h4 className="font-bold text-[#1E2623] text-base">ნაბიჯი 1: საიტის ექსპორტი AI Studio-დან</h4>
              <p className="text-xs">
                მარჯვენა ზედა კუთხეში მენიუდან (ან Share/Deploy ღილაკიდან) აირჩიეთ <strong>Export to GitHub</strong> ან <strong>Download ZIP</strong>.
              </p>

              <h4 className="font-bold text-[#1E2623] text-base">ნაბიჯი 2: ჰოსტინგის არჩევა</h4>
              <ul className="space-y-2 text-xs">
                <li className="p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DFC9]">
                  <strong>ვარიანტი A (რეკომენდებული — Vercel / Netlify):</strong> დარეგისტრირდით vercel.com ან netlify.com-ზე (სრულიად უფასოა). მიაბით თქვენი GitHub რეპოზიტორია და საიტი 30 წამში გაეშვება მსოფლიო CDN სერვერებზე.
                </li>
                <li className="p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DFC9]">
                  <strong>ვარიანტი B (ქართული სერვერები — Serv.ge / Proservice.ge):</strong> თუ გსურთ ქართულ ჰოსტინგზე განთავსება cPanel-ით, გაუშვით ბრძანება <code className="bg-white px-1.5 py-0.5 rounded border">npm run build</code> და მიღებული <code className="bg-white px-1.5 py-0.5 rounded border">dist</code> საქაღალდის შიგთავსი უბრალოდ ატვირთეთ <code className="bg-white px-1.5 py-0.5 rounded border">public_html</code>-ში.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'domain' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-[#542461]">
                <h3 className="font-bold mb-1">დომენი: royalcare.ge</h3>
                <p className="text-xs">
                  ძველი tavshesapari.ge გათიშულია, ხოლო ახალი royalcare.ge იდეალური, პრესტიჟული და მოკლე სახელია!
                </p>
              </div>

              <h4 className="font-bold text-[#1E2623] text-base">როგორ ვიყიდოთ და მივაბათ .GE დომენი:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-xs">
                <li>
                  შედით ოფიციალურ ქართულ რეგისტრატორთან (მაგ: <strong>registration.ge</strong> ან <strong>caucasus.net</strong> / <strong>serv.ge</strong>) და შეიძინეთ დომენი <strong>royalcare.ge</strong> (ღირებულება: ~30-35 ლარი წელიწადში).
                </li>
                <li>
                  ჰოსტინგის პარამეტრებში (მაგ. Vercel-ში ან cPanel-ში) დააჭირეთ <strong>Add Custom Domain</strong> და ჩაწერეთ <code className="bg-stone-100 px-1 py-0.5 rounded">royalcare.ge</code>.
                </li>
                <li>
                  დომენის მართვის პანელში (DNS) ჩაამატეთ ჰოსტინგის მოცემული <strong>A Record</strong> (IP მისამართი) და <strong>CNAME</strong> ჩანაწერი <code className="bg-stone-100 px-1 py-0.5 rounded">www</code>-სთვის.
                </li>
                <li>
                  SSL სერტიფიკატი (HTTPS - უსაფრთხოების ბოქლომი) Vercel-სა და Netlify-ზე ავტომატურად და უფასოდ ერთდება!
                </li>
              </ol>
            </div>
          )}

          {activeTab === 'google' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-[#785708]">
                <h3 className="font-bold mb-1">ადვილია თუ არა AI საიტის Google-ში გამოჩენა?</h3>
                <p className="text-xs">
                  <strong>დიახ, სრულიად ადვილია!</strong> Google-სთვის მნიშვნელობა არ აქვს საიტის კოდი ხელოვნურმა ინტელექტმა დაწერა თუ ადამიანმა — Google აფასებს <strong>სისწრაფეს, ტექსტის შინაარსს და მომხმარებლისთვის სარგებელს</strong>.
                </p>
              </div>

              <h4 className="font-bold text-[#1E2623] text-base">ყველაზე მნიშვნელოვანი 3 ნაბიჯი:</h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFC9]">
                  <div className="font-bold text-[#1B7A6E]">1. Google Business Profile (რუკაზე დამატება) — #1 პრიორიტეტი!</div>
                  <p className="text-gray-600 mt-1">
                    დაამატეთ ორგანიზაცია: <strong>"Royal Care - მოხუცთა პანსიონატი"</strong> Google Maps-ზე მისამართით (დიღომი 8, ნიკოლოზ ბერაძის 28, ტელ: 557 19 99 92). როცა ხალხი გუგლში მოძებნის "მოხუცთა თავშესაფარი თბილისი", თქვენი საიტი და რუკა მაშინვე გამოჩნდება პირველ გვერდზე!
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E8DFC9]">
                  <div className="font-bold text-[#1B7A6E]">2. Google Search Console</div>
                  <p className="text-gray-600 mt-1">
                    შეიყვანეთ royalcare.ge საიტზე search.google.com/search-console და მოითხოვეთ ინდექსაცია. Google თქვენს საიტს რამდენიმე დღეში შეიყვანს ძიების შედეგებში.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E8DFC9]">
                  <div className="font-bold text-[#1B7A6E]">3. სწრაფი ჩატვირთვა & ქართული მეტა-ტეგები</div>
                  <p className="text-gray-600 mt-1">
                    ამ საიტში უკვე ჩაშენებულია ყველა საჭირო ქართული SEO მეტა-თეგი, სათაური და აღწერა, რაც გუგლს უადვილებს შინაარსის გაგებას.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#145E55]">
                <h3 className="font-bold mb-1">ცვლილებებს თქვენ თავად შეიტანთ თუ AI-ს უნდა დაუწეროთ?</h3>
                <p className="text-xs">
                  ორივე გზა სრულიად შესაძლებელია და გააჩნია ცვლილების სირთულეს:
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-[#E8DFC9]">
                  <h4 className="font-bold text-[#1E2623] mb-1">გზა 1: საიტის შიდა "ადმინ პანელიდან" (თქვენ თვითონ)</h4>
                  <p className="text-gray-600 leading-relaxed">
                    მარჯვენა ზედა კუთხეში დააჭირეთ <strong>"ადმინი"</strong> ღილაკს. იქიდან შეგიძლიათ პროგრამირების გარეშე წამებში შეცვალოთ ტელეფონის ნომერი, WhatsApp, მისამართი, ფასები, ან ჩართოთ აქციის ბანერი. ცვლილება მაშინვე აისახება.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8DFC9]">
                  <h4 className="font-bold text-[#1E2623] mb-1">გზა 2: ჩემთვის (AI-სთვის) დაწერა ჩატში</h4>
                  <p className="text-gray-600 leading-relaxed">
                    თუ გსურთ ახალი სექციის დამატება, ახალი ოთახის ტიპის შექმნა, დიზაინის შეცვლა ან ახალი ფუნქციის ჩამატება — უბრალოდ მომწერეთ ქართულად (მაგ: "დაამატე ახალი ოთახი", "შეცვალე ფერები") და მე წამებში განვაახლებ მთელ საიტს!
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8DFC9]">
                  <h4 className="font-bold text-[#1E2623] mb-1">გზა 3: WordPress-ზე გადატანა (თუ გჭირდებათ სტანდარტული WP ადმინკა)</h4>
                  <p className="text-gray-600 leading-relaxed">
                    თუ მომავალში დაგჭირდებათ რთული ბლოგი ან ათობით თანამშრომლის როლები, საიტი მარტივად შეიძლება დაკავშირდეს Headless CMS-თან (მაგ. Strapi / Sanity) ან აიწყოს WordPress-ზე, თუმცა ამჟამინდელი ვერსია ბევრად უფრო სწრაფი და დაცულია.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#F0E8D8] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#1B7A6E] text-white font-semibold text-xs sm:text-sm hover:bg-[#156056] transition-colors"
          >
            გასაგებია, მადლობა!
          </button>
        </div>
      </div>
    </div>
  );
};
