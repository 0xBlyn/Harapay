'use client';

import React from 'react';
import Hero from '@/components/hero';
import Features from '@/components/Features';
import TargetAudience from '@/components/TargetAudience';
import GlobalReach from '@/components/GlobalReach';
import AvailableCryptos from '@/components/AvailableCryptos';
// import Benefits from '@/components/Benefits';
import DeveloperSection from '@/components/DeveloperSection';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import ContactUs from '@/components/ContactUs';
import { BlockchainLogos } from '@/components/BlockchainLogos';

export default function Home() {
  return (
    <main>
      <Hero />
      <BlockchainLogos />
      <Features />
      <TargetAudience />
      <GlobalReach />
      <AvailableCryptos />
      {/* <Benefits /> */}
      <DeveloperSection />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <ContactUs />
      <Footer />
    </main>
  );
}
