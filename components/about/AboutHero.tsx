import React from 'react';
import Link from 'next/link';

const AboutHero = () => {
  return (
   
       <section
      className="relative h-[60vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/about.jpg')" }}
    >
            {/* <div className="absolute inset-0 bg-black/40"></div> */}

      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
          About Us
        </h1>
        
        <p
          className="inline-block text-white px-8 py-3 transition-colors duration-300"
        >
          Crafting timeless interiors that reflect your personality and lifestyle.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
