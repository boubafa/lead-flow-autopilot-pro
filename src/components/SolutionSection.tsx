import { Check, Zap, MessageSquare, BarChart3, Calendar, Shield } from "lucide-react";
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
  return;
};
export default SolutionSection;