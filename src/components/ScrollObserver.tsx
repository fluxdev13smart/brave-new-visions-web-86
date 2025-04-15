
import React, { useEffect, useRef } from 'react';

interface ScrollObserverProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  onIntersect?: () => void;
}

export const ScrollObserver: React.FC<ScrollObserverProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  onIntersect
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            if (onIntersect) onIntersect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, onIntersect]);

  return (
    <div ref={ref} className={`section-fade-in ${className}`}>
      {children}
    </div>
  );
};
