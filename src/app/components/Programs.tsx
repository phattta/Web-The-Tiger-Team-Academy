'use client';
import React from 'react';
import Image from 'next/image';

const programs = [ 
  {
    title: 'Full-Stack Web Development',
    description:
      'Master modern web technologies from front-end to back-end. Build responsive, scalable applications with React, Node.js, and more.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    borderColor: 'border-orange-500',
    iconColor: 'bg-orange-500',
  },
  {
    title: 'Machine Learning & AI Bootcamp',
    description:
      'Dive into AI algorithms, neural networks, and data science. Train models that solve real-world problems and drive innovation.',
      icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    borderColor: 'border-blue-500',
    iconColor: 'bg-blue-500',
  },
  {
    title: 'Tech for Social Impact',
    description:
      'Develop solutions that address community challenges. Learn how technology can be leveraged for positive social change and sustainability.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    borderColor: 'border-green-500',
    iconColor: 'bg-green-500',
  },
  {
    title: 'Startup & Innopreneurship Incubator',
    description:
      'Transform your ideas into viable businesses. Gain mentorship, funding opportunities, and the skills to lead innovation-driven ventures.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    borderColor: 'border-[#011133]',
    iconColor: 'bg-[#011133]',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-[#f7f9fc] py-20 px-4">
      <div id="our-programs" className="absolute -mt-[160px]"></div>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#011133]">Our Programs</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Comprehensive educational tracks designed to transform beginners into industry-ready professionals and innovators.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className={`border ${program.borderColor} rounded-lg p-6 bg-white shadow-sm flex flex-col justify-between`}
          >
            <div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${program.iconColor} mb-4`}>
                <Image
                  src={program.icon}
                  alt={program.title}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold text-[#011133] mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm">{program.description}</p>
            </div>
            <button className="mt-6 border border-[#011133] text-[#011133] rounded px-4 py-2 font-medium hover:bg-[#011133] hover:text-white transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
