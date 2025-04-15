
import React from 'react';
import { Logo } from './Logo';
import { FloatingShape } from './FloatingShape';

const Hero = () => {
  // Generate more random floating shapes for a richer background
  const generateFloatingShapes = (count: number) => {
    const shapes = [];
    const types = ['circle', 'square', 'triangle', 'star', 'hexagon', 'cross'];
    const colors = [
      'bg-purple-300', 'bg-purple-400', 'bg-purple-500', 
      'bg-orange-300', 'bg-orange-400', 
      'bg-blue-300', 'bg-blue-400',
      'bg-pink-300', 'bg-yellow-300',
      '#843e94', '#F97316', '#1EAEDB'
    ];
    const sizes = ['w-8 h-8', 'w-12 h-12', 'w-16 h-16', 'w-20 h-20', 'w-24 h-24', 'w-32 h-32', '30', '40', '50', '60'];
    const opacities = ['opacity-5', 'opacity-10', 'opacity-15', 'opacity-20', 'opacity-25'];
    const animations = ['animate-float', 'animate-float-delay-1', 'animate-float-delay-2', 'animate-float-delay-3'];
    
    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const opacity = opacities[Math.floor(Math.random() * opacities.length)];
      const animation = animations[Math.floor(Math.random() * animations.length)];
      
      // Random position
      const top = `${Math.floor(Math.random() * 100)}%`;
      const left = `${Math.floor(Math.random() * 100)}%`;
      const zIndex = Math.floor(Math.random() * 10);
      
      shapes.push(
        <div 
          key={i} 
          className={`absolute ${animation}`}
          style={{ 
            top, 
            left, 
            zIndex,
            filter: `blur(${Math.floor(Math.random() * 3) + 1}px)`
          }}
        >
          <FloatingShape 
            type={type as any} 
            color={color} 
            size={size} 
            opacity={opacity} 
          />
        </div>
      );
    }
    
    return shapes;
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-theme-language/30 dark:from-theme-dark/30 dark:to-theme-imagination/20 backdrop-blur-[2px]"></div>
      
      {/* Generate 40 random floating shapes */}
      {generateFloatingShapes(40)}
      
      {/* Main content with glassmorphism effect */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-panel py-10 px-8 max-w-2xl mx-auto">
          <Logo className="mb-4 justify-center" />
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Brave <span className="gradient-text gradient-education animate-reveal">New</span> Worlds
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Exploring the intersection of imagination, education, language, and justice through the lens of literature.
          </p>
          <a
            href="#imagination"
            className="bg-theme-education text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors animate-pulse-slow"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
