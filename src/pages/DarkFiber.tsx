import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkFiberHero from "@/components/darkfiber/DarkFiberHero";
import DarkFiberWhat from "@/components/darkfiber/DarkFiberWhat";
import DarkFiberAdvantages from "@/components/darkfiber/DarkFiberAdvantages";
import DarkFiberUseCase from "@/components/darkfiber/DarkFiberUseCase";
import DarkFiberSpecs from "@/components/darkfiber/DarkFiberSpecs";
import DarkFiberInfrastructure from "@/components/darkfiber/DarkFiberInfrastructure";
import DarkFiberProcess from "@/components/darkfiber/DarkFiberProcess";
import DarkFiberCTA from "@/components/darkfiber/DarkFiberCTA";

const DarkFiber = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <DarkFiberHero />
    <DarkFiberWhat />
    <DarkFiberAdvantages />
    <DarkFiberUseCase />
    <DarkFiberSpecs />
    <DarkFiberInfrastructure />
    <DarkFiberProcess />
    <DarkFiberCTA />
    <Footer />
  </div>
);

export default DarkFiber;
