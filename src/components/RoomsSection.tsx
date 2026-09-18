import React, { useState } from 'react';
import { RoomItem } from '../types';
import { Check, Users, Eye, Sparkles } from 'lucide-react';

interface RoomsProps {
  rooms: RoomItem[];
  onSelectRoomForBooking: (roomTitle: string) => void;
}

export const RoomsSection: React.FC<RoomsProps> = ({ rooms, onSelectRoomForBooking }) => {
  const [activeRoomId, setActiveRoomId] = useState(rooms[0]?.id || 'single-vip');

  const activeRoom = rooms.find(r => r.id === activeRoomId) || rooms[0];

  return (
    <section id="rooms" className="py-16 md:py-24 bg-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#966E10] text-xs font-semibold uppercase tracking-wider mb-3">
            საცხოვრებელი პირობები
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2623] mb-4 font-['Playfair_Display',serif]">
            მყუდრო და ადაპტირებული ოთახები
          </h2>
          <p className="text-[#4E5B55] text-base md:text-lg">
            სუფთა, ნათელი და უსაფრთხო გარემო, რომელიც მაქსიმალურად არის მორგებული ასაკოვანი ადამიანების კომფორტს.
          </p>
        </div>

        {/* Room Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomId(room.id)}
              className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center gap-2 border ${
                activeRoomId === room.id
                  ? 'bg-[#1B7A6E] text-white border-[#1B7A6E] shadow-md scale-102'
                  : 'bg-white text-[#2E3633] border-[#E2D7C5] hover:bg-[#F5EFEB]'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{room.title}</span>
              {room.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeRoomId === room.id ? 'bg-emerald-900/50 text-amber-200' : 'bg-purple-100 text-[#7E3E91]'
                }`}>
                  {room.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Room Detailed Showcase Card */}
        {activeRoom && (
          <div className="bg-white rounded-3xl border border-[#E2D7C5] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Room Photo & Badge */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto">
              <img
                src={activeRoom.image}
                alt={activeRoom.title}
                className="w-full h-full object-cover min-h-[320px] lg:min-h-[460px]"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#145E55] shadow-sm flex items-center gap-1.5 border border-[#E8DFC9]">
                <Sparkles className="w-3.5 h-3.5 text-[#C99726]" />
                {activeRoom.capacity}
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white p-3 rounded-2xl text-xs sm:text-sm">
                📌 ყველა ოთახი აღჭურვილია სამედიცინო მრავალფუნქციური საწოლებით და SOS ღილაკით.
              </div>
            </div>

            {/* Room Specs & Amenities */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7E3E91]">
                    {activeRoom.badge}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-[#966E10] rounded-lg border border-amber-200">
                    {activeRoom.priceNote}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2623] mb-3 font-['Playfair_Display',serif]">
                  {activeRoom.title}
                </h3>

                <p className="text-sm sm:text-base text-[#4E5B55] mb-6 leading-relaxed">
                  {activeRoom.description}
                </p>

                <h4 className="text-sm font-bold text-[#1E2623] mb-3 uppercase tracking-wide text-emerald-900">
                  ოთახის აღჭურვილობა და უპირატესობები:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {activeRoom.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#38433E]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#1B7A6E] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#F0E8D8] flex flex-col sm:flex-row items-center gap-3">
                <button
                  id={`book-room-${activeRoom.id}`}
                  onClick={() => onSelectRoomForBooking(activeRoom.title)}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#1B7A6E] text-white font-semibold text-center hover:bg-[#156056] shadow-sm transition-all"
                >
                  ამ ოთახის დაჯავშნა / დათვალიერება
                </button>
                <a
                  href="#contact"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-[#C99726] text-[#7A5B0B] bg-amber-50 hover:bg-amber-100 font-semibold text-xs sm:text-sm text-center transition-colors"
                >
                  დაგვიკავშირდით დეტალებისთვის
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
