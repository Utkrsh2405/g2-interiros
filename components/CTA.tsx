import React from 'react';

const CTA = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/cta.jpg" 
          alt="Cozy living room interior" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h2 className="text-white mb-4 text-4xl font-semibold">
            Let's create something beautiful together
          </h2>

          {/* Description */}
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Ready to transform your space? Get in touch with our team to start your design journey
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 bg-[#6d8e4c] text-white px-6 py-3 rounded-md hover:bg-[#5d7a3f] transition-colors duration-300 group">
            Book a consultation
             <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;