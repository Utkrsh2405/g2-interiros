import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecentWork = () => {
  const projects = [
    {
      id: 1,
      image: '/images/work-1.jpg',
      title: 'Modern Living Space',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 2,
      image: '/images/work-2.jpg',
      title: 'Elegant Interior',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 3,
      image: '/images/work-3.jpg',
      title: 'Cozy Living Room',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 4,
      image: '/images/work-4.jpg',
      title: 'Minimalist Design',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 5,
      image: '/images/work-5.jpg',
      title: 'Contemporary Space',
      span: 'col-span-1 row-span-1',
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <h2 className="text-gray-900 text-4xl font-semibold">
            Our Recent Work
          </h2>
          <div className="flex flex-col items-start  gap-4">
            <p className="text-gray-600 max-w-md text-left text-sm">
              Discover our featured works showcasing our expertise and passion in every project. Let these stories inspire your next venture!            </p>
            <button className="bg-[#6D8E4C] rounded-md text-white px-6 py-3 transition-colors duration-300 flex items-center gap-2 group hover:bg-[#5d7a3f]">
             Learn More
               <img src="/images/arrow.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First row - 2 items */}
          <div className="relative h-[280px] sm:h-[320px] overflow-hidden group cursor-pointer">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative h-[280px] sm:h-[320px] sm:col-span-1 lg:col-span-2 overflow-hidden group cursor-pointer">
            <Image
              src={projects[1].image}
              alt={projects[1].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Second row - 3 items */}
          <div className="relative h-[280px] sm:h-[320px] overflow-hidden group cursor-pointer">
            <Image
              src={projects[2].image}
              alt={projects[2].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative h-[280px] sm:h-[320px] overflow-hidden group cursor-pointer">
            <Image
              src={projects[3].image}
              alt={projects[3].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative h-[280px] sm:h-[320px] overflow-hidden group cursor-pointer">
            <Image
              src={projects[4].image}
              alt={projects[4].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
