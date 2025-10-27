'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a comprehensive range of interior design services including residential and commercial design, space planning, furniture selection, color consultation, and complete project management from concept to completion.',
    },
    {
      question: 'How does the design process begin?',
      answer:
        'The design process begins with an initial consultation where we discuss your vision, requirements, budget, and timeline. We then create a design proposal and mood boards to ensure we are aligned with your expectations before moving forward.',
    },
    {
      question: 'How long will it take to complete my design project?',
      answer:
        'Project timelines vary depending on the scope and complexity. A typical residential project takes 8-12 weeks from initial consultation to completion. We provide a detailed timeline during the proposal phase and keep you updated throughout the process.',
    },
    {
      question: 'What type of projects do you manage?',
      answer:
        'We manage a diverse range of projects including residential homes, apartments, commercial spaces, offices, restaurants, and hospitality venues. Each project receives personalized attention and customized design solutions.',
    },
    {
      question: 'Do you work with specific contractors or suppliers?',
      answer:
        'We have established relationships with trusted contractors and suppliers, ensuring quality workmanship and materials. However, we are also flexible and can work with your preferred contractors if needed.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
              Answers To Your Frequently{' '}
              <em className="font-serif not-italic">Asked Questions</em>
            </h2>
          </div>

          {/* Right side - Description and FAQ List */}
          <div className="space-y-6">
            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              We've compiled a list of frequently asked questions to make your
              experience even better. This section provides quick answers to the
              topics you're curious about.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left py-2 group"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-gray-900 font-medium pr-4 group-hover:text-gray-700 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-96 opacity-100 mt-2'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
