import { ShieldCheck, Award, HeartHandshake, Sparkles, CheckCircle2, Leaf, Clock, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function TrustAuthority() {
  return (
    <section id="certified-care" className="py-16 sm:py-24 bg-[#FBF9F5] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e5ece7]/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#eedecd]/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e5ece7] text-[#2a4336] text-xs font-semibold uppercase tracking-widest mb-4">
            <Award className="w-4 h-4 text-[#8c5a3c]" />
            <span>Professional Accreditation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d24] tracking-tight mb-6">
            Certified Care for Your Well-being
          </h2>

          <p className="text-base sm:text-lg text-[#345342] leading-relaxed font-normal">
            At Aayur Touch, you receive expert, tailored care from a practitioner
            fully certified in Whole Body Massage and Relaxation Massage. We bring
            the ancient healing traditions of Ayurveda to the Rutherford community
            in a professional, serene environment.
          </p>
        </div>

        {/* 4 Trust & Certification Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SITE_CONFIG.certifications.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#e5ece7] retreat-shadow hover:border-[#a5c3af] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e5ece7] text-[#2a4336] flex items-center justify-center mb-5 group-hover:bg-[#2a4336] group-hover:text-[#cca058] transition-colors shadow-sm">
                {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                {idx === 1 && <Award className="w-6 h-6" />}
                {idx === 2 && <Leaf className="w-6 h-6" />}
                {idx === 3 && <MapPin className="w-6 h-6" />}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#1b2d24] mb-2.5 group-hover:text-[#2a4336] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#426953] leading-relaxed mt-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Practitioner Authority Banner Strip */}
        <div className="bg-gradient-to-r from-[#2a4336] to-[#1b2d24] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient from-[#cca058]/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#cca058]">
                <Sparkles className="w-4 h-4" />
                <span>Rutherford Wellness Promise</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF9F5]">
                Tailored Ayurvedic Touch, Rooted in Tradition
              </h3>
              <p className="text-sm sm:text-base text-[#ccdcd1] leading-relaxed">
                Every massage session is uniquely adapted to your physical comfort,
                postural requirements, and personal stress points using heated,
                artisan-prepared Ayurvedic medicated oils.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href={SITE_CONFIG.telUrl}
                data-conversion="call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#cca058] text-[#1b2d24] hover:bg-[#d8a25e] shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Speak with Practitioner</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-conversion="whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
              >
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
