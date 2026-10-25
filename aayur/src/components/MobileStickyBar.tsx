"use client";

import { Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function MobileStickyBar() {
  return (
    <aside
      aria-label="Quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1b2d24]/95 backdrop-blur-lg border-t border-[#345342] p-3 md:hidden shadow-2xl safe-area-bottom"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call CTA Button */}
        <a
          href={SITE_CONFIG.telUrl}
          id="mobile-bottom-call-btn"
          data-conversion="call"
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-gradient-to-r from-[#cca058] to-[#e0b06b] text-[#1b2d24] font-bold text-sm shadow-md active:scale-95 transition-transform"
          title={`Call Aayur Touch at ${SITE_CONFIG.phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-[#1b2d24] fill-[#1b2d24]/20" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp CTA Button */}
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp-btn"
          data-conversion="whatsapp"
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md active:scale-95 transition-transform"
          title="WhatsApp Aayur Touch"
        >
          <MessageSquare className="w-4 h-4 fill-white text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
