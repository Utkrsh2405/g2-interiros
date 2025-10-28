import React from 'react';

const BlogHero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gray-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blog-hero-bg.svg')",
          opacity: 0.3
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Our Blogs
          </h1>
          
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Discover design inspiration, expert tips, and the latest trends in
            interior design. Our blog features insights to help you create
            beautiful spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
