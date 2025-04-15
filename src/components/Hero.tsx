
import React from 'react';
import { Logo } from './Logo';
import { FloatingShape } from './FloatingShape';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-theme-language/30 dark:from-theme-dark/30 dark:to-theme-imagination/20 backdrop-blur-[2px]"></div>
      
      {/* Additional floating shapes with blur effect */}
      <div className="absolute top-20 left-10 animate-float-delay-1">
        <FloatingShape type="circle" color="bg-purple-300" size="w-24 h-24" opacity="opacity-20" />
      </div>
      
      <div className="absolute bottom-40 right-20 animate-float-delay-2">
        <FloatingShape type="square" color="bg-theme-education" size="w-32 h-32" opacity="opacity-20" />
      </div>
      
      <div className="absolute top-40 right-10 animate-float">
        <FloatingShape type="triangle" color="#FF8E3C" size="60" opacity="opacity-20" />
      </div>
      
      <div className="absolute bottom-20 left-20 animate-float-delay-1">
        <FloatingShape type="star" color="#9b87f5" size="50" opacity="opacity-25" />
      </div>
      
      <div className="absolute top-1/3 right-1/4 animate-float-delay-2">
        <FloatingShape type="hexagon" color="bg-purple-400" size="50" opacity="opacity-20" />
      </div>
      
      <div className="absolute bottom-1/3 left-1/4 animate-float">
        <FloatingShape type="cross" color="bg-theme-education" size="w-16 h-16" opacity="opacity-25" />
      </div>
      
      {/* New floating shapes for more density */}
      <div className="absolute top-2/3 right-1/3 animate-float-delay-3">
        <FloatingShape type="circle" color="bg-theme-fairness" size="w-20 h-20" opacity="opacity-25" />
      </div>
      
      <div className="absolute top-1/4 left-1/3 animate-float-delay-2">
        <FloatingShape type="star" color="bg-orange-300" size="45" opacity="opacity-30" />
      </div>
      
      <div className="absolute bottom-1/4 right-1/3 animate-float-delay-1">
        <FloatingShape type="triangle" color="#1EAEDB" size="45" opacity="opacity-25" />
      </div>
      
      <div className="absolute top-1/2 left-40 animate-float-delay-3">
        <FloatingShape type="hexagon" color="bg-yellow-300" size="40" opacity="opacity-25" />
      </div>
      
      <div className="absolute bottom-40 left-1/3 animate-float">
        <FloatingShape type="square" color="bg-theme-justice" size="w-16 h-16" opacity="opacity-30" />
      </div>

      {/* Added new shapes for more density */}
      <div className="absolute top-1/4 right-1/4 animate-float-delay-3">
        <FloatingShape type="circle" color="bg-red-300" size="w-28 h-28" opacity="opacity-20" />
      </div>
      
      <div className="absolute bottom-1/3 right-60 animate-float-delay-2">
        <FloatingShape type="hexagon" color="bg-pink-400" size="50" opacity="opacity-20" />
      </div>
      
      <div className="absolute top-2/3 left-60 animate-float-delay-1">
        <FloatingShape type="triangle" color="#33C3F0" size="55" opacity="opacity-15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Logo className="mb-4 justify-center" />
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          Brave <span className="gradient-text gradient-education animate-reveal">New</span> Worlds
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Exploring the intersection of imagination, education, language, and justice through the lens of literature.
        </p>
        <a
          href="#imagination"
          className="bg-theme-education hover:bg-opacity-90 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors animate-pulse-slow shadow-lg"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Hero;
