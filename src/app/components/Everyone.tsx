'use client';
import React from 'react';
import Image from 'next/image';

const Everyone = () => {
  return (
    <section className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* แก้ไขขนาดและตำแหน่งของวงกลม */}
        <div className="absolute -top-20 -right-10 w-[256px] h-[256px] bg-[#F7931B] opacity-6 rounded-full"></div>
        <div className="absolute -bottom-20 -left-10 w-[256px] h-[256px] bg-[#011133] opacity-6 rounded-full"></div>

        {/* LEFT - Image Section */}
        <div className="relative">
          <Image
            src="/photo-1605810230434-7631ac76ec81.png"
            alt="Community Program"
            className="rounded-xl w-full shadow-md"
            width={684}
            height={456}
          />

          {/* Top Right Box */}
          <div className="absolute -top-4 -right-6 bg-white shadow-lg rounded-lg px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#011133] text-white flex items-center justify-center text-sm">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-graduation-cap-icon lucide-graduation-cap"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
                <path d="M22 10v6"/>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
              </svg>
            </div>
            <div>
              <div className="text-[#011133] font-bold text-sm">50+</div>
              <div className="text-gray-500 text-sm">Community Programs</div>
            </div>
          </div>

          {/* Bottom Left Box */}
          <div className="absolute -bottom-5 -left-6 bg-white shadow-lg rounded-lg px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-orange-400 text-white flex items-center justify-center text-sm">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-users-icon lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <div className="text-[#011133] font-bold text-sm">40%</div>
              <div className="text-gray-500 text-sm">Scholarship Recipients</div>
            </div>
          </div>
        </div>

        {/* RIGHT - Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#011133]">
            Made for <span className="text-orange-500">Everyone</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            We believe that talent is universal, but opportunity is not. The Tiger Team Academy is committed to making quality tech education accessible to all, regardless of background or circumstance.
          </p>
          <p className="text-gray-600 mt-4 text-lg">
            Our scholarship programs, flexible payment options, and community outreach initiatives ensure that no passionate learner is left behind. We&apos;re building a movement that strengthens our country by empowering its most valuable resource—its people.
          </p>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-500 text-xl">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-award-icon lucide-award"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
                  <circle cx="12" cy="8" r="6"/>
                </svg>
              </div>
              <div>
                <h4 className="text-[#011133] font-semibold text-lg">Scholarships & Financial Aid</h4>
                <p className="text-1xl text-gray-600">
                  Dedicated funding for underrepresented groups and those with financial constraints.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-500 text-xl">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-users-icon lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <h4 className="text-[#011133] font-semibold text-lg">Community Tech Hubs</h4>
                <p className="text-1xl text-gray-600">
                  Free access to technology and learning resources in underserved areas.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-500 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>              </div>
              <div>
                <h4 className="text-[#011133] font-semibold text-lg">Mentorship Programs</h4>
                <p className="text-1xl text-gray-600">
                  Connecting students with industry professionals who volunteer their time and expertise.
                </p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Everyone;
