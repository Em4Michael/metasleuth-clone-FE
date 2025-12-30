// ==================== VideoHero.tsx ====================
'use client';

import React, { useState } from 'react';


const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">The Ultimate </span>
          <span className="text-amber-500">Tracking Platform</span>
          <span className="text-white"> for</span>
          <br />
          <span className="text-white">Your </span>
          <span className="text-amber-500">Crypto Journey</span>
        </h2>
        
        <p className="text-center text-gray-400 text-lg mb-12">
          Track funds across multiple blockchains effortlessly.
        </p>
        
        {/* Video Container */}
        <div className="mt-12 relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-900 via-stone-800 to-stone-900 p-1 shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1),transparent_70%)]"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-amber-500 opacity-20">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M40 10 L60 30 L40 50 L20 30 Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center px-6">
              <button 
                className="group w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto hover:bg-amber-700 hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl shadow-amber-600/50"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              <p className="text-2xl md:text-3xl text-white font-semibold mb-2">
                <span className="text-amber-500">Discover</span> the Ultimate Tracking Platform
              </p>
              <p className="text-xl text-gray-300">for Your Crypto Journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;