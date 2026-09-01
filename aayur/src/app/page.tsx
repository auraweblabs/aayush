import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TreatmentFinder } from "@/components/TreatmentFinder";
import { TrustAuthority } from "@/components/TrustAuthority";
import { MeetOwner } from "@/components/MeetOwner";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AyurvedicPhilosophy } from "@/components/AyurvedicPhilosophy";
import { FaqSection } from "@/components/FaqSection";
import { LocationCard } from "@/components/LocationCard";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] selection:bg-[#cca058]/20 selection:text-[#1b2d24]">
      {/* Sticky Navigation */}
      <Header />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Treatment Finder / Quick Assessment Guide */}
        <TreatmentFinder />

        {/* Trust & Authority Strip */}
        <TrustAuthority />

        {/* Meet the Owner & Therapist Qualifications */}
        <MeetOwner />

        {/* Core Services Grid */}
        <ServicesGrid />

        {/* Ayurvedic Experience & Philosophy */}
        <AyurvedicPhilosophy />

        {/* FAQ / AEO / GEO Section */}
        <FaqSection />

        {/* Rutherford Location & Studio Hours */}
        <LocationCard />
      </main>

      {/* Grounding Dark Footer */}
      <Footer />

      {/* Mobile-First Sticky Conversion Bar */}
      <MobileStickyBar />
    </div>
  );
}
