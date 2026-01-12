import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import LeadForm from "@/components/LeadForm";
import ConversionCTA from "@/components/ConversionCTA";
import Footer from "@/components/Footer";
import FloatingHand from "@/components/FloatingHand";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <FloatingHand />
      <main>
        <Hero />
        <Services />
        <Impact />
        <LeadForm />
        <ConversionCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
