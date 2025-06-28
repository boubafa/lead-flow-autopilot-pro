
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare, Mail, Calendar, Shield, Star } from "lucide-react";
import GlowingButton from "./GlowingButton";

const OffreSection = () => {
  return (
    <section id="offre" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Une <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">offre simple</span> et transparente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un système complet d'automatisation de leads, livré clé en main et adapté à votre business
          </p>
        </div>

        {/* Offre principale */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            <CardHeader className="text-center pb-8 relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Système d'Automatisation Complet
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Configuration personnalisée selon vos besoins et outils actuels
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  Sur devis
                </div>
                <div className="text-lg text-gray-600">
                  Tarif adapté à votre projet
                </div>
              </div>

              {/* Ce qui est inclus */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-lg mb-4">✅ Configuration incluse</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Connexion de tous vos formulaires</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Intégration CRM/Google Sheets</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Messages automatisés personnalisés</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Système de relances intelligentes</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-lg mb-4">🎯 Support inclus</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Formation complète à l'utilisation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Support technique 30 jours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Ajustements post-installation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Dashboard de suivi complet</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garanties */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <h4 className="font-bold text-green-800">Garanties incluses</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Système fonctionnel garanti</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Délai de livraison respecté</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Remboursement si insatisfait</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Support technique inclus</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <GlowingButton
                  onClick={() => window.open('https://cal.com/boubatest/30min', '_blank')}
                  className="text-lg px-8 py-4"
                >
                  Réserver mon audit gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </GlowingButton>
                <p className="text-sm text-gray-500 mt-4">
                  💡 Audit gratuit • Devis personnalisé • Sans engagement
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ rapide */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-3">⚡ Combien de temps ?</h4>
              <p className="text-gray-600 text-sm">
                Entre 3 et 7 jours selon la complexité de votre setup actuel.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-3">🔧 Outils compatibles ?</h4>
              <p className="text-gray-600 text-sm">
                Tally, Typeform, Notion, Make, Zapier, Calendly, Google Sheets, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffreSection;
