import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#1a2e2e] flex items-center justify-center">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
      
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
        
        <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Living spaces aren't just about walls and furniture, but the artful blend of design, 
          functionality, and comfort. Let us transform your house into a home filled with warmth, 
          style, and your unique personality.
        </p>
        
        <button className="bg-white text-gray-900 px-8 py-3 rounded-sm text-sm font-medium hover:bg-gray-100 transition-colors duration-300 uppercase tracking-wide">
          Get a Free Quote
        </button>
      </div>
      
      {/* Optional: Add scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
