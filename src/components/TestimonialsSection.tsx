
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const logos = [
    { name: "TechCorp", color: "text-blue-600" },
    { name: "InnovateLab", color: "text-purple-600" },
    { name: "DigitalPro", color: "text-green-600" },
    { name: "StartupHub", color: "text-orange-600" },
    { name: "ScaleUp", color: "text-red-600" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ils nous font <span className="text-yellow-500">confiance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 500 entreprises utilisent AutoConvert Pro pour automatiser leur prospection
          </p>
        </div>
        
        {/* Logos clients */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className={`text-2xl font-bold ${logo.color} hover:opacity-100 transition-opacity`}>
              {logo.name}
            </div>
          ))}
        </div>
        
        {/* Témoignage principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              "Depuis qu'on utilise AutoConvert Pro, on a <span className="font-bold text-blue-600">triplé notre nombre de RDV qualifiés</span> sans augmenter nos effectifs. L'IA gère tout automatiquement, c'est magique !"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Marie Dubois</div>
                <div className="text-gray-600">Directrice Marketing, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">+300%</div>
            <div className="text-gray-600">RDV qualifiés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Automatisation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
