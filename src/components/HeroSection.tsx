import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target } from "lucide-react";
import AnimatedLightButton from "./AnimatedLightButton";
const HeroSection = () => {
  const scrollToSysteme = () => {
    const section = document.getElementById('systeme');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      <style>{`
        @keyframes float-bounce {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-15px) rotate(5deg) scale(1.05); }
          50% { transform: translateY(-10px) rotate(-3deg) scale(1.1); }
          75% { transform: translateY(-20px) rotate(8deg) scale(1.05); }
        }
        
        @keyframes pulse-glow-continuous {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.2);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6);
            transform: scale(1.02);
          }
        }
        
        @keyframes spin-wobble {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(1.05); }
          75% { transform: rotate(270deg) scale(1.15); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1) rotate(0deg); }
          14% { transform: scale(1.2) rotate(-5deg); }
          28% { transform: scale(1.1) rotate(3deg); }
          42% { transform: scale(1.3) rotate(-3deg); }
          56% { transform: scale(1.15) rotate(2deg); }
          70% { transform: scale(1.25) rotate(-1deg); }
        }
        
        .svg-float-bounce {
          animation: float-bounce 4s ease-in-out infinite;
        }
        
        .svg-spin-wobble {
          animation: spin-wobble 6s linear infinite;
        }
        
        .svg-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        
        .card-pulse-glow {
          animation: pulse-glow-continuous 3s ease-in-out infinite;
        }
      `}</style>
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-blue-600 svg-heartbeat" />
              <span className="text-sm font-medium text-blue-800">IA + Automatisation = Résultats</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Convertissez vos leads automatiquement
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">Agent IA de qualification & Prise de RDV 24/7 qui transforme vos prospects en clients pendant que vous dormez</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <AnimatedLightButton size="lg" onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')} className="px-8 py-4 text-lg">
                <span className="flex items-center">
                  Réserver une démo gratuite
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </AnimatedLightButton>
              <Button variant="outline" size="lg" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg transition-all duration-200 hover:scale-105 hover:shadow-md active:scale-95" onClick={scrollToSysteme}>
                Voir la vidéo du système en action
              </Button>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-8 relative overflow-hidden card-pulse-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                <div className="relative">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
                      <Target className="w-8 h-8 text-blue-600 mx-auto mb-2 svg-float-bounce" />
                      <h3 className="font-semibold text-blue-800">Capture Auto</h3>
                      <p className="text-sm text-blue-600">Depuis whatsApp ou tous vos formulaires et réseaux sociaux</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
                      <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2 svg-spin-wobble" />
                      <h3 className="font-semibold text-purple-800">IA Personnalisée</h3>
                      <p className="text-sm text-purple-600">Messages adaptatifs</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-100 transition-all duration-300 hover:scale-105 hover:shadow-md">
                      <ArrowRight className="w-8 h-8 text-blue-600 mx-auto mb-2 svg-heartbeat" />
                      <h3 className="font-semibold text-blue-800">Conversion</h3>
                      <p className="text-sm text-blue-600">+200% de RDV qualifiés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default HeroSection;