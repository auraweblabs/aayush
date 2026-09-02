import Image from "next/image";
import { Clock, Droplets, CheckCircle2, Phone, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#f4f7f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccdcd1] text-[#1b2d24] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-[#8c5a3c]" />
            <span>Holistic Healing Therapies</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d24] tracking-tight mb-6">
            Our Services
          </h2>

          <p className="text-base sm:text-lg text-[#345342] leading-relaxed">
            Discover tailored Ayurvedic treatments formulated with warm,
            therapeutic herbal oils and traditional bodywork techniques to relieve
            tension, reduce stress, and restore total vitality.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SITE_CONFIG.services.map((service, index) => {
            const serviceWhatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Hello Aayur Touch, I would like to book a "${service.title}" session in Cameron Park.`
            )}`;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#e5ece7] retreat-shadow hover:shadow-2xl hover:border-[#a5c3af] transition-all duration-300 flex flex-col group"
              >
                {/* Treatment Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#e5ece7]">
                  <Image
                    src={service.image}
                    alt={`${service.title} in Cameron Park NSW`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#1b2d24]/90 text-[#cca058] backdrop-blur-md border border-[#cca058]/30 shadow-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Bottom Duration & Sanskrit Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-[#cca058]" />
                      <span>{service.duration}</span>
                    </span>
                    {service.sanskritName && (
                      <span className="text-xs font-serif italic text-[#e5ece7]/90 drop-shadow">
                        {service.sanskritName}
                      </span>
                    )}
                  </div>
                </div>

                {/* Treatment Content Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b2d24] group-hover:text-[#2a4336] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#345342] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Key Benefits List */}
                    <div className="space-y-2.5 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#71462d]">
                        Key Therapeutic Benefits:
                      </p>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2a4336]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#426953] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Herbal Oil Infusion Pill */}
                    <div className="p-3.5 rounded-2xl bg-[#f7efe7] border border-[#eedecd] flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#eedecd] text-[#71462d] flex items-center justify-center shrink-0">
                        <Droplets className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-[#71462d] block">
                          Formulated Herbal Oil:
                        </span>
                        <span className="text-[#345342]">{service.oilBlend}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Booking Buttons */}
                  <div className="pt-4 border-t border-[#e5ece7] grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={serviceWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-conversion="whatsapp"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] text-white hover:bg-[#20b859] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                      title={`Book ${service.title} via WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Book via WhatsApp</span>
                    </a>

                    <a
                      href={SITE_CONFIG.telUrl}
                      data-conversion="call"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#2a4336] text-[#FBF9F5] hover:bg-[#1b2d24] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                      title={`Call to inquire about ${service.title}`}
                    >
                      <Phone className="w-4 h-4 text-[#cca058]" />
                      <span>Call to Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultation Callout Banner */}
        <div className="mt-16 text-center bg-[#e5ece7] rounded-2xl p-6 sm:p-8 border border-[#ccdcd1] max-w-4xl mx-auto">
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1b2d24] mb-2">
            Unsure Which Treatment Best Suits Your Needs?
          </h4>
          <p className="text-sm text-[#345342] mb-6 max-w-xl mx-auto">
            Our certified practitioner can guide you through a quick assessment
            to select the ideal herbal oil blend and treatment duration.
          </p>
          <a
            href={SITE_CONFIG.telUrl}
            data-conversion="call"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2a4336] text-white text-sm font-bold hover:bg-[#1b2d24] transition-transform hover:scale-105 shadow"
          >
            <Phone className="w-4 h-4 text-[#cca058]" />
            <span>Call for Personalized Recommendation: {SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
