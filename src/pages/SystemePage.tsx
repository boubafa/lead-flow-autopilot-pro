
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AnimatedLightButton from "@/components/AnimatedLightButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SystemePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-32 pb-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          {/* En-tête de la page */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Découvrez notre système en action
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Voyez comment notre IA transforme vos prospects en clients automatiquement
            </p>
          </motion.div>

          {/* Section vidéo principale */}
          <motion.div variants={itemVariants} className="mb-16">
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
                          Vidéo de démonstration
                        </p>
                        <p className="text-white/70 text-sm">
                          Cliquez pour remplacer par votre vidéo
                        </p>
                      </div>
                    </div>
                    
                    {/* Instructions pour remplacer la vidéo */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                        <p className="font-medium mb-1">🎥 Pour intégrer votre vidéo :</p>
                        <p className="text-white/80">
                          Remplacez cette section par un lecteur YouTube, Vimeo ou uploadez directement votre fichier vidéo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texte descriptif des bénéfices */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Générez des leads automatiquement, relancez-les sans effort et augmentez vos taux de conversion
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Notre système d'IA capture vos prospects 24h/24, les qualifie intelligemment et les convertit en rendez-vous qualifiés. 
                Pendant que vous dormez, votre pipeline commercial se remplit automatiquement.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-blue-200 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Prêt à automatiser votre prospection ?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Découvrez lors d'un audit gratuit comment ce système peut transformer votre business. 
                Aucun engagement, résultats garantis sous 30 jours.
              </p>
              
              <AnimatedLightButton 
                size="lg" 
                onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')}
                className="px-8 py-4 text-xl font-semibold"
              >
                <span className="flex items-center">
                  Réservez un audit gratuit
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </AnimatedLightButton>
              
              <p className="text-sm text-gray-500 mt-4">
                ⚡ Réponse garantie sous 24h • 🎯 Sans engagement
              </p>
            </div>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default SystemePage;
