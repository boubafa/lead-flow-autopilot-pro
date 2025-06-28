
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
      className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 font-semibold transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default GlowingButton;
