import Navbar from "@/components/Navbar";
import EnterpriseHero from "@/components/enterprise/EnterpriseHero";
import SolutionsGrid from "@/components/enterprise/SolutionsGrid";
import NetworkMap from "@/components/enterprise/NetworkMap";
import NetworkNumbers from "@/components/enterprise/NetworkNumbers";
import FeaturedSolution from "@/components/enterprise/FeaturedSolution";
import NocSection from "@/components/enterprise/NocSection";
import InfrastructureSection from "@/components/enterprise/InfrastructureSection";
import WhyArtamedia from "@/components/enterprise/WhyArtamedia";
import EnterpriseCTA from "@/components/enterprise/EnterpriseCTA";
import CoverageSection from "@/components/CoverageSection";
import PartnersStrip from "@/components/PartnersStrip";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <EnterpriseHero />
      <SolutionsGrid />
      <NetworkMap />
      <NetworkNumbers />
      <FeaturedSolution />
      <NocSection />
      <InfrastructureSection />
      <CoverageSection />
      <WhyArtamedia />
      <PartnersStrip />
      <EnterpriseCTA />
      <ContactUs />
    </main>
    <Footer />
  </div>
);

export default Index;
