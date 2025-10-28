import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCard from '@/components/services/ServiceCard';
import HowWeWork from '@/components/services/HowWeWork';
import CTA from '@/components/CTA';

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Design',
      description:
        'Transform your home into a personalized sanctuary with our comprehensive residential design services. We create spaces that reflect your lifestyle and aesthetic preferences.',
      features: [
        'Custom space planning and layout design',
        'Furniture selection and placement',
        'Color schemes and material selection',
        'Lighting design and fixtures',
        'Complete project management',
      ],
      image: '/images/service-residential.svg',
      imagePosition: 'left' as const,
    },
    {
      title: 'Renovation Design',
      description:
        'Breathe new life into your existing space with our expert renovation services. From minor updates to complete transformations, we handle every detail with care.',
      features: [
        'Structural modifications and improvements',
        'Kitchen and bathroom renovations',
        'Outdoor and patio design',
        'Sustainable and eco-friendly solutions',
        'Budget-conscious planning',
      ],
      image: '/images/service-renovation.svg',
      imagePosition: 'right' as const,
    },
    {
      title: 'Residential Design',
      description:
        'Create professional and inspiring work environments that boost productivity and reflect your brand identity. Our commercial designs combine functionality with aesthetic appeal.',
      features: [
        'Office space planning and design',
        'Retail and hospitality interiors',
        'Brand-focused design solutions',
        'Ergonomic workspace layouts',
        'Turnkey project delivery',
      ],
      image: '/images/service-residential.svg',
      imagePosition: 'left' as const,
    },
    {
      title: 'Renovation Design',
      description:
        'Maximize the potential of your outdoor areas with our landscape and patio design services. We create beautiful outdoor living spaces perfect for relaxation and entertainment.',
      features: [
        'Patio and deck design',
        'Garden and landscape planning',
        'Outdoor furniture and fixtures',
        'Lighting and irrigation systems',
        'Seasonal maintenance planning',
      ],
      image: '/images/service-renovation.svg',
      imagePosition: 'right' as const,
    },
  ];

  return (
    <div>
      <ServicesHero />
      
      {/* Service Cards */}
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          features={service.features}
          image={service.image}
          imagePosition={service.imagePosition}
        />
      ))}
      
      <HowWeWork />
      <CTA />
    </div>
  );
}
