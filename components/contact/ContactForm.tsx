'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const projectTypes = [
    { value: '', label: 'Select a project type' },
    { value: 'residential', label: 'Residential Interior Design' },
    { value: 'commercial', label: 'Commercial Interior Design' },
    { value: 'office', label: 'Office Space Design' },
    { value: 'hospitality', label: 'Hospitality Design' },
    { value: 'renovation', label: 'Home Renovation' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'other', label: 'Other' },
  ];

  const contactInfo = [
    { label: 'Email', value: 'contact@g2interiors.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    // { label: 'Phone', value: '+1 (555) 123-4567', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Let's Talk
            </h2>

            <p className="text-gray-900 leading-relaxed mb-8">
              Have some thoughts about redesigning your space? Fill this form to contact us to bring ideas to reality.
            </p>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
              <span>contact@g2interiors.com</span>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Socials</h3>
              <div className="flex flex-col gap-4 ">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors "
                    aria-label={social.name}
                  >
                    <span className="block text-gray-900 border-b w-fit">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#C6A666] rounded-md bg-[#FFF9EE] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#C6A666] rounded-md bg-[#FFF9EE] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#C6A666] rounded-md bg-[#FFF9EE] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Phone Number"
                />
              </div>

              {/* Project Type Field */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  What service are you interested in?
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 text-[#6D6D6D] py-3 border border-[#C6A666] rounded-md bg-[#FFF9EE] focus:outline-none "
                >
                  {projectTypes.map((type) => (
                    <option className='text-[#6D6D6D]' key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#C6A666] rounded-md bg-[#FFF9EE] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#6D8E4C] rounded-md text-white py-4 px-8 hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;