import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/about-1.jpg"
              alt="Modern interior design bedroom"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
              Designing spaces that speak your style.
            </h2>
            
            <p className="text-[#11111180] leading-relaxed">
              At G2 Interiors, we believe that every space tells a story your story. We are a team of passionate interior designers dedicated to transforming houses into homes and commercial spaces into inspiring experiences.
With a perfect blend of aesthetics and functionality, our designs reflect who you are while optimizing comfort and style. From concept to completion, we handle every detail with creativity, precision, and care.
            </p>

            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md bg-[#6D8E4C] text-white px-8 py-3  transition-colors duration-300 group"
            >
              Explore Services
               <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
