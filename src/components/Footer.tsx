
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Brave New Worlds</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A digital poster exploring imagination, education, language, justice, and fairness
          </p>
          
          <div className="flex justify-center flex-wrap gap-2 mb-6">
            <a 
              href="#imagination" 
              className="px-3 py-1 rounded-full text-sm bg-theme-imagination text-white hover:opacity-90 transition"
            >
              Imagination
            </a>
            <a 
              href="#education" 
              className="px-3 py-1 rounded-full text-sm bg-theme-education text-white hover:opacity-90 transition"
            >
              Education
            </a>
            <a 
              href="#language" 
              className="px-3 py-1 rounded-full text-sm bg-gray-700 text-white hover:opacity-90 transition"
            >
              Language
            </a>
            <a 
              href="#justice" 
              className="px-3 py-1 rounded-full text-sm bg-theme-justice text-white hover:opacity-90 transition"
            >
              Justice
            </a>
            <a 
              href="#shakespeare" 
              className="px-3 py-1 rounded-full text-sm bg-purple-700 text-white hover:opacity-90 transition"
            >
              Shakespeare
            </a>
            <a 
              href="#goals" 
              className="px-3 py-1 rounded-full text-sm bg-theme-fairness text-white hover:opacity-90 transition"
            >
              UN Goals
            </a>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Created for the "Brave New Worlds" school competition</p>
            <p className="mt-2">Inspired by Shakespeare and the UN Global Goals</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
