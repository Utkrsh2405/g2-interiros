import React from 'react';
import Link from 'next/link';

const AboutHero = () => {
  return (
   
       <section
      className="relative h-[60vh] md:h-[100vh] bg-cover bg-top flex items-center justify-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
            {/* <div className="absolute inset-0 bg-black/40"></div> */}

      
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
