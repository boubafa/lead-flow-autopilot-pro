
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare, Mail, Calendar, Shield, Star } from "lucide-react";
import GlowingButton from "./GlowingButton";
import AnimatedLightButton from "./AnimatedLightButton";

const OffreSection = () => {
  return (
    <section id="offre" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Notre Offre
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos solutions adaptées à vos besoins
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Starter</CardTitle>
              <CardDescription>Parfait pour commencer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">29€/mois</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Feature 1</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Feature 2</li>
              </ul>
              <AnimatedLightButton className="w-full">Choisir ce plan</AnimatedLightButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OffreSection;
