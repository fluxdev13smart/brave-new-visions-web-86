
import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-opacity duration-500">
      {/* Original loader - bigger and with nice colors */}
      <div className="card mb-8">
        <div className="loader" style={{ fontSize: "30px" }}>
          Loading
          <div className="words">
            <span className="word">design</span>
            <span className="word">worlds</span>
            <span className="word">dreams</span>
            <span className="word">ideas</span>
            <span className="word">design</span>
          </div>
        </div>
      </div>
      <div className="lava-lamp mb-8" style={{ height: "100px", width: "40px" }}>
        <div className="bubble"></div>
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
      </div>
      
      {/* New loader - smaller and with white/light purple */}
      <div className="bg-gradient-to-br from-white to-purple-100 p-3 rounded-lg shadow-md mt-2">
        <div className="flex items-center justify-center">
          <div className="text-white text-lg">
            Loading
            <span className="dots">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </span>
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-md">
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
