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
      <div className="container mx-auto px-24">
        {/* Header with title and button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <h2 className="text-gray-900 text-4xl font-semibold">
            Our Services
          </h2>
          <div className="flex flex-col items-start  gap-4">
            <p className="text-gray-600 max-w-md text-left text-sm">
              With our expertise and tailored solutions, we're here to support you in achieving your goals and taking your vision to the next level.
            </p>
            <Link href={"/services"} className="bg-[#6D8E4C] rounded-md text-white px-6 py-3 transition-colors duration-300 flex items-center gap-2 group hover:bg-[#5d7a3f]">
              See More
               <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href="/services"
              >
                <div
              key={service.id}
              className="group cursor-pointer bg-[#F8F8F8] "
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
              <div className="space-y-1 p-2 mb-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
