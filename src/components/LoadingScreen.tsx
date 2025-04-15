
import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-opacity duration-500">
      <div className="lava-lamp mb-4" style={{ background: '#843e94' }}>
        <div className="bubble"></div>
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
      </div>
      <p className="mt-2 text-md">
        <span className="text-gray-500 mr-1">by</span>
        <span className="text-gray-700 font-semibold">Saeid Mohammad</span>
      </p>
      <p className="mt-2 text-sm text-gray-600 text-center max-w-xs">
        The loading screen will complete within 6 seconds. 
        If it takes longer, please refresh the page.
      </p>
    </div>
  );
};
