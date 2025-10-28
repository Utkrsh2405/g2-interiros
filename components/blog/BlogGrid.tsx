import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
}

const BlogGrid = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Transform your living space with modern design trends',
      category: 'Interior Design',
      date: 'Oct 15, 2025',
      author: 'Sarah Johnson',
      image: '/images/blog-2.jpg',
      excerpt: 'Discover the latest trends in modern interior design and how to apply them to your home.',
    },
    {
      id: 2,
      title: 'The art of minimalism in contemporary homes',
      category: 'Minimalism',
      date: 'Oct 12, 2025',
      author: 'Michael Chen',
      image: '/images/blog-3.jpg',
      excerpt: 'Learn how less can be more when it comes to creating peaceful, functional living spaces.',
    },
    {
      id: 3,
      title: 'Sustainable materials for eco-friendly interiors',
      category: 'Sustainability',
      date: 'Oct 10, 2025',
      author: 'Emma Wilson',
      image: '/images/blog-4.jpg',
      excerpt: 'Explore environmentally conscious design choices that don\'t compromise on style.',
    },
    {
      id: 4,
      title: 'Creating cozy spaces: winter interior tips',
      category: 'Seasonal Design',
      date: 'Oct 8, 2025',
      author: 'David Martinez',
      image: '/images/blog-5.jpg',
      excerpt: 'Make your home warm and inviting with these winter-inspired design ideas.',
    },
    {
      id: 5,
      title: 'Smart home integration in modern design',
      category: 'Technology',
      date: 'Oct 5, 2025',
      author: 'Lisa Anderson',
      image: '/images/blog-6.jpg',
      excerpt: 'Seamlessly blend technology with aesthetics for a truly modern home experience.',
    },
    {
      id: 6,
      title: 'Color psychology: choosing the right palette',
      category: 'Color Theory',
      date: 'Oct 3, 2025',
      author: 'James Taylor',
      image: '/images/blog-7.jpg',
      excerpt: 'Understand how colors affect mood and create the perfect atmosphere in your space.',
    },
    {
      id: 7,
      title: 'Small space solutions: maximize your home',
      category: 'Space Planning',
      date: 'Oct 1, 2025',
      author: 'Rachel Green',
      image: '/images/blog-8.jpg',
      excerpt: 'Clever design strategies to make the most of compact living areas.',
    },
    {
      id: 8,
      title: 'Luxury on a budget: affordable elegance',
      category: 'Budget Design',
      date: 'Sep 28, 2025',
      author: 'Tom Harris',
      image: '/images/blog-9.jpg',
      excerpt: 'Achieve high-end looks without breaking the bank with these expert tips.',
    },
    {
      id: 9,
      title: 'The return of vintage: retro revival',
      category: 'Vintage Style',
      date: 'Sep 25, 2025',
      author: 'Sophie Brown',
      image: '/images/blog-10.jpg',
      excerpt: 'How to incorporate vintage elements into contemporary interiors successfully.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden rounded-md hover:shadow-lg transition-shadow duration-300 group border border-[#E8E8EA]"
            >
              {/* Image */}
              <Link href={`/blog/${post.id}`} className="block relative h-[250px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover p-4 rounded-md group-hover:scale-102 transition-transform duration-300"
                />
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
