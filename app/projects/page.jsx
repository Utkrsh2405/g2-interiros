"use client"

import React from 'react'
import { useState } from 'react'
import FilterButton from '../../components/FilterButton';
import ProjectCard from '../../components/ProjectCard';
import Link from 'next/link';
import CTA from '../../components/CTA';

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'office', label: 'Office' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'retail', label: 'Retail' },
  ];

  const projects = [
    {
      image: '/images/project1.jpg',
      title: 'Modern Living Space',
      location: 'Downtown Manhattan, NY',
      category: 'Residential',
      year: '2024',
      description: 'A sophisticated blend of contemporary design and functional living spaces',
      size: 'large',
    },
    {
      image: '/images/project2.jpg',
      title: 'Luxury Kitchen Design',
      location: 'Beverly Hills, CA',
      category: 'Residential',
      year: '2024',
      description: 'A sophisticated blend of contemporary design and functional living spaces',
      size: 'medium',
    },
    {
      image: '/images/project3.jpg',
      title: 'Contemporary Bedroom Suite',
      location: 'Brooklyn, NY',
      category: 'Residential',
      year: '2024',
      description: 'A sophisticated blend of contemporary design and functional living spaces',
      size: 'medium',
    },
    {
      image: '/images/project4.jpg',
      title: 'Modern Living Space',
      location: 'Downtown Manhattan, NY',
      category: 'Residential',
      year: '2024',
      description: 'A sophisticated blend of contemporary design and functional living spaces',
      size: 'large',
    },
    {
      image: '/images/project5.jpg',
      title: 'Luxury Kitchen Design',
      location: 'Beverly Hills, CA',
      category: 'Residential',
      year: '2024',
      description: 'A sophisticated blend of contemporary design and functional living spaces',
      size: 'medium',
    },
    {
      image: '/images/proect6.jpg',
      title: 'Contemporary Bedroom Suite',
      location: 'Brooklyn, NY',
      category: 'Residential',
      year: '2024',
      description: 'A sophisticated blend of contemporary design and functional living spaces',
      size: 'medium',
    },
  ];

  return (
    <section>
      <section 
        className="relative h-screen w-full bg-cover bg-top flex flex-col justify-center px-8 lg:px-24 text-white"
         style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="w-14 h-0.5 bg-[#6D8E4C] "></div>
          <p className="text-white/80 text-lg uppercase tracking-[6.37px] ">Portfolio</p>
        </div>
        
        <h1 className="text-6xl lg:text-5xl font-normal mb-6 max-w-md">Our Projects</h1>
        <p className="text-white/90 text-4xl lg:text-xl leading-12 max-w-5xl mb-24">
Explore our portfolio of exceptional interior design projects. Each space tells a unique story of innovation, craftsmanship, and attention to detail.        </p>

        <div className="flex flex-wrap gap-16 lg:gap-24">
          <div>
            <p className="text-6xl lg:text-5xl mb-2">500+</p>
            <p className="text-white/70 text-lg">Projects Completed</p>
          </div>
          <div>
            <p className="text-6xl lg:text-5xl mb-2">98%</p>
            <p className="text-white/70 text-lg">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-6xl lg:text-5xl mb-2">25+</p>
            <p className="text-white/70 text-lg">Awards Won</p>
          </div>
        </div>
      </section>

      <section className="p-24">
        <div className="mb-12 flex items-center space-x-4">
          <div className="w-14 h-0.5 bg-[#6D8E4C]"></div>
          <p className="text-[#606060] text-xl uppercase tracking-[2.8px] ">Showcase</p>
         
        </div>
         <h2 className="text-text-dark text-5xl lg:text-[64px] font-medium mb-18">
            Featured <span className="font-normal">Projects</span>
          </h2>

        <div className="flex flex-wrap gap-4 mb-16">
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              label={filter.label}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <CTA/>
    </section>
  )
}

export default Projects
