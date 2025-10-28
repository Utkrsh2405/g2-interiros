import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description:
        'We begin with a detailed discussion to understand your vision, requirements, and budget for the project.',
    },
    {
      step: '02',
      title: 'Concept & Presentation',
      description:
        'Our team creates design concepts and mood boards, presenting you with creative solutions tailored to your needs.',
    },
    {
      step: '03',
      title: 'Design Implementation',
      description:
        'We bring the approved design to life, managing every detail from procurement to installation with precision.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures your project runs smoothly from start
            to finish
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="text-5xl font-bold text-gray-200 mb-4">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
