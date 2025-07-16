import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeatureHighlights from '../components/landing/FeatureHighlights';
import HowItWorks from '../components/landing/HowItWorks';
import PlanosSection from '../components/landing/PlanosSection';
import Testemunhos from '../components/landing/Testemunhos';
import CallToAction from '../components/landing/CallToAction';
import FAQAccordion from '../components/landing/FAQAccordion';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col gap-24 md:gap-32">
        <HeroSection />
        <FeatureHighlights />
        <HowItWorks />
        <PlanosSection />
        <Testemunhos />
        <CallToAction />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
} 