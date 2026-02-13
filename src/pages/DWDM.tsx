import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DwdmHero from "@/components/dwdm/DwdmHero";
import DwdmWhat from "@/components/dwdm/DwdmWhat";
import DwdmCoverage from "@/components/dwdm/DwdmCoverage";
import DwdmFeatures from "@/components/dwdm/DwdmFeatures";
import DwdmUseCase from "@/components/dwdm/DwdmUseCase";
import DwdmSpecs from "@/components/dwdm/DwdmSpecs";
import DwdmInfrastructure from "@/components/dwdm/DwdmInfrastructure";
import DwdmCTA from "@/components/dwdm/DwdmCTA";

const DWDM = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <DwdmHero />
    <DwdmWhat />
    <DwdmCoverage />
    <DwdmFeatures />
    <DwdmUseCase />
    <DwdmSpecs />
    <DwdmInfrastructure />
    <DwdmCTA />
    <Footer />
  </div>
);

export default DWDM;
