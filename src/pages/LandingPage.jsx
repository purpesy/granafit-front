import React from "react";
import HeroSection from "../components/landing/HeroSection";
import FeatureHighlights from "../components/landing/FeatureHighlights";
import HowItWorks from "../components/landing/HowItWorks";
import PlanosSection from "../components/landing/PlanosSection";
import Testemunhos from "../components/landing/Testemunhos";
import CTASection from "../components/landing/CallToAction";
import FAQAccordion from "../components/landing/FAQAccordion";
import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";
import SecurityAssurance from "../components/landing/SecurityAssurance";

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col gap-24 md:gap-32">
        <HeroSection />
        <FeatureHighlights />
        <HowItWorks />
        <CTASection
          title="Pronto para dar o próximo passo?"
          subtitle="Organize seu dinheiro com leveza, motivação e resultado. Faça parte do GranaFit."
          buttonText="Começar agora (é grátis)"
          href="/login?register"
        />
        <PlanosSection />
        <SecurityAssurance />
        <Testemunhos />
        <CTASection
          title="Comece a cuidar da sua grana como cuida da sua saúde."
          subtitle="Chega de planilhas complicadas. Tenha clareza, atinja suas metas e conquiste a tranquilidade financeira que você merece."
          buttonText="Quero minha vida financeira saudável"
          href="/login?register"
        />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
}
