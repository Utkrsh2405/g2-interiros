import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact-hero-bg.svg')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
          Contact
        </h1>
        <p className="text-white/90 text-lg max-w-xl mx-auto">
          Have a project in mind or looking to transform your space? Get in touch
          with us today.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
