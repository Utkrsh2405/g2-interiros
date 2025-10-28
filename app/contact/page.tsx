import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import CTA from '@/components/CTA';

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <CTA />
    </div>
  );
}
