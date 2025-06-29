
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";
import InfiniteTestimonialCarousel from "./InfiniteTestimonialCarousel";
import GlowingButton from "./GlowingButton";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à <span className="text-yellow-400">automatiser</span> votre prospection ?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Réservez votre démo gratuite et découvrez comment transformer vos leads en clients
          </p>
        </div>
        
        {/* Carrousel infini des témoignages */}
        <div className="mb-16">
          <InfiniteTestimonialCarousel />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ou contactez-nous directement</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500/30 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-blue-300 transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">fallboubacar514@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-green-500/30 group-hover:scale-110">
                    <Calendar className="w-6 h-6 text-green-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                  <div>
                    <div className="font-semibold">Réserver un créneau</div>
                    <div className="text-blue-100">Démo gratuite de 30 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section garantie */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Réponse garantie sous 48h</h4>
              <p className="text-blue-100 mb-4">Nous vous accompagnons dans la mise en place de votre automatisation.</p>
              <GlowingButton onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')} className="w-full">
                Réservez votre audit gratuitement
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
