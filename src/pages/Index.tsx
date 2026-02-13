import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutIntro from "@/components/AboutIntro";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoverageSection from "@/components/CoverageSection";
import NetworkStats from "@/components/NetworkStats";
import PartnersStrip from "@/components/PartnersStrip";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutIntro />
    <ServicesSection />
    <WhyChooseUs />
    <CoverageSection />
    <NetworkStats />
    <PartnersStrip />
    <Testimonials />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
