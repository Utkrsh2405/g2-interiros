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
    <section className="py-16 md:px-24 bg-white last:border-b-0">
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
            
            <p className="text-[#11111180] leading-relaxed">
              {description}
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#11111180] mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#11111180]">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6D8E4C] rounded-md text-white px-8 py-3 transition-colors duration-300 group"
            >
              Learn More
               <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
