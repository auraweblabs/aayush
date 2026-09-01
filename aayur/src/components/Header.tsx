"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, Sparkles, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-[#1b2d24] text-[#e5ece7] text-xs sm:text-sm py-2 px-4 border-b border-[#2a4336]/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-[#cca058] animate-pulse shrink-0" />
            <span className="font-medium text-cream-50 truncate">
              🌿 Certified Ayurvedic Massage in Rutherford, NSW • Mon–Sat By Appointment
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-[#ccdcd1] shrink-0">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cca058]" /> Certified Practitioner
            </span>
            <span>•</span>
            <span>Serving Rutherford & Maitland</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "glass-nav retreat-shadow py-3.5 border-b border-[#e5ece7]"
          : "bg-[#FBF9F5]/95 py-5 border-b border-[#e5ece7]/60"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#345342] rounded-lg"
            aria-label="Aayur Touch Ayurvedic Massage Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 shadow-md border-2 border-[#cca058] bg-white group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/AAYUR-TOUCH-web sqr.webp"
                alt="Aayur Touch Ayurvedic Massage Logo"
                fill
                sizes="(max-width: 640px) 48px, 56px"
                priority
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1b2d24] leading-tight group-hover:text-[#345342] transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#71462d] font-semibold">
                Ayurvedic Massage • Rutherford
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-[#2a4336] hover:text-[#71462d] transition-colors"
            >
              Treatments
            </Link>
            <Link
              href="#meet-owner"
              className="text-sm font-medium text-[#2a4336] hover:text-[#71462d] transition-colors"
            >
              Meet Therapist
            </Link>
            <Link
              href="#philosophy"
              className="text-sm font-medium text-[#2a4336] hover:text-[#71462d] transition-colors"
            >
              The Experience
            </Link>
            <Link
              href="#faqs"
              className="text-sm font-medium text-[#2a4336] hover:text-[#71462d] transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-[#2a4336] hover:text-[#71462d] transition-colors"
            >
              Location & Hours
            </Link>
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Call Now Button */}
            <a
              href={SITE_CONFIG.telUrl}
              id="header-call-btn"
              data-conversion="call"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#2a4336] text-[#FBF9F5] hover:bg-[#1b2d24] transition-all hover:scale-[1.02] shadow-sm active:scale-[0.98] border border-[#345342]"
              title={`Call Aayur Touch at ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#e0b06b]" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Us Button */}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              data-conversion="whatsapp"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20b859] transition-all hover:scale-[1.02] shadow-sm active:scale-[0.98]"
              title="Chat with Aayur Touch on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2a4336] hover:bg-[#e5ece7] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF9F5] border-b border-[#ccdcd1] px-4 pt-4 pb-6 mt-3 space-y-4 shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3">
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#2a4336] hover:bg-[#e5ece7] rounded-md transition-colors"
              >
                Treatments & Services
              </Link>
              <Link
                href="#meet-owner"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#2a4336] hover:bg-[#e5ece7] rounded-md transition-colors"
              >
                Meet Your Therapist (Vinu Thomas)
              </Link>
              <Link
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#2a4336] hover:bg-[#e5ece7] rounded-md transition-colors"
              >
                The Experience & Oils
              </Link>
              <Link
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#2a4336] hover:bg-[#e5ece7] rounded-md transition-colors"
              >
                Wellness FAQs
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#2a4336] hover:bg-[#e5ece7] rounded-md transition-colors"
              >
                Rutherford Location & Contact
              </Link>
            </nav>

            <div className="pt-3 border-t border-[#ccdcd1] grid grid-cols-2 gap-2">
              <a
                href={SITE_CONFIG.telUrl}
                data-conversion="call"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#2a4336] text-white text-sm font-semibold shadow"
              >
                <Phone className="w-4 h-4 text-[#cca058]" />
                <span>Call Now</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-conversion="whatsapp"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold shadow"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
