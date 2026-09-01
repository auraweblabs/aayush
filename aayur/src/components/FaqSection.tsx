"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#f4f7f5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccdcd1] text-[#1b2d24] text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4 text-[#8c5a3c]" />
            <span>GEO & Local Search FAQ</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d24] tracking-tight mb-6">
            Your Wellness Questions, Answered
          </h2>

          <p className="text-base sm:text-lg text-[#345342] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our certified Ayurvedic massage therapies,
            booking procedures, and private studio experience in Rutherford, NSW.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden retreat-shadow ${
                  isOpen ? "border-[#426953] ring-1 ring-[#426953]/20" : "border-[#e5ece7] hover:border-[#a5c3af]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#426953]"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1b2d24] leading-snug">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#2a4336] text-[#cca058] rotate-180"
                        : "bg-[#e5ece7] text-[#2a4336]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#345342] leading-relaxed border-t border-[#e5ece7]/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    
                    {idx === 1 && (
                      <div className="mt-4 flex flex-wrap items-center gap-3 pt-3 border-t border-[#e5ece7]">
                        <a
                          href={SITE_CONFIG.telUrl}
                          data-conversion="call"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#2a4336] text-white hover:bg-[#1b2d24] transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#cca058]" />
                          <span>Tap to Call: {SITE_CONFIG.phoneDisplay}</span>
                        </a>
                        <a
                          href={SITE_CONFIG.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-conversion="whatsapp"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-[#20b859] transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-white" />
                          <span>WhatsApp Now</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Question Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#eedecd]/40 border border-[#eedecd]">
          <p className="text-sm font-semibold text-[#71462d] mb-1">
            Have a specific health condition or question not listed here?
          </p>
          <p className="text-xs text-[#345342] mb-4">
            We are glad to discuss tailored treatment options and contraindications before your session.
          </p>
          <div className="inline-flex items-center gap-4 text-xs font-bold">
            <a
              href={SITE_CONFIG.telUrl}
              className="text-[#2a4336] hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c5a3c]" /> Direct Call: {SITE_CONFIG.phoneDisplay}
            </a>
            <span className="text-[#8c5a3c]">•</span>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20b859] hover:underline flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#20b859]" /> Quick WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
