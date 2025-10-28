import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import CoreValues from '@/components/about/CoreValues';
import AboutWhyChoose from '@/components/about/AboutWhyChoose';
import CTA from '@/components/CTA';

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutIntro />
      <CoreValues />
      <AboutWhyChoose />
      <CTA />
    </div>
  );
}
