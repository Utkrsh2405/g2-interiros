import React from 'react';

const ServicesHero = () => {
  const stats = [
    { value: '6', label: 'Core Services' },
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
  ];

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/services.jpg')" }}
    >
<div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto font-famliy-[Archivo]">
        <h1 className="text-white mb-6 font-serif">
          <span className="block text-5xl md:text-6xl lg:text-7xl font-light mb-2">
            Interior Decorating & Styling Services
          </span>
        
        </h1>

        <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
         Comprehensive interior design solutions tailored to transform your vision into reality.
        </p>

        <button className="bg-[#6D8E4C] rounded-md text-white px-8 py-3 text-sm font-medium transition-colors duration-300 tracking-wide">
          Book a Consultation
        </button>
      </div>
    </section>
  );
};

export default ServicesHero;
