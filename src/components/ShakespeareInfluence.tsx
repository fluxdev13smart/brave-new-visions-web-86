
import React from 'react';
import { ScrollObserver } from './ScrollObserver';

export const ShakespeareInfluence: React.FC = () => {
  return (
    <ScrollObserver className="py-20 px-6 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Shakespeare's Influence</h2>
        <p className="text-center mb-12 text-gray-300 italic">"O brave new world, that has such people in't!"</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-theme-imagination">The Tempest</h3>
            <p className="text-gray-300 mb-4">
              The phrase "brave new world" itself comes from Shakespeare's play "The Tempest," where Miranda, who has grown up isolated on an island, exclaims with wonder upon seeing new people.
            </p>
            <p className="text-gray-300">
              This famous line captures the essence of our theme - encountering new possibilities with awe and optimism, while also reflecting on what makes a world truly "brave" and new.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-theme-education">Language as Power</h3>
            <p className="text-gray-300 mb-4">
              Shakespeare revolutionized language, creating new words and phrases that expanded the possibilities of expression. His mastery shows how language shapes thought and enables new worlds.
            </p>
            <p className="text-gray-300">
              Just as Shakespeare's characters use language to transform their realities, we too can use language to imagine and create brave new worlds of justice and fairness.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 italic">
            "We are such stuff as dreams are made on, and our little life is rounded with a sleep."
          </p>
          <p className="mt-2 text-gray-400">— The Tempest, Act 4, Scene 1</p>
        </div>
      </div>
    </ScrollObserver>
  );
};
