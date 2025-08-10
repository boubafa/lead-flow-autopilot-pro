import { ArrowRight, Play } from "lucide-react";
import AnimatedLightButton from "./AnimatedLightButton";
const SystemeSection = () => {
  return <section id="systeme" className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Système</span> en Action
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre IA transforme vos prospects en clients automatiquement
          </p>
        </div>

        {/* Section vidéo */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-4 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative">
                {/* Lecteur vidéo placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                        <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-white/90 text-lg font-medium mb-2">
                        Démonstration du système
                      </p>
                      <p className="text-white/70 text-sm">Vidéo à venir ici</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Gérez des leads automatiquement sans effort  et augmentez vos taux de conversion</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Notre Agent IA traite vos prospects 24h/24, les qualifie intelligemment et les convertit en rendez-vous qualifiés. Pendant que vous dormez, votre pipeline commercial se remplit automatiquement.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-blue-200 shadow-lg">
            <h4 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Prêt à voir ce agent transformer votre business ?</h4>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Réservez une démonstration personnalisée et découvrez comment automatiser votre prospection. </p>
            
            <AnimatedLightButton size="lg" onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')} className="px-8 py-4 text-xl font-semibold">
              <span className="flex items-center">
                Réservez votre démonstration personnalisée
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </AnimatedLightButton>
            
            <p className="text-sm text-gray-500 mt-4">⚡ Réponse garantie sous 48h • 🎯 Sans engagement</p>
          </div>
        </div>
      </div>
    </section>;
};
export default SystemeSection;