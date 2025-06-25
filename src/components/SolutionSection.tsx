
import { Check, Zap, MessageSquare, BarChart3, Calendar, Shield } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
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
    <section id="solution" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            La solution qui change tout
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatisez votre prospection de A à Z avec notre IA de nouvelle génération
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-blue-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
