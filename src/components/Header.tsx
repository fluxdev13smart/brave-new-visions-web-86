
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Logo } from './Logo';
import { SegmentedTabs } from './SegmentedTabs';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('Imagination');
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

  const handleTabChange = (option: string) => {
    setActiveTab(option);
    const sectionId = option.toLowerCase();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    
    if (isMobile && isMenuOpen) {
      closeMenu();
    }
  };
  
  const menuOptions = ['Imagination', 'Education', 'Language', 'Justice', 'Shakespeare', 'UN Goals'];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-theme-dark/90 shadow-md py-3' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 flex flex-col justify-between items-center gap-4">
        <div className="w-full flex justify-between items-center">
          <Logo />
          
          {isMobile ? (
            <button 
              className="p-2 rounded-md focus:outline-none" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 mb-1.5 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          ) : null}
        </div>
        
        {!isMobile && (
          <div className="mt-2 mb-1">
            <SegmentedTabs 
              options={menuOptions} 
              activeTab={activeTab}
              onChange={handleTabChange}
            />
          </div>
        )}
        
        {/* Mobile Menu */}
        {isMobile && (
          <div className={`fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 pt-20`}>
            <nav className="container mx-auto px-4">
              <div className="flex flex-col items-center mb-8">
                <SegmentedTabs 
                  options={menuOptions} 
                  activeTab={activeTab}
                  onChange={handleTabChange}
                />
              </div>
              
              <ul className="flex flex-col space-y-6 text-center text-lg">
                <li>
                  <a 
                    href="#imagination" 
                    className="hover:text-theme-imagination transition-colors block py-2"
                    onClick={() => {
                      setActiveTab('Imagination');
                      closeMenu();
                    }}
                  >
                    Imagination
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    className="hover:text-theme-education transition-colors block py-2"
                    onClick={() => {
                      setActiveTab('Education');
                      closeMenu();
                    }}
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a 
                    href="#language" 
                    className="hover:text-gray-600 transition-colors block py-2"
                    onClick={() => {
                      setActiveTab('Language');
                      closeMenu();
                    }}
                  >
                    Language
                  </a>
                </li>
                <li>
                  <a 
                    href="#justice" 
                    className="hover:text-theme-justice transition-colors block py-2"
                    onClick={() => {
                      setActiveTab('Justice');
                      closeMenu();
                    }}
                  >
                    Justice
                  </a>
                </li>
                <li>
                  <a 
                    href="#shakespeare" 
                    className="hover:text-purple-400 transition-colors block py-2"
                    onClick={() => {
                      setActiveTab('Shakespeare');
                      closeMenu();
                    }}
                  >
                    Shakespeare
                  </a>
                </li>
                <li>
                  <a 
                    href="#goals" 
                    className="hover:text-theme-fairness transition-colors block py-2"
                    onClick={() => {
                      setActiveTab('UN Goals');
                      closeMenu();
                    }}
                  >
                    UN Goals
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
