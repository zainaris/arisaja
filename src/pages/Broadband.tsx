import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BroadbandHero from "@/components/broadband/BroadbandHero";
import BroadbandFeatures from "@/components/broadband/BroadbandFeatures";
import BroadbandPricing from "@/components/broadband/BroadbandPricing";
import BroadbandInfrastructure from "@/components/broadband/BroadbandInfrastructure";
import BroadbandCTA from "@/components/broadband/BroadbandCTA";

const Broadband = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <BroadbandHero />
    <BroadbandFeatures />
    <BroadbandPricing />
    <BroadbandInfrastructure />
    <BroadbandCTA />
    <Footer />
  </div>
);

export default Broadband;
