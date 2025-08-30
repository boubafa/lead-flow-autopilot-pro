
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLightButton from "./AnimatedLightButton";

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
    { label: "Solution", id: "workflow" },
    { label: "Système", id: "systeme" },
    { label: "Portfolio", id: "portfolio" },
    { label: "À propos", id: "apropos" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      <button 
        className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-6">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
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
                    className="w-full text-center"
                  >
                    Réserver un audit gratuit
                  </AnimatedLightButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
