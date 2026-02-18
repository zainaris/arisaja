import Navbar from "@/components/Navbar";
import AboutIntro from "@/components/AboutIntro";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16 lg:pt-20">
      <AboutIntro />
    </div>
    <Footer />
  </div>
);

export default About;
