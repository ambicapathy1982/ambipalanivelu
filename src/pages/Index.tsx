import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Certifications from "@/components/Certifications";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Expertise />
      <Certifications />
      <Journey />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
