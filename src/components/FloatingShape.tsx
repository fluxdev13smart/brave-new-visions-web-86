
import React from 'react';
import { cn } from '@/lib/utils';

type ShapeType = 'circle' | 'square' | 'triangle' | 'star' | 'hexagon' | 'cross';

interface FloatingShapeProps {
  type: ShapeType;
  color: string;
  size: string;
  className?: string;
  delayClass?: string;
  opacity?: string;
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({
  type,
  color,
  size,
  className = "",
  delayClass = "",
  opacity = "opacity-30" // Default low opacity
}) => {
  const renderShape = () => {
    switch (type) {
      case 'circle':
        return (
          <div className={cn(`rounded-full ${size} ${color} ${delayClass} animate-float ${opacity} blur-sm`, className)} />
        );
      case 'square':
        return (
          <div className={cn(`${size} ${color} ${delayClass} animate-float ${opacity} blur-sm rotate-45`, className)} />
        );
      case 'triangle':
        return (
          <div 
            className={cn(`${delayClass} animate-float ${opacity} blur-sm`, className)}
            style={{
              width: '0',
              height: '0',
              borderLeft: `${parseInt(size) / 2}px solid transparent`,
              borderRight: `${parseInt(size) / 2}px solid transparent`,
              borderBottom: `${size} solid var(--triangle-color)`,
              '--triangle-color': color.includes('bg-') ? `var(--${color.replace('bg-', '')})` : color,
            } as React.CSSProperties}
          />
        );
      case 'star':
        return (
          <div className={cn(`${delayClass} animate-float ${opacity} blur-sm`, className)}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill={color.includes('bg-') ? `var(--${color.replace('bg-', '')})` : color}
              />
            </svg>
          </div>
        );
      case 'hexagon':
        return (
          <div className={cn(`${delayClass} animate-float ${opacity} blur-sm`, className)}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" 
                fill={color.includes('bg-') ? `var(--${color.replace('bg-', '')})` : color}
              />
            </svg>
          </div>
        );
      case 'cross':
        return (
          <div className={cn(`${size} ${delayClass} animate-float ${opacity} blur-sm`, className)}>
            <div className={`w-full h-2 ${color} rounded-full absolute top-1/2 -translate-y-1/2`} />
            <div className={`h-full w-2 ${color} rounded-full absolute left-1/2 -translate-x-1/2`} />
          </div>
        );
      default:
        return <div className={cn(`rounded-full ${size} ${color} ${delayClass} animate-float ${opacity} blur-sm`, className)} />;
    }
  };

  return renderShape();
};
