
import React from 'react';
import { ScrollObserver } from './ScrollObserver';

export const UnGoals: React.FC = () => {
  return (
    <ScrollObserver className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Connected to UN Global Goals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quality Education Goal */}
          <div className="bg-[#C5192D] text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold mr-4">4</div>
              <h3 className="text-xl font-semibold">Quality Education</h3>
            </div>
            <p className="mb-4">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.</p>
            <p className="text-sm">Our digital poster advocates for quality education as a fundamental right and a pathway to creating brave new worlds of opportunity and innovation.</p>
          </div>
          
          {/* Justice/Strong Communities Goal */}
          <div className="bg-[#0A97D9] text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold mr-4">16</div>
              <h3 className="text-xl font-semibold">Peace, Justice and Strong Institutions</h3>
            </div>
            <p className="mb-4">Promote peaceful and inclusive societies for sustainable development, provide access to justice for all.</p>
            <p className="text-sm">We highlight how language, fairness, and justice are essential in building strong communities and creating new worlds where everyone has equal opportunity.</p>
          </div>
        </div>
      </div>
    </ScrollObserver>
  );
};
