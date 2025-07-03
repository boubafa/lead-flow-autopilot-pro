
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
    <section id="solution" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un système complet d'automatisation qui transforme vos prospects en clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed text-center">
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
