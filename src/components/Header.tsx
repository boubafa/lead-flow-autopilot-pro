import AnimatedLightButton from "./AnimatedLightButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transform transition-transform duration-200 hover:scale-110 hover:rotate-6 overflow-hidden">
            <img 
              src="/lovable-uploads/81abc45f-d971-42b9-940c-b02b17e0d096.png" 
              alt="Boubacar Fall" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Boubacar Fall
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('workflow')} 
            className="text-gray-600 hover:text-blue-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Solution
          </button>
          <button 
            onClick={() => scrollToSection('systeme')} 
            className="text-gray-600 hover:text-blue-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Système
          </button>
          <button 
            onClick={() => scrollToSection('apropos')} 
            className="text-gray-600 hover:text-blue-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            À propos
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-600 hover:text-blue-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <AnimatedLightButton 
              onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')} 
              className="px-4 md:px-6 text-sm md:text-base"
            >
              Réserver un audit gratuit
            </AnimatedLightButton>
          </div>
          
          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
