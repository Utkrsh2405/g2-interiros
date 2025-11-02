import React from 'react';


const ProcessSteps = () => {
 

  return (
    <section className="bg-[#fff9ee] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-24 max-w-[1540px]">
        {/* Heading */}
        <h2 className="text-center mb-16 text-black text-4xl  font-serif font-semibold">
          <span>How We </span>
          <span className="italic">Work</span>
        </h2>

        {/* Content Container */}
        <div className="relative flex flex-col md:flex-row gap-12 items-start">
          {/* Left Side - Steps */}
          <div className="flex gap-8 md:gap-12 flex-1">
            {/* Vertical Numbers with Lines */}
            <div className="flex flex-col items-center gap-2 pt-4">
              {/* Number 1 */}
              <p className="text-black text-center">1</p>
              
              {/* Line 1 */}
              <div className="w-px h-20 bg-black"></div>
              
              {/* Number 2 */}
              <p className="text-black text-center">2</p>
              
              {/* Line 2 - Gradient */}
              <div className="w-px h-20 bg-gradient-to-b from-black to-[#E8E8E8]"></div>
              
              {/* Number 3 */}
              <p className="text-black text-center">3</p>
            </div>

            {/* Steps Content */}
            <div className="flex flex-col gap-24 pt-32">
              {/* Design Phase Step (Active) */}
              <div className="space-y-4">
                <h3 className="text-[#333333] font-bold">
                  Design Phase
                </h3>
                <p className="text-[rgba(0,0,0,0.5)] max-w-[580px]">
                  Figma ipsum component variant main layer. Frame library thumbnail duplicate auto frame plugin figjam. Blur figjam variant line text vector inspect fill slice.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 max-w-[629px]">
            <div className="relative h-[324px] w-full">
              <div className="absolute inset-0 bg-[#d9d9d9]">
                <img 
                  alt="Interior design living room" 
                  className="w-full h-full object-cover" 
                  src="/images/service 4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
