
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutPreview } from "@/components/AboutPreview";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      <Hero />
      <Services />
      <AboutPreview />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
