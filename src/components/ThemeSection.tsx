
import React from 'react';
import { ScrollObserver } from './ScrollObserver';
import { FloatingShape } from './FloatingShape';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ThemeSectionProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradientClass: string;
  number: string;
  quote?: string;
  quoteAuthor?: string;
  children?: React.ReactNode;
  className?: string;
  shapeColor: string;
  imageUrl?: string;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({
  title,
  subtitle,
  description,
  color,
  gradientClass,
  number,
  quote,
  quoteAuthor,
  children,
  className = "",
  shapeColor,
  imageUrl
}) => {
  return (
    <ScrollObserver className={cn("min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-20", className)}>
      {/* Original shapes */}
      <div className="absolute -right-12 top-20">
        <FloatingShape 
          type="circle" 
          color={`bg-${shapeColor}`} 
          size="w-40 h-40" 
          delayClass="animate-float-delay-1"
        />
      </div>
      
      <div className="absolute -left-8 bottom-40">
        <FloatingShape 
          type="square" 
          color={`bg-${shapeColor}`} 
          size="w-20 h-20" 
          delayClass="animate-float-delay-2"
        />
      </div>

      {/* Additional floating shapes */}
      <div className="absolute top-1/4 right-1/4">
        <FloatingShape 
          type="hexagon" 
          color={`bg-${shapeColor}`} 
          size="w-32 h-32" 
          delayClass="animate-float"
          opacity="opacity-10"
        />
      </div>

      <div className="absolute bottom-1/4 left-1/3">
        <FloatingShape 
          type="triangle" 
          color={`bg-${shapeColor}`} 
          size="80" 
          delayClass="animate-float-delay-3"
          opacity="opacity-10"
        />
      </div>

      <div className="absolute top-1/3 right-1/3">
        <FloatingShape 
          type="circle" 
          color={`bg-${shapeColor}`} 
          size="w-24 h-24" 
          delayClass="animate-float-delay-2"
          opacity="opacity-10"
        />
      </div>

      <div className="absolute bottom-20 right-1/4">
        <FloatingShape 
          type="cross" 
          color={`bg-${shapeColor}`} 
          size="w-16 h-16" 
          delayClass="animate-float-delay-1"
          opacity="opacity-10"
        />
      </div>
      
      <div className="text-9xl font-bold absolute top-10 right-10 opacity-10">{number}</div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <h2 className={`text-sm uppercase tracking-wider mb-2 ${color}`}>{subtitle}</h2>
        <h1 className={`text-5xl md:text-6xl font-bold mb-6 gradient-text ${gradientClass}`}>{title}</h1>
        
        {imageUrl && (
          <div className="w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img
                src={imageUrl}
                alt={`${title} illustration`}
                className="object-cover w-full h-full rounded-lg"
              />
            </AspectRatio>
          </div>
        )}
        
        <p className="text-lg mb-8 leading-relaxed">{description}</p>
        
        {quote && (
          <blockquote className="italic text-xl mb-4 border-l-4 pl-4 py-2 border-gray-300">
            "{quote}"
            {quoteAuthor && <footer className="text-right text-sm mt-2">— {quoteAuthor}</footer>}
          </blockquote>
        )}
        
        {children}
      </div>
    </ScrollObserver>
  );
};

