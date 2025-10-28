import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/about-intro.svg"
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
            
            <p className="text-gray-600 leading-relaxed">
              We believe that every space has a story to tell. Our team of
              passionate designers works closely with you to transform your
              vision into reality, creating interiors that not only look
              beautiful but also enhance your daily living experience.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              From concept to completion, we handle every detail with precision
              and care, ensuring that your space reflects your unique personality
              and lifestyle.
            </p>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 group"
            >
              Explore Services
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
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
