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
  return <div className="overflow-hidden">
      <div className="flex animate-scroll space-x-8">
        {duplicatedTestimonials.map((testimonial, index) => {})}
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
    </div>;
};
export default InfiniteTestimonialCarousel;