
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import GlowingButton from "./GlowingButton";

const OffreSection = () => {
  return (
    <section id="offre" className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Notre <span className="text-green-600">Offre Exclusive</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformez vos leads en clients avec notre système d'automatisation IA
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                🚀 Système de Conversion IA Complet
              </h3>
              <div className="text-5xl font-bold text-green-600 mb-2">997€</div>
              <div className="text-gray-600">Configuration + Formation incluses</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Capture automatique des leads</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Messages IA personnalisés</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Relances intelligentes automatiques</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Synchronisation CRM</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dashboard de suivi complet</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Support et formation personnalisée</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')}
              >
                Réserver ma démo gratuite
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffreSection;
