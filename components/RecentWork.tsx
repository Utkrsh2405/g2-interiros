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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Discover our featured works showcasing our expertise and passion
              for creating spaces that inspire and align your new ventures.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 group whitespace-nowrap"
          >
            Learn More
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
