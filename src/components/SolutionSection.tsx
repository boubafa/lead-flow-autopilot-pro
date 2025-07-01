
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
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Notre Solution Complète
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Automatisez votre processus de conversion avec notre système intelligent
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
