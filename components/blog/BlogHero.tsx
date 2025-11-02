import React from 'react';

const BlogHero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/blog.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="flex items-center justify-center z-10 container  px-4">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-serif text-white mb-6">
            Our Blogs
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Get the latest updates and deeper insights for interior design from us
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
