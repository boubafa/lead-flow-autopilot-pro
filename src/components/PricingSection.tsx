
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "STARTER",
      price: "390€",
      period: "one-shot",
      description: "Votre 1ère automation simple",
      color: "green",
      features: [
        { text: "1 message + 1 relance", included: true },
        { text: "Google Sheets + Notifications", included: true },
        { text: "Support après livraison", included: false },
      ],
      cta: "Commander maintenant",
      popular: false
    },
    {
      name: "BUSINESS",
      price: "199€",
      period: "/mois",
      description: "Automatisation complète, sans effort",
      color: "blue",
      features: [
        { text: "3 relances IA + Calendly", included: true },
        { text: "Support inclus + Garantie 14 jours", included: true },
        { text: "Dashboard avancé", included: true },
      ],
      cta: "Essayer gratuitement",
      popular: true
    },
    {
      name: "PREMIUM",
      price: "299€",
      period: "/mois",
      description: "Votre équipe dédiée à l'automatisation",
      color: "purple",
      features: [
        { text: "2 optimisations/mois + Reporting", included: true },
        { text: "Support VIP (réponse sous 2h)", included: true },
        { text: "Intégrations personnalisées", included: true },
      ],
      cta: "Contactez-nous",
      popular: false
    }
  ];

  const getCardStyles = (color: string, popular: boolean) => {
    const baseStyles = "relative overflow-hidden transition-all duration-300 hover:shadow-2xl";
    const colorStyles = {
      green: "border-green-200 hover:border-green-300",
      blue: "border-blue-200 hover:border-blue-300 ring-2 ring-blue-200",
      purple: "border-purple-200 hover:border-purple-300"
    };
    return `${baseStyles} ${colorStyles[color as keyof typeof colorStyles]}`;
  };

  const getButtonStyles = (color: string) => {
    const styles = {
      green: "bg-green-600 hover:bg-green-700",
      blue: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
      purple: "bg-purple-600 hover:bg-purple-700"
    };
    return `${styles[color as keyof typeof styles]} text-white`;
  };

  return (
    <section id="tarifs" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Tarifs <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">transparents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez l'offre qui correspond à vos besoins et votre budget
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={getCardStyles(plan.color, plan.popular)}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                    Le plus populaire
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <div className="mb-4">
                  <span className={`inline-block w-4 h-4 rounded-full ${
                    plan.color === 'green' ? 'bg-green-500' : 
                    plan.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}></span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${getButtonStyles(plan.color)} font-semibold py-3`}>
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">🚀 Garantie satisfait ou remboursé 14 jours</p>
          <p className="text-sm text-gray-500">Pas d'engagement • Résiliation à tout moment</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
