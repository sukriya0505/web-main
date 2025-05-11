import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-[500px] text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold mb-4">
            Discover artists on{' '}
            <span className="text-[#7C3AED]">SUKRIYA</span>
          </h1>
          <p className="text-lg md:text-[20px] text-gray-500 mb-8">
            Explore 1,420,069 creative talents worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9] transition-colors">
              <Link href="/signup-start">Sign Up</Link>
            </button>
            <button className="px-6 py-3 border border-gray-200 rounded-lg hover:border-[#7C3AED] transition-colors">
              <Link href="/login-fill-email">Log In</Link>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-auto lg:flex-1 lg:ml-auto lg:-mr-32">
          <div className="relative w-full aspect-square lg:w-[800px] lg:h-[800px] bg-gray-50 rounded-2xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/7Ca0X3xcBpa5VjfvoMT5xob2vc.jpg?scale-down-to=2048"
              alt="Creative artists showcase"
              className="object-cover"
              priority
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};
