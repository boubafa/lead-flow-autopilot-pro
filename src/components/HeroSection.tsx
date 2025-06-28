import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target } from "lucide-react";
const HeroSection = () => {
  const scrollToOffre = () => {
    const offreSection = document.getElementById('offre');
    if (offreSection) {
      offreSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">IA + Automatisation = Résultats</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Convertissez vos leads automatiquement
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Système IA de qualification & relance 24/7 qui transforme vos prospects en clients pendant que vous dormez
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all" onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')}>
              Réserver une démo gratuite
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg" onClick={scrollToOffre}>
              Voir l'offre
            </Button>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-800">Capture Auto</h3>
                    <p className="text-sm text-blue-600">Depuis tous vos formulaires</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                    <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-800">IA Personnalisée</h3>
                    <p className="text-sm text-purple-600">Messages adaptatifs</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-100">
                    <ArrowRight className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-800">Conversion</h3>
                    <p className="text-sm text-blue-600">+300% de RDV qualifiés</p>
                  </div>
                </div>
                <div className="text-center">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;