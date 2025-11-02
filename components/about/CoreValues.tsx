import React from 'react';

const CoreValues = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a comprehensive discussion of your vision, needs, and budget.',
      offsetClass: 'md:mt-0',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'We begin with a comprehensive discussion of your vision, needs, and budget.',
      offsetClass: 'md:mt-12', // equivalent to 60px
    },
    {
      number: '03',
      title: 'Design Refinement',
      description: 'We begin with a comprehensive discussion of your vision, needs, and budget.',
      offsetClass: 'md:mt-0',
    },
  ];

  return (
    <section className="bg-[#FFF9EE] py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <h2 className="text-center mb-20 text-black text-4xl">
          <span>How We </span>
          <span className="italic">Work</span>
        </h2>

        {/* Process Steps - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center ${step.offsetClass}`}
            >
              {/* Background Box */}
              <div className="relative mb-6">
                {/* Pale Background Box */}
                <div className="absolute -inset-4 bg-[#f5ebe0] rounded-sm"></div>
                
                {/* Step Number Box */}
                <div className="relative w-[90px] h-[90px] bg-[#C9A66B] flex items-center justify-center">
                  <span className="text-white">{step.number}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-black mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[rgba(0,0,0,0.6)] leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;