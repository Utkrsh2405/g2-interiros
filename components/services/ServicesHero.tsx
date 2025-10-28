import React from 'react';

const ServicesHero = () => {
  const stats = [
    { value: '6', label: 'Core Services' },
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
  ];

  return (
    <section
      className="relative h-screen w-full bg-cover bg-top flex items-center justify-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >

       {/* <div className="absolute inset-0 bg-black/40"></div> */}
      
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
                className=" border-2 border-l-white/20 border-t-0 border-b-0 border-r-0 p-6 text-center  transition-colors duration-300"
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
