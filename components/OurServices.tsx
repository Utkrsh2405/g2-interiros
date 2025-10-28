import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      description: 'Et tincidunt ut vitae nulla sed lobortis.',
      image: '/images/service 1.jpg',
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      description: 'Et tincidunt ut vitae nulla sed lobortis.',
      image: '/images/service 2.jpg',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      description: 'Et tincidunt ut vitae nulla sed lobortis long.',
      image: '/images/service 3.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with title and button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 md:mb-0">
            Our Services
          </h2>
          <Link
            href="/services"
            className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 group"
          >
            See More
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer bg-[#F8F8F8] p-4"
            >
              {/* Image Container */}
              <div className="relative h-[280px] mb-4 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
