import { Button } from "@/components/ui/button";
const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-transform duration-200 hover:scale-110 hover:rotate-6">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Boubacar Fall</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('workflow')} className="text-gray-600 hover:text-blue-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Solution</button>
          
          <button onClick={() => scrollToSection('apropos')} className="text-gray-600 hover:text-blue-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">À propos</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Contact</button>
        </nav>
        <Button className="relative btn-led-border btn-led-flash bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 overflow-hidden" onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')}>
          <span className="relative z-10">Réserver un audit gratuit</span>
          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-200"></div>
        </Button>
      </div>
    </header>;
};
export default Header;