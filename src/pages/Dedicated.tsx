import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DedicatedHero from "@/components/dedicated/DedicatedHero";
import DedicatedWhat from "@/components/dedicated/DedicatedWhat";
import DedicatedAdvantages from "@/components/dedicated/DedicatedAdvantages";
import DedicatedIndustry from "@/components/dedicated/DedicatedIndustry";
import DedicatedSpecs from "@/components/dedicated/DedicatedSpecs";
import DedicatedPricing from "@/components/dedicated/DedicatedPricing";
import DedicatedInfrastructure from "@/components/dedicated/DedicatedInfrastructure";
import DedicatedCTA from "@/components/dedicated/DedicatedCTA";

const Dedicated = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <DedicatedHero />
    <DedicatedWhat />
    <DedicatedAdvantages />
    <DedicatedIndustry />
    <DedicatedSpecs />
    <DedicatedPricing />
    <DedicatedInfrastructure />
    <DedicatedCTA />
    <Footer />
  </div>
);

export default Dedicated;
