
import { Check, Zap, MessageSquare, BarChart3, Calendar, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SolutionSection = () => {
  const features = [{
    icon: <Zap className="w-6 h-6 animate-pulse" />,
    title: "Capture auto depuis formulaires",
    description: "Intégration directe avec vos sites web et landing pages"
  }, {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Messages IA personnalisés",
    description: "Contenu adapté selon le profil et le comportement du prospect"
  }, {
    icon: <Check className="w-6 h-6" />,
    title: "Relances intelligentes (3x max)",
    description: "Séquences optimisées pour maximiser le taux de réponse"
  }, {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Notifications temps réel",
    description: "Alertes instantanées pour les prospects chauds"
  }, {
    icon: <Calendar className="w-6 h-6" />,
    title: "Synchronisation CRM",
    description: "Compatible avec tous les CRM populaires"
  }, {
    icon: <Shield className="w-6 h-6" />,
    title: "Dashboard de suivi",
    description: "Analytics détaillés et ROI en temps réel"
  }];

  return (
    <section id="solution" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            La <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solution Complète</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Notre système automatisé transforme vos visiteurs en clients qualifiés
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg md:text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed text-center text-sm md:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
