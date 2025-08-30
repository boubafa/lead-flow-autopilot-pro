
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Directrice Marketing",
    company: "TechStart",
    content: "Grâce au système de Boubacar, nos leads qualifiés ont augmenté de 300% en seulement 2 mois. Un investissement qui se rembourse très rapidement.",
    rating: 5,
    image: "/placeholder-avatar.jpg"
  },
  {
    name: "Pierre Martin",
    role: "CEO",
    company: "InnovaCorp",
    content: "L'automatisation mise en place a révolutionné notre processus commercial. Nous économisons 15h par semaine tout en convertissant mieux.",
    rating: 5,
    image: "/placeholder-avatar.jpg"
  },
  {
    name: "Sophie Laurent",
    role: "Responsable Ventes",
    company: "GrowthLab",
    content: "Le système d'IA conversationnelle a transformé notre approche client. Nos taux de conversion ont doublé en 3 mois.",
    rating: 5,
    image: "/placeholder-avatar.jpg"
  },
  {
    name: "Thomas Bernard",
    role: "Directeur Commercial",
    company: "ScaleUp",
    content: "Enfin une solution qui fonctionne vraiment ! ROI positif dès le premier mois et une équipe enfin libérée des tâches répétitives.",
    rating: 5,
    image: "/placeholder-avatar.jpg"
  },
  {
    name: "Julie Moreau",
    role: "CMO",
    company: "DigitalPro",
    content: "L'expertise de Boubacar nous a permis de structurer notre tunnel de vente de A à Z. Résultat : +250% de leads qualifiés.",
    rating: 5,
    image: "/placeholder-avatar.jpg"
  }
];

const InfiniteTestimonialCarousel = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -100 * testimonials.length]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
          }
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-lg border border-blue-100"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-50" />
            <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteTestimonialCarousel;
