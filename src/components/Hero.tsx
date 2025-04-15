
import React from 'react';
import { Logo } from './Logo';
import { FloatingShape } from './FloatingShape';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Additional floating shapes with blur effect */}
      <div className="absolute top-20 left-10 animate-float-delay-1">
        <FloatingShape type="circle" color="bg-purple-300" size="w-24 h-24" opacity="opacity-20" />
      </div>
      
      <div className="absolute bottom-40 right-20 animate-float-delay-2">
        <FloatingShape type="square" color="bg-theme-imagination" size="w-32 h-32" opacity="opacity-10" />
      </div>
      
      <div className="absolute top-40 right-10 animate-float">
        <FloatingShape type="triangle" color="#843e94" size="60" opacity="opacity-15" />
      </div>
      
      <div className="absolute bottom-20 left-20 animate-float-delay-1">
        <FloatingShape type="star" color="#843e94" size="40" opacity="opacity-20" />
      </div>
      
      <div className="absolute top-1/3 right-1/4 animate-float-delay-2">
        <FloatingShape type="hexagon" color="bg-purple-400" size="50" opacity="opacity-20" />
      </div>
      
      <div className="absolute bottom-1/3 left-1/4 animate-float">
        <FloatingShape type="cross" color="bg-theme-education" size="w-16 h-16" opacity="opacity-15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Logo className="mb-4 justify-center" />
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          Brave <span className="gradient-text gradient-education animate-reveal">New</span> Worlds
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Exploring the intersection of imagination, education, language, and justice through the lens of literature.
        </p>
        <a
          href="#imagination"
          className="bg-theme-education text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Hero;
