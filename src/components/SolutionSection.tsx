
import { Check, Zap, MessageSquare, BarChart3, Calendar, Shield } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 animate-pulse" />,
      title: "Capture auto depuis formulaires",
      description: "Intégration directe avec vos sites web et landing pages"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Messages IA personnalisés",
      description: "Contenu adapté selon le profil et le comportement du prospect"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Relances intelligentes (3x max)",
      description: "Séquences optimisées pour maximiser le taux de réponse"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Notifications temps réel",
      description: "Alertes instantanées pour les prospects chauds"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Synchronisation CRM",
      description: "Compatible avec tous les CRM populaires"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Dashboard de suivi",
      description: "Analytics détaillés et ROI en temps réel"
    }
  ];

  return (
    <section id="solution" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solution IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un système complet qui automatise votre prospection de A à Z
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
