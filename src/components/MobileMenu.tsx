
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AnimatedLightButton from './AnimatedLightButton';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'workflow', label: 'Solution' },
    { id: 'apropos', label: 'À propos' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button 
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 px-6 py-8">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Boubacar Fall
                </span>
              </div>
            </div>
            
            <nav className="flex flex-col space-y-6 flex-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="mt-8">
              <AnimatedLightButton 
                onClick={() => {
                  window.open('https://cal.com/boubatest/30min', '_blank');
                  setIsOpen(false);
                }} 
                className="w-full justify-center"
              >
                Réserver un audit gratuit
              </AnimatedLightButton>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
