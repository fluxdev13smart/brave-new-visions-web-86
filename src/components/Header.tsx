
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-theme-dark/90 shadow-md py-3' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold gradient-text gradient-imagination">
          Brave New Worlds
        </div>
        
        {isMobile ? (
          <>
            <button 
              className="p-2 rounded-md focus:outline-none" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 mb-1.5 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
            
            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 pt-20`}>
              <nav className="container mx-auto px-4">
                <ul className="flex flex-col space-y-6 text-center text-lg">
                  <li>
                    <a 
                      href="#imagination" 
                      className="hover:text-theme-imagination transition-colors block py-2"
                      onClick={closeMenu}
                    >
                      Imagination
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#education" 
                      className="hover:text-theme-education transition-colors block py-2"
                      onClick={closeMenu}
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#language" 
                      className="hover:text-gray-600 transition-colors block py-2"
                      onClick={closeMenu}
                    >
                      Language
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#justice" 
                      className="hover:text-theme-justice transition-colors block py-2"
                      onClick={closeMenu}
                    >
                      Justice
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#shakespeare" 
                      className="hover:text-purple-400 transition-colors block py-2"
                      onClick={closeMenu}
                    >
                      Shakespeare
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#goals" 
                      className="hover:text-theme-fairness transition-colors block py-2"
                      onClick={closeMenu}
                    >
                      UN Goals
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        ) : (
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#imagination" className="hover:text-theme-imagination transition-colors">
                  Imagination
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-theme-education transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#language" className="hover:text-gray-600 transition-colors">
                  Language
                </a>
              </li>
              <li>
                <a href="#justice" className="hover:text-theme-justice transition-colors">
                  Justice
                </a>
              </li>
              <li>
                <a href="#shakespeare" className="hover:text-purple-400 transition-colors">
                  Shakespeare
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-theme-fairness transition-colors">
                  UN Goals
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
