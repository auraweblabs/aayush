import Image from "next/image";
import { Phone, MessageSquare, ShieldCheck, Sparkles, Star, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1b2d24]">
      {/* High-Resolution Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Authentic Ayurvedic Massage Sanctuary in Rutherford NSW"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
        />
        {/* Serene Retreat Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2d24] via-[#1b2d24]/65 to-[#1b2d24]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1b2d24]/30 to-[#1b2d24]/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Authority & Location Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a4336]/80 backdrop-blur-md border border-[#cca058]/40 text-[#e0b06b] text-xs sm:text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-3">
          <Sparkles className="w-4 h-4 text-[#e0b06b]" />
          <span>Certified Ayurvedic Practitioner • Rutherford, NSW 2320</span>
        </div>

        {/* H1 Primary Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FBF9F5] leading-[1.15] mb-6 text-balance">
          Authentic Ayurvedic Massage <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e0b06b] via-[#f5efe7] to-[#cca058]">
            in Rutherford, NSW
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#e5ece7] font-light leading-relaxed mb-10 text-balance">
          Personalised, certified massage therapies expertly designed to relax,
          rejuvenate, and restore your body and mind.
        </p>

        {/* Dual Primary Call-Focused CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
          {/* Tap to Call Primary Button */}
          <a
            href={SITE_CONFIG.telUrl}
            id="hero-call-cta"
            data-conversion="call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-bold bg-gradient-to-r from-[#cca058] to-[#e0b06b] text-[#1b2d24] hover:from-[#d8a25e] hover:to-[#ebbe7f] shadow-lg shadow-[#cca058]/20 hover:scale-[1.03] active:scale-[0.98] transition-all group"
            title={`Call Aayur Touch at ${SITE_CONFIG.phoneDisplay}`}
          >
            <div className="w-8 h-8 rounded-full bg-[#1b2d24]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-[#1b2d24] fill-[#1b2d24]/20" />
            </div>
            <span>Tap to Call: {SITE_CONFIG.phoneDisplay}</span>
          </a>

          {/* WhatsApp Secondary Button */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            data-conversion="whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-bold bg-[#25D366] text-white hover:bg-[#20b859] shadow-lg shadow-[#25D366]/20 hover:scale-[1.03] active:scale-[0.98] transition-all group"
            title="Book via WhatsApp"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5 fill-white text-white" />
            </div>
            <span>Book via WhatsApp</span>
          </a>
        </div>

        {/* Live Trust Badges & Local Availability */}
        <div className="pt-8 border-t border-[#2a4336]/80 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-center gap-3 bg-[#2a4336]/40 backdrop-blur-sm px-3 py-2.5 rounded-xl border border-[#345342]/60">
            <ShieldCheck className="w-5 h-5 text-[#cca058] shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-[#FBF9F5]">100% Certified</p>
              <p className="text-[#ccdcd1]">Whole Body & Relaxation</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#2a4336]/40 backdrop-blur-sm px-3 py-2.5 rounded-xl border border-[#345342]/60">
            <Sparkles className="w-5 h-5 text-[#cca058] shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-[#FBF9F5]">Pure Herbal Oils</p>
              <p className="text-[#ccdcd1]">Customized to Your Dosha</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center gap-3 bg-[#2a4336]/40 backdrop-blur-sm px-3 py-2.5 rounded-xl border border-[#345342]/60">
            <MapPin className="w-5 h-5 text-[#cca058] shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-[#FBF9F5]">Rutherford, NSW</p>
              <p className="text-[#ccdcd1]">Quiet Private Sanctuary</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-10 bg-[#FBF9F5] clip-top-curve" />
    </section>
  );
}
