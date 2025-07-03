
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare, Mail, Calendar, Shield, Star } from "lucide-react";
import GlowingButton from "./GlowingButton";
import AnimatedLightButton from "./AnimatedLightButton";

const OffreSection = () => {
  return (
    <section id="offre" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offre</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution complète pour automatiser votre génération de leads
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-2 border-blue-200 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            <CardHeader className="text-center relative z-10 pb-6">
              <Badge className="mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
                🚀 Solution Complète
              </Badge>
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lead Booster Auto Pilot
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
                Système d'automatisation complète pour capturer, qualifier et convertir vos leads 24h/24
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Inclus dans l'offre :</h3>
                  <div className="space-y-3">
                    {[
                      "Capture automatique des leads",
                      "Messages IA personnalisés",
                      "Relances intelligentes (3x max)",
                      "Intégration CRM complète",
                      "Dashboard de suivi temps réel",
                      "Support technique 30 jours"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Résultats attendus :</h3>
                  <div className="space-y-3">
                    {[
                      "+300% de leads qualifiés",
                      "Zéro lead perdu",
                      "Réponse sous 5 minutes",
                      "Taux de conversion optimisé",
                      "Temps commercial libéré",
                      "ROI mesurable dès J+30"
                    ].map((result, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center border-t border-blue-100 pt-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    À partir de 2 997€
                  </div>
                  <div className="text-gray-600">
                    Installation complète + formation + support
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedLightButton 
                    size="lg" 
                    onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')}
                    className="px-8 py-4 text-lg"
                  >
                    <span className="flex items-center">
                      Réserver un audit gratuit
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </AnimatedLightButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OffreSection;
