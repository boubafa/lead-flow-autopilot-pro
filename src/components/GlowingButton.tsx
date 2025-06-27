
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GlowingButton = ({ children, onClick, className = "" }: GlowingButtonProps) => {
  return (
    <div className="relative inline-block">
      <Button 
        className={`relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 font-semibold transition-all duration-300 ${className}`}
        onClick={onClick}
      >
        {children}
        {/* Animated glow effect */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-75 blur-sm animate-[glow_3s_ease-in-out_infinite_alternate]"></div>
      </Button>
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2);
          }
          100% {
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.5), 0 0 20px rgba(147, 51, 234, 0.3), 0 0 30px rgba(147, 51, 234, 0.2);
          }
        }
      `}</style>
    </div>
  );
};

export default GlowingButton;
