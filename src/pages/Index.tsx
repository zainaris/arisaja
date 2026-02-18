import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import AboutIntro from "@/components/AboutIntro";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoverageSection from "@/components/CoverageSection";
import NetworkStats from "@/components/NetworkStats";
import PartnersStrip from "@/components/PartnersStrip";
import FinalCTA from "@/components/FinalCTA";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16 lg:pt-20">
      <HeroSection />
    </div>
    <ServiceCards />
    <AboutIntro />
    <WhyChooseUs />
    <CoverageSection />
    <NetworkStats />
    <PartnersStrip />
    <FinalCTA />
    <ContactUs />
    <Footer />
  </div>
);

export default Index;
