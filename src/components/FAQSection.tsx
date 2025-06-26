
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "💬 Combien de temps prend l'installation du système ?",
      answer: "En général entre 3 et 7 jours, selon votre organisation actuelle et vos outils."
    },
    {
      question: "💬 Dois-je déjà utiliser un CRM ou des formulaires ?",
      answer: "Pas du tout. Je vous aide à tout connecter simplement, même si vous partez de zéro."
    },
    {
      question: "💬 Peut-on tester le système ?",
      answer: "Oui. Une démo complète vous est présentée avant validation. Aucun engagement avant."
    },
    {
      question: "💬 Ce système fonctionne-t-il avec mes outils ?",
      answer: "Je travaille avec des outils comme Tally, Typeform, Notion, Make, Zapier, Calendly, Google Sheets, etc. Il est 100 % adaptable."
    },
    {
      question: "💬 Comment se passe le paiement ?",
      answer: "Après validation de votre besoin lors de l'audit gratuit, un devis vous est envoyé. Le paiement s'effectue par virement bancaire via Wise, avec 50 % d'acompte à la commande."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Questions <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">fréquentes</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 font-bold">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
