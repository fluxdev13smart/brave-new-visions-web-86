import React from 'react';
import { Logo } from './Logo';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <Logo className="mb-4 justify-center" /> {/* Added Logo component */}
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
