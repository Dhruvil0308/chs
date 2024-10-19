import React from 'react';
import { Amatic_SC } from "next/font/google";

const amatic700 = Amatic_SC({ weight: '400', subsets: ['latin'] });

function VideoPage() {
  return (
    <div className='relative h-screen overflow-hidden'>
      <video 
        className="absolute top-28 left-0 w-full h-full object-cover filter blur-0" 
        autoPlay 
        loop 
        muted 
      >
        <source src="/videos/horsevid.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col gap-10 items-center justify-center h-full">
        <h1 className="text-7xl font-semibold text-rose-950">A HUMAN LOOK FIRST</h1>
        <h1 className={`${amatic700.className} text-3xl text-red-950 z-10 `}>INVESTING IN OUR FUTURE.</h1>
      </div>
    </div>
  );
}

export default VideoPage;
