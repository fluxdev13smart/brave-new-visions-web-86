
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export const AnimatedCornerButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 shadow-[hsl(210deg_87%_36%)_0px_7px_0px_0px] bg-[hsl(210deg_100%_44%)] hover:shadow-none active:shadow-none active:translate-y-[7px] transition-all duration-[31ms] cubic-bezier(.5,.7,.4,1)"
      alt="TOP"
    >
      <i>T</i>
      <i>O</i>
      <i>P</i>
      <ArrowUp className="ml-2" />
    </button>
  );
};
