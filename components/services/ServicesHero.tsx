import React from 'react';

const ServicesHero = () => {
  const stats = [
    { value: '5+', label: 'Years' },
    { value: '100+', label: 'Projects' },
    { value: '50+', label: 'Clients' },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gray-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services-hero-bg.svg')",
          opacity: 0.3
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Our Services
          </h1>
          
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl">
            From concept to completion, we offer comprehensive interior design
            services tailored to transform your space into a beautiful and
            functional environment.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
