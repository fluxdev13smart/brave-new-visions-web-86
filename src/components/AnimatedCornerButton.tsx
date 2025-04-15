
import React from 'react';
import { FloatingShape } from './FloatingShape';

export const AnimatedCornerButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Background shapes with blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-4 -left-4 animate-float-delay-1">
          <FloatingShape type="circle" color="bg-purple-300" size="w-12 h-12" opacity="opacity-20" className="blur-sm" />
        </div>
        <div className="absolute -bottom-4 -right-4 animate-float-delay-2">
          <FloatingShape type="square" color="bg-theme-education" size="w-10 h-10" opacity="opacity-20" className="blur-sm" />
        </div>
        <div className="absolute top-0 right-0 animate-float">
          <FloatingShape type="triangle" color="#9b87f5" size="30" opacity="opacity-20" className="blur-sm" />
        </div>
      </div>

      {/* Button content */}
      <div className="bg-[#9b87f5] text-white rounded-2xl px-4 py-2 
          transition-all duration-300 hover:shadow-xl shadow-lg dark:shadow-2xl animate-float font-playfair relative">
        <i>b</i>
        <i>y</i>
        <i> </i>
        <i>S</i>
        <i>a</i>
        <i>e</i>
        <i>i</i>
        <i>d</i>
        <i> </i>
        <i>M</i>
        <i>o</i>
        <i>h</i>
        <i>a</i>
        <i>m</i>
        <i>m</i>
        <i>a</i>
        <i>d</i>
      </div>
    </div>
  );
};

