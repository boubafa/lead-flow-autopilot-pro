
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GlowingButton = ({ children, onClick, className = "" }: GlowingButtonProps) => {
  return (
    <Button 
      className={`relative btn-led-border btn-led-flash bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 overflow-hidden ${className}`}
      onClick={onClick}
      style={{
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 3s ease infinite'
      }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
    </Button>
  );
};

export default GlowingButton;
