import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackupHero from "@/components/backup/BackupHero";
import BackupWhat from "@/components/backup/BackupWhat";
import BackupHowItWorks from "@/components/backup/BackupHowItWorks";
import BackupAdvantages from "@/components/backup/BackupAdvantages";
import BackupUseCase from "@/components/backup/BackupUseCase";
import BackupSpecs from "@/components/backup/BackupSpecs";
import BackupInfrastructure from "@/components/backup/BackupInfrastructure";
import BackupCTA from "@/components/backup/BackupCTA";

const BackupOnDemand = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <BackupHero />
    <BackupWhat />
    <BackupHowItWorks />
    <BackupAdvantages />
    <BackupUseCase />
    <BackupSpecs />
    <BackupInfrastructure />
    <BackupCTA />
    <Footer />
  </div>
);

export default BackupOnDemand;
