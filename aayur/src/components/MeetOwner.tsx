"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck, X, ZoomIn, MessageSquare, Calendar, GraduationCap } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function MeetOwner() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section id="meet-owner" className="py-20 sm:py-28 bg-[#FBF9F5] relative overflow-hidden border-t border-[#e5ece7]">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ccdcd1]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#eedecd]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Two-Column Layout: Left (Bio & Photo) | Right (Certificate) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Heading, Bio & Professional Portrait */}
            <div className="lg:col-span-6 space-y-6">
              {/* Text & Header at Top of Left Column */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e5ece7] text-[#2a4336] text-xs font-semibold uppercase tracking-widest mb-1 border border-[#ccdcd1]">
                  <Award className="w-4 h-4 text-[#8c5a3c]" />
                  <span>Practitioner Accreditation & Care</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d24] tracking-tight leading-tight">
                  Meet Your Therapist
                </h2>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#71462d] leading-snug">
                  Vinu Thomas – Owner & Certified Massage Practitioner
                </h3>

                <p className="text-base sm:text-lg text-[#345342] leading-relaxed pt-1">
                  Experience dedicated care with Vinu Thomas, a highly trained professional who
                  successfully completed his accredited training through <strong>Discover Massage Australia</strong>.
                  Awarded the <strong>Certificate in Whole Body Massage on March 27, 2022</strong>,
                  Vinu brings a wealth of specialized knowledge to his Cameron Park clinic.
                </p>
              </div>

              {/* Vinu Thomas Image Just Below */}
              <div className="relative h-[440px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#e5ece7] group bg-[#e5ece7]">
                <Image
                  src="/images/vinuthomas26.webp"
                  alt="Vinu Thomas - Certified Ayurvedic Massage Practitioner and Owner of Aayur Touch Cameron Park"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
                  priority
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2d24]/85 via-transparent to-transparent" />

                {/* Floating Credential Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e5ece7] retreat-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#2a4336] text-[#cca058] flex items-center justify-center shrink-0 shadow">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-base text-[#1b2d24] leading-tight">Vinu Thomas</p>
                      <p className="text-xs text-[#71462d] font-semibold">Discover Massage Australia Accredited</p>
                      <p className="text-[11px] text-[#426953]">Awarded March 27, 2022 • Whole Body Massage</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Booking Hook */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#f4f7f5] border border-[#ccdcd1] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8c5a3c] block">
                    Book Directly with Vinu
                  </span>
                  <span className="text-xs text-[#345342]">
                    Dedicated 1-on-1 personalized sessions in Cameron Park
                  </span>
                </div>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-conversion="whatsapp"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-[#20b859] shadow-sm transition-transform hover:scale-105 shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Vinu</span>
                </a>
              </div>
            </div>

            {/* Right Column: ONLY Qualification Certificate Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#e5ece7] retreat-shadow space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#8c5a3c]" />
                    <span className="font-serif font-bold text-lg sm:text-xl text-[#1b2d24]">
                      Verified Qualification Certificate
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#cca058] bg-[#1b2d24] px-3.5 py-1.5 rounded-full shadow-sm">
                    <Award className="w-4 h-4 text-[#cca058]" />
                    <span>Accredited #19795</span>
                  </span>
                </div>

                {/* Certificate Thumbnail with Proper Aspect Ratio (Portrait A4) */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative w-full aspect-[995/1383] min-h-[480px] sm:min-h-[560px] rounded-2xl overflow-hidden border border-[#ccdcd1] cursor-pointer group shadow-sm bg-[#faf8f4] mx-auto flex items-center justify-center"
                >
                  <Image
                    src="/images/course_certificate_19795.webp"
                    alt="Certificate in Whole Body Massage awarded to Vinu Thomas by Discover Massage Australia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                    priority
                  />

                  {/* Overlay Hover Prompt */}
                  <div className="absolute inset-0 bg-[#1b2d24]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-[1px]">
                    <div className="bg-[#1b2d24]/90 text-[#FBF9F5] px-4 py-2 rounded-full border border-[#cca058]/50 flex items-center gap-2 shadow-lg">
                      <ZoomIn className="w-4 h-4 text-[#cca058]" />
                      <span>Click to Enlarge Full Certificate</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#1b2d24]/90 text-[#cca058] text-[11px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-[#cca058]/30 flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Tap to Inspect</span>
                  </div>
                </div>

                {/* Trust Badges Footer Under Certificate */}
                <div className="pt-3 border-t border-[#e5ece7] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#2a4336] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#cca058]" />
                    <span>Platinum Training Provider</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2a4336] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#cca058]" />
                    <span>Nationally Recognised Training</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#71462d] font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#8c5a3c]" />
                    <span>Issued: March 27, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal for Certificate Verification */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-[#cca058]/40 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#e5ece7] pb-3">
              <div>
                <h4 className="font-serif font-bold text-xl text-[#1b2d24]">
                  Discover Massage Australia – Whole Body Massage
                </h4>
                <p className="text-xs text-[#71462d]">
                  Awarded to Vinu Thomas • Issued March 27, 2022 • Platinum Training Provider
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-full bg-[#f4f7f5] hover:bg-[#e5ece7] text-[#1b2d24] transition-colors focus:outline-none"
                aria-label="Close certificate modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* High Resolution Image Preview */}
            <div className="relative h-[65vh] w-full rounded-2xl overflow-hidden border border-[#ccdcd1] bg-[#faf8f4]">
              <Image
                src="/images/course_certificate_19795.webp"
                alt="Discover Massage Australia Certificate in Whole Body Massage for Vinu Thomas"
                fill
                sizes="100vw"
                className="object-contain p-2"
              />
            </div>

            {/* Modal Footer with Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs">
              <div className="flex items-center gap-4 text-[#426953]">
                <span>✅ Discover Massage Australia</span>
                <span>•</span>
                <span>Nationally Recognised Training</span>
                <span>•</span>
                <span>Certificate #19795</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="px-5 py-2 rounded-full font-bold bg-[#2a4336] text-white hover:bg-[#1b2d24] transition-colors text-xs"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
