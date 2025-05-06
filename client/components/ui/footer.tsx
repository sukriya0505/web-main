import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-col items-center justify-center py-12 bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {/* <Image src="/logo.svg" alt="SUKRIYA" width={32} height={32} /> */}
            <span className="font-bold text-xl">SUKRIYA</span>
          </div>
          <div className="text-center">
            <span className="text-lg font-medium">Discover artists on <span className="text-purple-500">SUKRIYA</span></span>
            <div className="text-gray-500 text-sm">Explore 1,420,069 creative talents worldwide</div>
          </div>
          <form className="flex w-full max-w-2xl mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-lg px-4 py-2 bg-gray-100 border-none outline-none"
            />
            <button
              type="submit"
              className="rounded-r-lg px-6 py-2 bg-purple-500 text-white font-medium"
            >
              Submit
            </button>
          </form>
          <div className="flex gap-8 mt-6 text-sm text-black">
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Artist support</a>
            <a href="#" className="hover:underline">Get in touch</a>
          </div>
          {/* <div className="flex gap-4 mt-4">
            <a href="#"><Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} /></a>
            <a href="#"><Image src="/instagram.svg" alt="Instagram" width={28} height={28} /></a>
            <a href="#"><Image src="/facebook.svg" alt="Facebook" width={28} height={28} /></a>
          </div> */}
        </div>
      </footer>
      <div className="w-full h-3 bg-purple-500 fixed bottom-0 left-0 z-50" />
    </>
  );
};