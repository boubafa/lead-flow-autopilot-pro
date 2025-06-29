
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare, Mail, Calendar, Shield, Star } from "lucide-react";
import GlowingButton from "./GlowingButton";

const OffreSection = () => {
  return (
    <section id="offre" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Notre <span className="text-blue-600">Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre offre complète d'automatisation intelligente
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Starter</CardTitle>
              <CardDescription>Pour débuter avec l'automatisation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-4">€297/mois</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Jusqu'à 100 leads/mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>IA de qualification</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Support email</span>
                </li>
              </ul>
              <Button className="w-full">
                Commencer
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 border-blue-500 shadow-lg scale-105">
            <Badge className="absolute top-4 right-4 bg-blue-600">Populaire</Badge>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Pro</CardTitle>
              <CardDescription>Pour les entreprises en croissance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-4">€597/mois</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Jusqu'à 500 leads/mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>IA avancée + relances</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Support prioritaire</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Intégrations CRM</span>
                </li>
              </ul>
              <GlowingButton className="w-full">
                Choisir Pro
              </GlowingButton>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Enterprise</CardTitle>
              <CardDescription>Pour les grandes entreprises</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-4">Sur mesure</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Leads illimités</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>IA personnalisée</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Support dédié</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Intégrations sur mesure</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Nous contacter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OffreSection;
