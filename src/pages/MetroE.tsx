import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetroHero from "@/components/metro/MetroHero";
import MetroWhat from "@/components/metro/MetroWhat";
import MetroCoverage from "@/components/metro/MetroCoverage";
import MetroAdvantages from "@/components/metro/MetroAdvantages";
import MetroUseCase from "@/components/metro/MetroUseCase";
import MetroSpecs from "@/components/metro/MetroSpecs";
import MetroInfrastructure from "@/components/metro/MetroInfrastructure";
import MetroCTA from "@/components/metro/MetroCTA";

const MetroE = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <MetroHero />
    <MetroWhat />
    <MetroCoverage />
    <MetroAdvantages />
    <MetroUseCase />
    <MetroSpecs />
    <MetroInfrastructure />
    <MetroCTA />
    <Footer />
  </div>
);

export default MetroE;
