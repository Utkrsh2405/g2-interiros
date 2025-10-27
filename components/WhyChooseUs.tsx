import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  const features = [
    { text: 'Flexible Time', column: 1 },
    { text: 'Perfect Work', column: 1 },
    { text: 'Client Priority', column: 1 },
    { text: 'Flexible Time', column: 2 },
    { text: 'Perfect Work', column: 2 },
    { text: 'Client Priority', column: 2 },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Video/Image with play button */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] group overflow-hidden">
            <Image
              src="/images/why-choose-us.svg"
              alt="Interior design showcase video"
              fill
              className="object-cover"
              priority
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
              <button
                className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
                aria-label="Play video"
              >
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-gray-900 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                Why Choose Our{' '}
                <em className="font-serif not-italic">Interior Design Service</em>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Feature Checklist - Two Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="space-y-3">
                {features
                  .filter((f) => f.column === 1)
                  .map((feature, index) => (
                    <div key={`col1-${index}`} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                {features
                  .filter((f) => f.column === 2)
                  .map((feature, index) => (
                    <div key={`col2-${index}`} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
