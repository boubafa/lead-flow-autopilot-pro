
import { Star } from "lucide-react";

const InfiniteTestimonialCarousel = () => {
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

  // Duplicate testimonials for infinite effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll space-x-8">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteTestimonialCarousel;
