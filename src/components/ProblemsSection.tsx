
import { Clock, Users, Target } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: <Target className="w-12 h-12 text-red-500" />,
      title: "Leads non-relancés",
      description: "70% de vos prospects ne reçoivent jamais de suivi après leur demande initiale"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Prospects perdus",
      description: "Vos concurrents récupèrent les clients que vous n'avez pas su convertir à temps"
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-500" />,
      title: "Processus manuel chronophage",
      description: "Votre équipe perd 4h/jour sur des tâches répétitives au lieu de vendre"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Vous perdez des clients <span className="text-red-500">chaque jour</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sans automatisation, votre entreprise laisse s'échapper des milliers d'euros de CA
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
