import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import HeroSection from "@/components/HeroSection";
import AboutIntro from "@/components/AboutIntro";
import CoverageSection from "@/components/CoverageSection";
import NetworkStats from "@/components/NetworkStats";
import PartnersStrip from "@/components/PartnersStrip";
import FinalCTA from "@/components/FinalCTA";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroCarousel />
    <HeroSection />
    <AboutIntro />
    <CoverageSection />
    <NetworkStats />
    <PartnersStrip />
    <FinalCTA />
    <ContactUs />
    <Footer />
  </div>
);

export default Index;
