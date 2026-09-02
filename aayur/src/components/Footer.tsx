import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, Mail, MapPin, Sparkles, ShieldCheck, Heart, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#14221b] text-[#e5ece7] pt-20 pb-32 sm:pb-20 border-t border-[#2a4336] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#cca058]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Call-To-Action Banner */}
        <div className="bg-gradient-to-br from-[#1b2d24] to-[#2a4336] rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto mb-20 border border-[#345342] shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cca058]/20 text-[#cca058] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Private Ayurvedic Sessions in Cameron Park</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FBF9F5] tracking-tight mb-6">
            Ready to Relax, Rejuvenate, and Restore?
          </h2>

          <p className="text-base sm:text-lg text-[#ccdcd1] max-w-2xl mx-auto mb-10 leading-relaxed">
            Personalised massage sessions are available by appointment. Contact Aayur Touch
            today to experience premium Ayurvedic massage in Cameron Park, NSW.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.telUrl}
              id="footer-call-cta"
              data-conversion="call"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base sm:text-lg bg-[#cca058] text-[#1b2d24] hover:bg-[#d8a25e] shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#1b2d24]" />
              <span>Tap to Call: {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-cta"
              data-conversion="whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base sm:text-lg bg-[#25D366] text-white hover:bg-[#20b859] shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation & Business Details Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2a4336]">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/images/AAYUR-TOUCH-web sqr.webp"
                alt="Aayur Touch Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-contain bg-white p-0.5 shadow-md border border-[#cca058]/30 group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-2xl font-bold text-[#FBF9F5]">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#ccdcd1] leading-relaxed">
              Authentic, certified Ayurvedic massage therapies rooted in ancient holistic healing traditions, located at 19 Turnock Drive, Cameron Park NSW.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#cca058] font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified in Whole Body & Relaxation</span>
            </div>
          </div>

          {/* Quick Treatment Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#FBF9F5]">
              Core Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#ccdcd1]">
              {SITE_CONFIG.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`#${service.id}`}
                    className="hover:text-[#cca058] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#FBF9F5]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#ccdcd1]">
              <li>
                <a
                  href={SITE_CONFIG.telUrl}
                  className="flex items-center gap-2.5 hover:text-[#cca058] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#cca058] shrink-0" />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#25D366] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>WhatsApp Message</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2.5 hover:text-[#cca058] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#cca058] shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#cca058] shrink-0 mt-0.5" />
                <span>19 Turnock Drive, Cameron Park NSW 2285</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#FBF9F5]">
              Sanctuary Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#ccdcd1]">
              <p>
                <span className="text-white block font-medium">Mon – Fri:</span>
                9:00 AM – 7:00 PM
              </p>
              <p>
                <span className="text-white block font-medium">Saturday:</span>
                9:00 AM – 5:00 PM
              </p>
              <p>
                <span className="text-[#cca058] block font-medium">Sunday:</span>
                By Appointment Only
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Local Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ccdcd1]/70">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved. 19 Turnock Drive, Cameron Park NSW 2285.
          </p>
          <div className="flex items-center gap-6">
            <span>Holistic Ayurvedic Wellness</span>
            <span>•</span>
            <a href="#services" className="hover:text-[#cca058]">Services</a>
            <span>•</span>
            <a href="#faqs" className="hover:text-[#cca058]">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
