import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  const stats = [
    {
      label: 'Clients and Counseling',
      value: '250+',
    },
    {
      label: 'Completed Project',
      value: '90+',
    },
    {
      label: 'Expert Team',
      value: '500+',
    },
    {
      label: 'Project Value',
      value: '$5.5M',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image with overlay text */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] group overflow-hidden">
            <Image
              src="/images/placeholder.svg"
              alt="Modern interior design living room"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            
            {/* Top left heading */}
            <div className="absolute top-8 left-8">
              <h2 className="text-white text-3xl md:text-4xl font-serif">
                Who We Are?
              </h2>
            </div>

            {/* Bottom left description */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-sm md:text-base leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Right side - Stats Grid */}
          <div className="space-y-6">
            {/* Top description */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border-l-4 border-amber-600 pl-4 py-2"
                >
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
