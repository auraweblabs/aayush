import Image from "next/image";
import { Sparkles, CheckCircle2, Droplet, Heart, Feather, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function AyurvedicPhilosophy() {
  const steps = [
    {
      number: "01",
      title: "Dosha & Body Assessment",
      subtitle: "Personalised Consultation",
      desc: "We begin with a mindful assessment to determine your tension areas, stress levels, and energetic state (Vata, Pitta, or Kapha) to tailor your session.",
    },
    {
      number: "02",
      title: "Warm Medicated Oil Infusion",
      subtitle: "Therapeutic Herbal Botanicals",
      desc: "Pure organic oils infused with therapeutic herbs like Ashwagandha, Brahmi, and Bala are heated to body temperature to penetrate deep muscular layers.",
    },
    {
      number: "03",
      title: "Targeted Marma & Rhythmic Therapy",
      subtitle: "Deep Neurological Reset",
      desc: "Rhythmic, synchronized strokes combined with vital energy point (Marma) activation release locked physical tension and calm the central nervous system.",
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[#e5ece7]">
              <Image
                src="/images/ayurvedic-oils.jpg"
                alt="Artisanal Ayurvedic medicated massage oils and herbs at Aayur Touch Rutherford"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2d24]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e5ece7] retreat-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a4336] text-[#cca058] flex items-center justify-center shrink-0">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-sm text-[#1b2d24]">100% Organic Medicated Oils</p>
                    <p className="text-xs text-[#426953]">Custom-blended for restorative cellular nourishment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial / Practitioner Promise */}
            <div className="p-6 rounded-2xl bg-[#eedecd]/50 border border-[#eedecd] text-[#71462d]">
              <p className="italic text-sm font-serif leading-relaxed">
                &ldquo;Ayurveda is not merely a massage; it is an ancient art of restoring the body&apos;s natural balance, unlocking deep rest, and relieving the burdens of modern pace.&rdquo;
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#1b2d24]">
                — Aayur Touch Certified Practitioner, Rutherford NSW
              </p>
            </div>
          </div>

          {/* Right Column: 3 Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e5ece7] text-[#2a4336] text-xs font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4 text-[#8c5a3c]" />
                <span>The Restorative Journey</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b2d24] tracking-tight mb-4">
                The Aayur Touch Experience
              </h2>
              <p className="text-sm sm:text-base text-[#345342] leading-relaxed">
                Every session in our Rutherford sanctuary is a sacred sanctuary space where time slows down, your nervous system resets, and ancient herbal traditions work in unison.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-white border border-[#e5ece7] retreat-shadow hover:border-[#a5c3af] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2a4336] text-[#cca058] font-serif font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                    {step.number}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1b2d24]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8c5a3c]">
                      {step.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#426953] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Booking Hook */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-conversion="whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#25D366] text-white hover:bg-[#20b859] shadow-md transition-all hover:scale-105"
              >
                <span>Book Your Restorative Session</span>
              </a>
              <a
                href={SITE_CONFIG.telUrl}
                data-conversion="call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#2a4336] text-white hover:bg-[#1b2d24] shadow-md transition-all hover:scale-105"
              >
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
