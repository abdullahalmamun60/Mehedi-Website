import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingPatterns from "@/components/FloatingPatterns";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <FloatingPatterns />
      <Header />
      <Hero />
      <SectionDivider variant="floral" />
      <Gallery />
      <SectionDivider variant="gold" />
      <Services />
      <SectionDivider variant="simple" />
      <About />
      <SectionDivider variant="floral" />
      <Testimonials />
      <SectionDivider variant="gold" />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;