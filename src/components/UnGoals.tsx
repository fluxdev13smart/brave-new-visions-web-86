
import React from 'react';
import { ScrollObserver } from './ScrollObserver';

export const UnGoals: React.FC = () => {
  return (
    <ScrollObserver className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">UN Global Goals</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quality Education Goal */}
          <div className="bg-[#C5192D] text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold mr-4">4</div>
              <h3 className="text-xl font-semibold">Education for All</h3>
            </div>
            <p className="mb-4">The world needs more open minds. That's why education is a right, not a privilege.</p>
            <p className="text-sm">Goal 4 of the United Nations Sustainable Development Goals calls for quality education for all. That means books, teachers, support, and safe schools for every child, everywhere. It means hope. And it means action.</p>
          </div>
          
          {/* Justice/Strong Communities Goal */}
          <div className="bg-[#0A97D9] text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold mr-4">16</div>
              <h3 className="text-xl font-semibold">Justice in Action</h3>
            </div>
            <p className="mb-4">Goal 16 of the UN's global mission is about peace, justice, and strong institutions.</p>
            <p className="text-sm">That means laws that protect people, leaders who serve fairly, and communities that listen. Justice is more than a word. It's fairness in real life. It's systems that care, courts that work, and voices that are never silenced.</p>
          </div>
        </div>
      </div>
    </ScrollObserver>
  );
};
