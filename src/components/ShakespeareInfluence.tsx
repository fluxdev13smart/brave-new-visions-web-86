
import React from 'react';
import { ScrollObserver } from './ScrollObserver';

export const ShakespeareInfluence: React.FC = () => {
  return (
    <ScrollObserver className="py-20 px-6 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Shakespeare and the Future</h2>
        <p className="text-center mb-12 text-gray-300 italic">"O brave new world, that has such people in't!"</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-theme-imagination">Legacy of Words</h3>
            <p className="text-gray-300">
              Shakespeare imagined new worlds with his words. He wrote of kingdoms, love, conflict, and truth. Though centuries old, his ideas are alive today. He showed that language can break barriers, challenge power, and reveal humanity.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-theme-education">Modern Relevance</h3>
            <p className="text-gray-300">
              As we face today's global challenges, we turn to voices like his—not because they are old, but because they are still true. His works remind us that the power of words to shape worlds remains as vital as ever.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 italic">
            Your Voice, Your World - This website is not just a poster. It is a reminder. A reminder that brave new worlds aren't made by chance—they're made by people who dare to imagine, speak, and act.
          </p>
          <p className="mt-4 text-gray-400">Use your words. Use your wisdom. Use your voice for justice.</p>
        </div>
      </div>
    </ScrollObserver>
  );
};
