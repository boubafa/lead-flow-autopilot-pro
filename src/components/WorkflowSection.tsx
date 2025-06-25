
import { ArrowRight, FileText, Brain, Mail, RefreshCw, Calendar } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Formulaire",
      description: "Capture automatique des leads"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Tri IA",
      description: "Qualification intelligente"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email 1",
      description: "Premier contact personnalisé"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-purple-600" />,
      title: "Relances",
      description: "Suivi automatique (3x max)"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "RDV/CRM",
      description: "Conversion finale"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5 étapes automatisées pour transformer vos visiteurs en clients
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all group min-w-[200px]">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-gray-400 mt-4 lg:mt-0 lg:mx-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Résultat :</h3>
              <p className="text-lg text-gray-700">
                <span className="font-bold text-green-600">+300% de RDV qualifiés</span> sans effort humain supplémentaire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
