
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare, Mail, Calendar, Shield, Star } from "lucide-react";
import GlowingButton from "./GlowingButton";
import AnimatedLightButton from "./AnimatedLightButton";

const OffreSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Notre Offre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lead Booster</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformez vos visiteurs en clients qualifiés avec notre système automatisé
          </p>
        </div>
        
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Lead Booster Auto Pilot
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Solution complète d'automatisation des leads
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Capture automatique des leads</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Messages personnalisés instantanés</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Relances intelligentes automatisées</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Dashboard de suivi en temps réel</span>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <GlowingButton>
                Découvrir l'offre complète
              </GlowingButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OffreSection;
