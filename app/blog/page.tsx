import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import CTA from '@/components/CTA';

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogGrid />
      <CTA />
    </div>
  );
}
