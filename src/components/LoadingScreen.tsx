
import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="lava-lamp">
        <div className="bubble"></div>
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
      </div>
      <p className="mt-4 text-xl font-medium animate-pulse">Loading</p>
    </div>
  );
};
