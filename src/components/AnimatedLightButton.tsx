
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface AnimatedLightButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "lg" | "default";
  variant?: "default" | "outline";
}

const AnimatedLightButton = ({ children, onClick, className = "", size = "default", variant = "default" }: AnimatedLightButtonProps) => {
  return (
    <>
      <style>{`
        @keyframes light-sweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) translateY(200%) rotate(45deg);
          }
        }
        
        @keyframes border-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3), 0 0 10px rgba(139, 92, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.6), 0 0 25px rgba(139, 92, 246, 0.4);
          }
        }
        
        .light-sweep-btn {
          position: relative;
          overflow: hidden;
          animation: border-glow 3s ease-in-out infinite;
        }
        
        .light-sweep-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            transparent,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.1),
            transparent,
            transparent
          );
          animation: light-sweep 3s linear infinite;
          pointer-events: none;
        }
        
        .light-sweep-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(45deg, 
            rgba(59, 130, 246, 0.8), 
            rgba(139, 92, 246, 0.8), 
            rgba(59, 130, 246, 0.8)
          );
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: light-sweep 3s linear infinite;
        }
      `}</style>
      
      <Button 
        className={`light-sweep-btn relative ${
          variant === "default" 
            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
            : "border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
        } font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
        onClick={onClick}
        size={size}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    </>
  );
};

export default AnimatedLightButton;
