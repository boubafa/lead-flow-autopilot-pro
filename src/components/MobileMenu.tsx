
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AnimatedLightButton from "./AnimatedLightButton";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false); // Fermer le menu après navigation
    }
  };

  const menuItems = [
    { label: "Solution", sectionId: "workflow" },
    { label: "À propos", sectionId: "apropos" },
    { label: "Contact", sectionId: "contact" }
  ];

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative z-50">
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col space-y-8 mt-8">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Boubacar Fall
              </span>
            </div>
            
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-left text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 border-b border-gray-100 hover:border-blue-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
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
