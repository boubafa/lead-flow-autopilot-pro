
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import GlowingButton from "./GlowingButton";

const OffreSection = () => {
  return (
    <section id="offre" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Découvrez notre système <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">intelligent</span> de gestion des leads
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous perdez des prospects à cause du manque de suivi ou de relances tardives ?
            Notre solution est conçue pour <strong>capturer, qualifier et transformer</strong> automatiquement vos leads sans effort manuel.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Ce que contient notre système :
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Capture automatique des leads depuis vos formulaires (Tally, Typeform, Shopify, etc.)",
                "Tri intelligent et enrichissement des leads (ajout dans CRM, base ou Google Sheets)",
                "Message de bienvenue personnalisé dès l'inscription",
                "Séquence de relances intelligentes (J+3, J+6, J+9) si le lead ne prend pas rendez-vous",
                "Notification de l'équipe commerciale en temps réel",
                "Lien de prise de rendez-vous intégré (Calendly)",
                "Dashboard de suivi des leads"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 text-center border border-green-200 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Résultat :
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Vous ne perdez plus aucun lead, vous convertissez plus vite, et votre équipe gagne un temps précieux chaque jour.
            </p>
            <div className="inline-flex items-center bg-yellow-100 rounded-full px-6 py-3 border border-yellow-200">
              <span className="text-2xl mr-2">🎯</span>
              <span className="text-gray-800 font-medium">
                Réservez une démo gratuite pour découvrir comment ce système s'intègre à votre entreprise.
              </span>
            </div>
          </div>
          
          <div className="text-center">
            <GlowingButton 
              onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')}
              className="px-8 py-4 text-lg"
            >
              Réserver une démo gratuite
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </GlowingButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffreSection;
