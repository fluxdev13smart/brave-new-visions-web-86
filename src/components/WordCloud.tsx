
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
      
      <div className="relative h-72 max-w-xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-hidden">
        {words.map((word, index) => {
          const isHovered = hoveredWord === word.text;
          
          return (
            <div
              key={index}
              className={cn(
                `absolute transition-all duration-500 cursor-pointer text-shadow ${word.color} ${word.size}`,
                isHovered ? 'scale-125 z-10' : 'z-0',
                hoveredWord && !isHovered ? 'opacity-40' : 'opacity-100'
              )}
              style={{
                left: `${15 + (index % 4) * 25}%`,
                top: `${15 + Math.floor(index / 4) * 25}%`,
                transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                transitionDelay: `${word.delay}ms`,
                whiteSpace: 'nowrap',
                overflow: 'visible',
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
