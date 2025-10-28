import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-top flex items-center justify-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Background overlay for depth */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-white mb-6 font-serif">
          <span className="block text-5xl md:text-6xl lg:text-7xl font-light mb-2">
            Transform Spaces
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-light italic">
            Inspire Lives
          </span>
        </h1>

        <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Living spaces aren't just about walls and furniture, but the artful blend of design,
          functionality, and comfort. Let us transform your house into a home filled with warmth,
          style, and your unique personality.
        </p>

        <button className="bg-white text-gray-900 px-8 py-3  text-sm font-medium hover:bg-gray-100 transition-colors duration-300 uppercase tracking-wide">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
