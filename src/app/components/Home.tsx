import React from 'react'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white flex flex-col items-center justify-center px-4 sm:px-6">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[rgb(247,147,27)] opacity-5 rounded-bl-full z-0"></div>
            <div className="absolute bottom-0 left-0 md:-bottom-100 lg:bottom-0 w-2/3 h-1/2 md:w-2/3 md:h-5/6 lg:w-2/3 lg:h-1/2 bg-[#011133] opacity-15 rounded-tr-full z-0"></div>

            {/* Section Container */}
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-[40px] lg:mt-[135px]">

                {/* Left Content */}
                <div className="flex flex-col justify-center mt-[50px] md:mt-[100px]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1c39] mb-4 leading-tight">
                        MOVE THAILAND<br />
                        <span className="text-orange-500">CHANGE THE WORLD.</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
                        We are challenged to both study and work to experience firsthand the life of a startup.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow flex items-center justify-center gap-2 text-sm sm:text-base">
                            Start Your Journey
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </button>
                        <button className="border border-gray-600 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg text-sm sm:text-base">
                            Explore Programs
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative mt-8 md:mt-0">
                    <div className="relative rounded-lg shadow-lg">
                        <Image src="/photo-1581091226825-a6a2a5aee158.png"
                            alt="Student working on tech"
                            width={700} height={500}
                            className="object-cover w-full h-auto"
                        />

                        {/* 20+ Startup Launches Badge */}
                        <div className="absolute -top-3 sm:-top-5 -right-3 sm:-right-6 text-white text-xs sm:text-sm px-4 py-4 rounded-lg shadow-lg backdrop-blur-sm bg-[#011133]/90 animate-[pulse_3s_ease-in-out_infinite] group">
                            <div className="font-bold">20+</div>
                            <div>Startup Launches</div>
                        </div>

                        {/* Text over image */}
                        <div className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 md:px-6 lg:px-8 pb-2 sm:pb-3 md:pb-4 lg:pb-6 pt-8 sm:pt-12 md:pt-16 bg-gradient-to-t from-black/50 to-transparent">
                            <p className="text-white text-base sm:text-lg lg:text-lg xl:text-lg font-semibold text-center sm:-ml-[240px] lg:-ml-[21px] xl:-ml-[140px]">
                                Join a community of innovators and changemakers.
                            </p>
                        </div>

                        {/* 500+ Graduates Badge */}
                        <div className="absolute -bottom-[5%] -left-[3%] text-white text-sm font-semibold px-4 py-4 rounded-lg shadow-lg backdrop-blur-sm bg-[#F7931B]/90 animate-[pulse_3s_ease-in-out_infinite] group">
                            <div className="font-bold">500+</div>
                            <div>Graduates</div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex justify-center pb-2 animate-bounce cursor-pointer mt-8 sm:mt-[60px] lg:-mt-[0px] xl:mt-[80px]">
                <a href="#our-programs" className="text-xs sm:text-sm text-gray-500">
                    Scroll to explore
                </a>
            </div>
            <div className="hidden md:flex justify-center mb-6 sm:mb-8 animate-bounce cursor-pointer">
                <a href="#our-programs" className="text-gray-500">
                    <Image
                        src="icon20.svg"
                        alt='icon29'
                        className='w-4 h-4 sm:w-6 sm:h-6'
                        width={24}
                        height={24}
                    />
                </a>
            </div>
        </div>
    )
}
