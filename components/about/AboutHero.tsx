import React from 'react';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gray-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-hero-bg.svg')",
          opacity: 0.4
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
          Transform Spaces<br />
          <em className="font-serif not-italic">Inspire Lives</em>
        </h1>
        
        <Link
          href="/contact"
          className="inline-block bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;
