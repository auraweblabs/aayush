import { MapPin, Clock, Car, ShieldCheck, Sparkles, Navigation, Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function LocationCard() {
  const serviceAreas = [
    "Cameron Park (2285)",
    "Edgeworth (2285)",
    "West Wallsend (2286)",
    "Minmi (2287)",
    "Fletcher (2287)",
    "Maryland (2287)",
    "Wallsend (2287)",
    "Lake Macquarie & Newcastle",
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Cameron Park Location & Sanctuary Info */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e5ece7] text-[#2a4336] text-xs font-semibold uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4 text-[#8c5a3c]" />
                <span>Cameron Park Wellness Sanctuary</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d24] tracking-tight mb-4">
                Visit Us in Cameron Park, NSW
              </h2>

              {/* Physical Street Address Box */}
              <div className="p-5 rounded-2xl bg-white border border-[#ccdcd1] retreat-shadow mb-6 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2a4336] text-[#cca058] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8c5a3c] block mb-0.5">
                    Studio Address
                  </span>
                  <p className="font-serif text-xl font-bold text-[#1b2d24]">
                    19 Turnock Drive, Cameron Park NSW 2285
                  </p>
                  <p className="text-xs text-[#426953] mt-0.5">
                    Quiet, serene residential sanctuary setting with free dedicated on-site parking.
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#345342] leading-relaxed mb-8">
                Located in a quiet and private residential sanctuary at 19 Turnock Drive, Cameron Park,
                Aayur Touch offers a tranquil escape from everyday noise. Dedicated to
                authentic Ayurvedic care in a pristine, warm environment.
              </p>

              {/* Service Suburbs Chips */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#71462d]">
                  Proudly Serving Local Clients Across:
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#2a4336] border border-[#ccdcd1] shadow-xs"
                    >
                      <MapPin className="w-3 h-3 text-[#cca058]" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Amenities / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#e5ece7]">
              <div className="p-4 rounded-2xl bg-white border border-[#e5ece7] retreat-shadow">
                <Car className="w-5 h-5 text-[#8c5a3c] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1b2d24] mb-1">Free Parking</h4>
                <p className="text-xs text-[#426953]">Effortless on-site parking at our quiet sanctuary</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#e5ece7] retreat-shadow">
                <ShieldCheck className="w-5 h-5 text-[#8c5a3c] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1b2d24] mb-1">Private & Clean</h4>
                <p className="text-xs text-[#426953]">Sanitized linen, warm heated room & shower access</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#e5ece7] retreat-shadow">
                <Clock className="w-5 h-5 text-[#8c5a3c] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1b2d24] mb-1">By Appointment</h4>
                <p className="text-xs text-[#426953]">Exclusive 1-on-1 focus with zero interruptions</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hours & Quick Booking Card */}
          <div className="lg:col-span-5 bg-[#1b2d24] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background gold accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-[#cca058]/15 to-transparent pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-[#2a4336] pb-4">
                <span className="font-serif text-2xl font-bold text-[#FBF9F5]">
                  Studio Hours
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2a4336] text-[#cca058] border border-[#cca058]/30">
                  Open 6 Days
                </span>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-[#2a4336]/60">
                  <span className="text-[#ccdcd1]">Monday – Friday</span>
                  <span className="font-semibold text-white">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a4336]/60">
                  <span className="text-[#ccdcd1]">Saturday</span>
                  <span className="font-semibold text-white">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#2a4336]/60">
                  <span className="text-[#ccdcd1]">Sunday</span>
                  <span className="font-semibold text-[#cca058]">By Prior Appointment</span>
                </div>
              </div>

              {/* Direct Booking Note */}
              <div className="p-4 rounded-2xl bg-[#2a4336]/60 border border-[#345342] text-xs text-[#e5ece7] leading-relaxed">
                <p className="font-bold text-[#cca058] mb-1">✨ Appointment Notice</p>
                <p>
                  To provide our clients with a tranquil, dedicated session, treatments are
                  booked exclusively via phone or WhatsApp. Same-day bookings available!
                </p>
              </div>
            </div>

            {/* Quick Action Trigger Buttons */}
            <div className="pt-8 space-y-3 relative z-10">
              <a
                href={SITE_CONFIG.telUrl}
                id="location-call-cta"
                data-conversion="call"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-sm sm:text-base bg-[#cca058] text-[#1b2d24] hover:bg-[#d8a25e] shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-[#1b2d24]" />
                <span>Call Now: {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-whatsapp-cta"
                data-conversion="whatsapp"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-sm sm:text-base bg-[#25D366] text-white hover:bg-[#20b859] shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
