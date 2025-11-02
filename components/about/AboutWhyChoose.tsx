import React from 'react';
import Image from 'next/image';

const AboutWhyChoose = () => {
  const features = [
    {name:'Expert Team', image:'/images/expert-team.svg', description:'Our creative team blends passion and precision to craft spaces that truly feel like home.'},
    {name: 'Thoughtful Design', image:'/images/thought.svg', description:'From concept to completion, we turn ideas into elegant, functional spaces.'},
    {name:'Driven by Passion', image:'/images/driven.svg', description:'We design with purpose — transforming spaces into meaningful experiences.'},
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Why Choose us?
            </h2>
            
            <p className="text-[#11111180] leading-relaxed">
              We don’t just decorate spaces; we design experiences — where textures, colors, and light come together to tell your story.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center mt-1">
                     <img src={feature.image} alt={feature.name} />
                  </div>
                 <div>
                   <p className="text-gray-700 text-lg">{feature.name}</p>
                  <p className='text-[#11111180]'>{feature.description}</p>
                 </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/about-2.jpg"
              alt="Modern living room interior design"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
