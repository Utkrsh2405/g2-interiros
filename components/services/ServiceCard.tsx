import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition: 'left' | 'right';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  image,
  imagePosition,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100 last:border-b-0">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
        }`}>
          {/* Image */}
          <div className={`relative h-[400px] md:h-[500px] overflow-hidden ${
            imagePosition === 'right' ? 'lg:col-start-2' : ''
          }`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className={`space-y-6 ${
            imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
          }`}>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              {title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 group"
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
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
