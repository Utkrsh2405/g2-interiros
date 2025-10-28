import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import CTA from '@/components/CTA';

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogGrid />
      <img src="/images/blog-11.jpg" alt="image" width="100%" className='md:h-[100vh]'/>
      <CTA />
    </div>
  );
}
