'use client';

import React from 'react';
import Hero from '@/components/hero';
import Features from '@/components/Features';
import CoreFeatures from '@/components/CoreFeatures';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import ContactUs from '@/components/ContactUs';
import Brands from '@/components/Brands';
import Highlights from '@/components/Highlights';
export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Features />
      <CoreFeatures />
      <Highlights />
      {/* <Team /> */}
      <Testimonials />
      <FAQ />
      <ContactUs />
      <Footer />
    </main>
  );
}
