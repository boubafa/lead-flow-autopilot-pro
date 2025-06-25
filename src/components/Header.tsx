
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AutoConvert Pro
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">Solution</a>
          <a href="#tarifs" className="text-gray-600 hover:text-blue-600 transition-colors">Tarifs</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6">
          Réserver une démo
        </Button>
      </div>
    </header>
  );
};

export default Header;
