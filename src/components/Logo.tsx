
import React from 'react';
import { BookOpenCheck } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <BookOpenCheck className="w-6 h-6 text-theme-imagination animate-float" />
      </div>
      <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-theme-imagination via-purple-400 to-theme-language">
        Brave New Worlds
      </span>
    </div>
  );
};
