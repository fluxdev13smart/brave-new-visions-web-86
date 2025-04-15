
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Word {
  text: string;
  size: string;
  color: string;
  delay: number;
}

interface WordCloudProps {
  title: string;
  words: Word[];
  className?: string;
}

export const WordCloud: React.FC<WordCloudProps> = ({ 
  title, 
  words,
  className = "" 
}) => {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  
  return (
    <div className={cn("py-8", className)}>
      <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
      
      {/* Original cloud - bigger and keeping the nice colors */}
      <div className="relative h-96 max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-6 overflow-hidden">
        {words.map((word, index) => {
          const isHovered = hoveredWord === word.text;
          const size = word.size.replace('text-xl', 'text-2xl').replace('text-2xl', 'text-3xl').replace('text-3xl', 'text-4xl');
          
          return (
            <div
              key={index}
              className={cn(
                `absolute transition-all duration-500 cursor-pointer text-shadow ${word.color} ${size}`,
                isHovered ? 'scale-125 z-10' : 'z-0',
                hoveredWord && !isHovered ? 'opacity-40' : 'opacity-100'
              )}
              style={{
                left: `${20 + (index % 5) * 17}%`,
                top: `${15 + (index * 13) % 60}%`,
                transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                transitionDelay: `${word.delay}ms`,
              }}
              onMouseEnter={() => setHoveredWord(word.text)}
              onMouseLeave={() => setHoveredWord(null)}
            >
              {word.text}
            </div>
          );
        })}
      </div>

      {/* New cloud - smaller with white and light purple */}
      <div className="relative h-48 max-w-lg mx-auto mt-8 bg-gradient-to-br from-white to-purple-100 rounded-lg p-4 overflow-hidden shadow-md">
        {words.map((word, index) => {
          const isHovered = hoveredWord === word.text;
          const size = word.size.replace('text-2xl', 'text-xl').replace('text-3xl', 'text-2xl').replace('text-4xl', 'text-3xl');
          
          return (
            <div
              key={index}
              className={cn(
                `absolute transition-all duration-500 cursor-pointer ${size}`,
                isHovered ? 'scale-125 z-10 text-purple-600' : 'text-white',
                hoveredWord && !isHovered ? 'opacity-40' : 'opacity-100'
              )}
              style={{
                left: `${20 + (index % 5) * 17}%`,
                top: `${10 + (index * 13) % 60}%`,
                transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                transitionDelay: `${word.delay}ms`,
                textShadow: '1px 1px 2px rgba(156, 139, 209, 0.3)'
              }}
              onMouseEnter={() => setHoveredWord(word.text)}
              onMouseLeave={() => setHoveredWord(null)}
            >
              {word.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
