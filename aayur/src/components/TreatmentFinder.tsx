"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Droplets, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function TreatmentFinder() {
  const [selectedGoal, setSelectedGoal] = useState<string>("desk-stress");

  const symptoms = [
    {
      id: "desk-stress",
      label: "Desk Fatigue & Neck Stiffness",
      recommendedServiceId: "seated-head-neck-shoulder",
      recommendedTitle: "Seated Head, Neck & Shoulder Massage",
      duration: "30 – 45 Min",
      oil: "Warm Brahmi & Rosemary Infusion",
      description: "Targets upper trapezius knots, suboccipital stiffness, and cervical strain from prolonged computer work and daily posture fatigue.",
    },
    {
      id: "headaches",
      label: "Tension Headaches & Migraines",
      recommendedServiceId: "headache-treatment",
      recommendedTitle: "Headache Treatment (Marma Relief)",
      duration: "45 Min",
      oil: "Cooling Ksheerabala & Peppermint Oil",
      description: "Delicate marma point pressure and cranial herbal oil therapy designed to alleviate throbbing temple pressure and stress-induced migraines naturally.",
    },
    {
      id: "anxiety-sleep",
      label: "Burnout, Stress & Restlessness",
      recommendedServiceId: "relaxation-massage",
      recommendedTitle: "Restorative Relaxation Massage",
      duration: "60 – 75 Min",
      oil: "Warm Bala Ashwagandha & Lavender",
      description: "Calms sympathetic nervous system overload, lowers cortisol levels, and induces restorative deep sleep states with rhythmic flowing strokes.",
    },
    {
      id: "whole-body-fatigue",
      label: "Full Body Sluggishness & Aches",
      recommendedServiceId: "whole-body-massage",
      recommendedTitle: "Whole Body Abhyanga Massage",
      duration: "60 – 90 Min",
      oil: "Mahanarayana & Dhanwantharam Formulation",
      description: "Traditional full-body rhythmic warm oil massage to stimulate lymphatic detox, enhance blood circulation, and balance your vital doshas.",
    },
  ];

  const currentRecommendation = symptoms.find((s) => s.id === selectedGoal) || symptoms[0];
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello Aayur Touch, based on your treatment finder, I would like to book a "${currentRecommendation.recommendedTitle}" session in Rutherford.`
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-[#e5ece7]">
      {/* Ambient background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-10 w-80 h-80 bg-[#e5ece7]/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-10 w-80 h-80 bg-[#eedecd]/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f7f5] text-[#2a4336] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#ccdcd1]">
            <span>Personalised Treatment Guide</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d24] tracking-tight mb-4">
            How Are You Feeling Today?
          </h2>

          <p className="text-base sm:text-lg text-[#345342] leading-relaxed">
            Select what your body needs most, and we will recommend the ideal Ayurvedic therapy, herbal formulation, and session duration for your visit in Rutherford.
          </p>
        </div>

        {/* Interactive Symptom Selector Tabs (Clean Minimalist Typography) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {symptoms.map((item) => {
            const isSelected = selectedGoal === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedGoal(item.id)}
                className={`p-5 sm:p-6 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between min-h-[110px] sm:min-h-[120px] border ${
                  isSelected
                    ? "bg-[#1b2d24] text-white border-[#cca058] shadow-xl scale-[1.02] ring-2 ring-[#cca058]/30"
                    : "bg-[#FBF9F5] text-[#243029] border-[#e5ece7] hover:border-[#a5c3af] hover:bg-white"
                }`}
              >
                <div>
                  <h3
                    className={`font-serif text-base sm:text-lg font-bold leading-snug mb-2 ${
                      isSelected ? "text-[#FBF9F5]" : "text-[#1b2d24]"
                    }`}
                  >
                    {item.label}
                  </h3>
                </div>
                <div>
                  <span
                    className={`text-xs font-semibold block ${
                      isSelected ? "text-[#cca058]" : "text-[#8c5a3c]"
                    }`}
                  >
                    {isSelected ? "● Selected Focus" : "Tap to Select"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Card */}
        <div className="bg-gradient-to-br from-[#f4f7f5] to-[#FBF9F5] rounded-3xl p-6 sm:p-10 border border-[#ccdcd1] retreat-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Recommendation Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#2a4336] text-[#cca058]">
                <span>Recommended Ayurvedic Therapy</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b2d24]">
                {currentRecommendation.recommendedTitle}
              </h3>

              <p className="text-sm sm:text-base text-[#345342] leading-relaxed">
                {currentRecommendation.description}
              </p>

              {/* Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#e5ece7] text-xs">
                  <Droplets className="w-4 h-4 text-[#8c5a3c] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1b2d24] block">Formulated Oil:</span>
                    <span className="text-[#426953]">{currentRecommendation.oil}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#e5ece7] text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#426953] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1b2d24] block">Duration & Focus:</span>
                    <span className="text-[#426953]">{currentRecommendation.duration} • Certified Therapist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking Actions */}
            <div className="lg:col-span-4 bg-[#1b2d24] text-white p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-lg border border-[#345342]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#cca058] font-bold block mb-1">
                  Ready to Rejuvenate?
                </span>
                <p className="font-serif text-lg font-bold text-[#FBF9F5]">
                  Book This Treatment in Rutherford
                </p>
                <p className="text-xs text-[#ccdcd1] mt-1">
                  Same-day & scheduled sessions available.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-conversion="whatsapp"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20b859] shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href={SITE_CONFIG.telUrl}
                  data-conversion="call"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#cca058] text-[#1b2d24] font-bold text-xs sm:text-sm hover:bg-[#d8a25e] shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#1b2d24]" />
                  <span>Call to Book: {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              <Link
                href={`#${currentRecommendation.recommendedServiceId}`}
                className="text-center text-xs text-[#ccdcd1] hover:text-[#cca058] underline underline-offset-4 pt-1"
              >
                View Full Service Details & Benefits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
