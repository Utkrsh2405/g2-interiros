import React from 'react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Share2, Clock } from 'lucide-react';
import heroImage from 'figma:asset/c9f34b3ad7b405558aaf4718ebc5666f83dcb282.png';
import CTA from '@/components/CTA';

const BlogDetails = () => {
  const posts = [
    {
      id: 1,
      title:
        "Figma ipsum component variant main layer. Line arrow share pen undo clip. Fill resizing editor bold style polygon undo.",
      date: "June 21,2022",
      readTime: "2 minute read",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80",
      dark: true,
    },
    {
      id: 2,
      title:
        "Figma ipsum component variant main layer. Ipsum rotate rotate list pencil font line rotate. Auto project line outline pencil.",
      date: "June 21,2022",
      readTime: "2 minute read",
      image: "",
      dark: false,
    },
    {
      id: 3,
      title:
        "Figma ipsum component variant main layer. Ipsum rotate rotate list pencil font line rotate. Auto project line outline pencil.",
      date: "June 21,2022",
      readTime: "2 minute read",
      image: "",
      dark: false,
    },
    {
      id: 4,
      title:
        "Figma ipsum component variant main layer. Ipsum rotate rotate list pencil font line rotate. Auto project line outline pencil.",
      date: "June 21,2022",
      readTime: "2 minute read",
      image: "",
      dark: false,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/blog.jpg')" }}
      >
        {/* Background overlay for depth */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto font-famliy-[Archivo]">
          <h1 className="text-white mb-6 font-serif">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-light mb-2">
              Modern Minimalism
            </span>
          </h1>

          <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover how minimalism can transform your living space
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-24 py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Social Sidebar */}
          <div className="col-span-1">
            <div className="sticky top-24 flex flex-col gap-6 items-center">
              <button className="flex flex-col item-center text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                <img src="/images/views.svg" alt="views" className='h-4' />
                views<br />
                1.6K
              </button>
              <button className="flex flex-col item-center text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                <img src="/images/share.svg" alt="shares" className='h-4' />
                shares<br />
                996K
              </button>
              <button className="flex flex-col item-center text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                <img src="/images/facebook.svg" alt="facebook" className='h-5' />
                125
              </button>
              <button className="flex flex-col item-center text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                <img src="/images/twitter.svg" alt="twitter" className='h-5' />
                244
              </button>
              <button className="flex flex-col item-center text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                <img src="/images/pinterest.svg" alt="pinterest" className='h-5' />
                425
              </button>
            </div>
          </div>

          {/* Main Article Content */}
          <div className="col-span-8">

            {/* Article Body */}
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Blandit tempus porttitor aasas. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus
                porttitor aasas. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi
                erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>

              <div className='flex items-start gap-4 my-16'>
                <img src="/images/quotes.svg" alt="" />
                <p className="font-medium text-lg md:text-xl lg:text-3xl ">
                  FIGMA IPSUM COMPONENT VARIANT MAIN LAYER. EFFECT OPACITY PROJECT FLOWS BOLD ASSET OBJECT FILL.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Blandit tempus porttitor aasas. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus
                porttitor aasas. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi
                erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>

              <h3 className="mb-4 mt-12 text-2xl font-medium ">FIGMA IPSUM COMPONENT</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Get Figma ipsum component with main layer variant flows project inspect scale line. Overflow device flows editor
                duplicate asset link flows duplicate. Main component bold slice flatten boolean distribute plugin auto layout.
                Strikethrough italic figma ipsum component font create asset font filet. Ipsum distribute pixel effect underline.
                Overflow device flows editor.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Duplicate asset link flows duplicate. Main component bold slice flatten boolean distribute plugin auto layout.
                Strikethrough italic figma ipsum component font create. Commodo luctus, nisi erat porttitor ligula. Flows component
                layer team opacity inspect create. Flows editor reesizable blur. Image text connection subtract slice layout flows
                editor. Create ipsum main shadows auto layout. Groups ipsum connection auto blur background scale group.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Donec
                ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="sticky top-24 space-y-8">
              {/* Follow Us */}
              <div>
                <h3 className="mb-4">Follow Us</h3>
                <div className="grid grid-cols-5 gap-14 flex-wrap ">
                  <button className="flex flex-col item-center gap-2 text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                    <img src="/images/facebook.svg" alt="twitter" className='h-5' />
                    10
                  </button>
                  <button className="flex flex-col item-center gap-2 text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                    <img src="/images/twitter.svg" alt="twitter" className='h-5' />
                    69k
                  </button>
                  <button className="flex flex-col item-center gap-2 text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                    <img src="/images/instagram.svg" alt="twitter" className='h-4' />
                    45
                  </button>
                  <button className="flex flex-col item-center gap-2 text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                    <img src="/images/pinterest.svg" alt="twitter" className='h-5' />
                    55k
                  </button>
                  <button className="flex flex-col item-center gap-2 text-sm justify-center hover:text-[#6d8e4c] transition-colors">
                    <img src="/images/youtube.svg" alt="twitter" className='h-4' />
                    89k
                  </button>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="">
                <h3 className="mb-2">Subscription Subscribe to our newsletter and receive a selection of cool articles every weeks</h3>
                {/* <p className="text-sm text-gray-600 mb-4">
                  Enter your email address to register to our newsletter subscription!
                </p> */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-4 border border-[#CECECE] rounded-md mb-3 focus:outline-none focus:border-[#6d8e4c]"
                />
                <button className="w-full font-light bg-[#6d8e4c] rounded-md text-white px-4 py-4 hover:bg-[#5a7a3d] transition-colors">
                  SUBSCRIBE
                </button>
                <p className="text-sm text-gray-500 mt-3 flex items-center gap-3">
                  <input type="checkbox" name="" id="" />
                  By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
                </p>
              </div>

              {/* Post Latest */}
              <div className="max-w-sm mx-auto font-sans">
                <h3 className="text-lg font-medium mb-4">The Latest</h3>

                <div className="space-y-8">
                  {posts.map((post) =>
                    post.dark ? (
                      // FIRST CARD (dark)
                      <div key={post.id} className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-32 object-cover rounded-sm"
                        />
                        <div className="absolute inset-0 bg-black/60 rounded-sm p-4 flex flex-col justify-end text-white">
                          <p className="text-sm mb-3 line-clamp-3">{post.title}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-300">
                            <span>{post.date}</span>
                            <span className="w-[1px] h-3 bg-gray-300"></span>
                            <Clock size={12} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // LIGHT CARDS
                      <div key={post.id} className="space-y-2">
                        <p className="text-sm leading-relaxed line-clamp-3">
                          {post.title}
                        </p>
                        <div className="flex items-center gap-3 text-sm ">
                          <span>{post.date}</span>
                          <span className="w-[1px] h-3 bg-gray-400"></span>
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />

    </div>
  );
};

export default BlogDetails;
