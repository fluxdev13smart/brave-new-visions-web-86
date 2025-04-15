
import React from 'react';
import { cn } from '@/lib/utils';

type ShapeType = 'circle' | 'square' | 'triangle' | 'star';

interface FloatingShapeProps {
  type: ShapeType;
  color: string;
  size: string;
  className?: string;
  delayClass?: string;
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({
  type,
  color,
  size,
  className = "",
  delayClass = "",
}) => {
  const renderShape = () => {
    switch (type) {
      case 'circle':
        return (
          <div className={cn(`rounded-full ${size} ${color} ${delayClass} animate-float opacity-70`, className)} />
        );
      case 'square':
        return (
          <div className={cn(`${size} ${color} ${delayClass} animate-float opacity-70 rotate-45`, className)} />
        );
      case 'triangle':
        return (
          <div 
            className={cn(`${delayClass} animate-float opacity-70`, className)}
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
          <div className={cn(`${delayClass} animate-float opacity-70`, className)}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill={color.includes('bg-') ? `var(--${color.replace('bg-', '')})` : color}
              />
            </svg>
          </div>
        );
      default:
        return <div className={cn(`rounded-full ${size} ${color} ${delayClass} animate-float opacity-70`, className)} />;
    }
  };

  return renderShape();
};
