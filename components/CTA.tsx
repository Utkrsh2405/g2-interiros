import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            Let's create something beautiful together
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
            Ready to transform your space? Get in touch with our team to start
            your design journey.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300 group"
          >
            Book a consultation
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
    </section>
  );
};

export default CTA;
