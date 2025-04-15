
import React from 'react';

export const AnimatedCornerButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 shadow-[hsl(210deg_87%_36%)_0px_7px_0px_0px] bg-[#9b87f5] hover:shadow-none active:shadow-none active:translate-y-[7px] transition-all duration-[31ms] cubic-bezier(.5,.7,.4,1) rounded-2xl"
      aria-label="Scroll to top"
    >
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
    </button>
  );
};
