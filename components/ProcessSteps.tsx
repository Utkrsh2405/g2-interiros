import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      number: '02',
      title: 'Design Phase',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      number: '03',
      title: 'Execution',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Number Badge */}
              <div className="inline-block bg-amber-600 text-white px-4 py-2 mb-4 font-bold">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
