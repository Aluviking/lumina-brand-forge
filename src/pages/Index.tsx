import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsSection from "@/components/BrandsSection";
import Services from "@/components/Services";
import VideoShowcase from "@/components/VideoShowcase";
import Impact from "@/components/Impact";
import LeadForm from "@/components/LeadForm";
import ConversionCTA from "@/components/ConversionCTA";
import Footer from "@/components/Footer";
import FloatingHand from "@/components/FloatingHand";
import Chatbot from "@/components/Chatbot";
import WelcomePopup from "@/components/WelcomePopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <WelcomePopup />
      <Header />
      <FloatingHand />
      <Chatbot />
      <main>
        <Hero />
        <BrandsSection />
        <Services />
        <VideoShowcase />
        <Impact />
        <LeadForm />
        <ConversionCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
