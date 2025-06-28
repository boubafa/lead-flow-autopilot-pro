
import { Star } from "lucide-react";

const InfiniteTestimonialCarousel = () => {
  const testimonials = [
    {
      text: "Grâce à ce système, notre taux de réponse a doublé. On ne perd plus aucun lead, tout est fluide et automatisé.",
      author: "Julien M.",
      role: "Fondateur d'une agence web"
    },
    {
      text: "Avant, je passais mes journées à relancer des prospects. Maintenant, je me concentre sur ce qui compte : mes clients.",
      author: "Awa D.",
      role: "Coach business"
    },
    {
      text: "Une solution propre, rapide à mettre en place, et surtout rentable dès la première semaine.",
      author: "Yacine T.",
      role: "Formateur indépendant"
    }
  ];

  // Duplicate testimonials for infinite effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-[scroll_20s_linear_infinite] space-x-8">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-white mb-4 text-sm leading-relaxed">
              "{testimonial.text}"
            </blockquote>
            <div className="text-center">
              <div className="font-bold text-white text-sm">— {testimonial.author}</div>
              <div className="text-blue-200 text-xs">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteTestimonialCarousel;
