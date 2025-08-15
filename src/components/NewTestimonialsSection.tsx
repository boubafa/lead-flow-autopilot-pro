import { Star } from "lucide-react";
const NewTestimonialsSection = () => {
  const testimonials = [{
    text: "Grâce à ce système, notre taux de réponse a doublé. On ne perd plus aucun lead, tout est fluide et automatisé.",
    author: "Julien M.",
    role: "Fondateur d'une agence web"
  }, {
    text: "Avant, je passais mes journées à relancer des prospects. Maintenant, je me concentre sur ce qui compte : mes clients.",
    author: "Awa D.",
    role: "Coach business"
  }, {
    text: "Une solution propre, rapide à mettre en place, et surtout rentable dès la première semaine.",
    author: "Yacine T.",
    role: "Formateur indépendant"
  }];

  // Triple les témoignages pour un effet de scroll infini fluide
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  return <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ce que disent nos <span className="text-yellow-500">premiers utilisateurs</span>
          </h2>
        </div>
        
        {/* Carrousel infini */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-testimonials space-x-8">
            {infiniteTestimonials.map((testimonial, index) => <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-xl border border-yellow-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "🌟 {testimonial.text}"
                </blockquote>
                <div className="text-center">
                  <div className="font-bold text-gray-900">— {testimonial.author}</div>
                  
                </div>
              </div>)}
          </div>
        </div>

        <style>
          {`
            @keyframes scroll-testimonials {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            .animate-scroll-testimonials {
              animation: scroll-testimonials 30s linear infinite;
            }
          `}
        </style>
      </div>
    </section>;
};
export default NewTestimonialsSection;