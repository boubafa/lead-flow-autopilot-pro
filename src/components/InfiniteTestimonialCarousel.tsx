import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Marie Dubois",
  role: "Directrice Marketing",
  company: "TechStart",
  content: "Grâce au système de Boubacar, nos leads qualifiés ont augmenté de 300% en seulement 2 mois. Un investissement qui se rembourse très rapidement.",
  rating: 5,
  image: "/placeholder-avatar.jpg"
}, {
  name: "Pierre Martin",
  role: "CEO",
  company: "InnovaCorp",
  content: "L'automatisation mise en place a révolutionné notre processus commercial. Nous économisons 15h par semaine tout en convertissant mieux.",
  rating: 5,
  image: "/placeholder-avatar.jpg"
}, {
  name: "Sophie Laurent",
  role: "Responsable Ventes",
  company: "GrowthLab",
  content: "Le système d'IA conversationnelle a transformé notre approche client. Nos taux de conversion ont doublé en 3 mois.",
  rating: 5,
  image: "/placeholder-avatar.jpg"
}, {
  name: "Thomas Bernard",
  role: "Directeur Commercial",
  company: "ScaleUp",
  content: "Enfin une solution qui fonctionne vraiment ! ROI positif dès le premier mois et une équipe enfin libérée des tâches répétitives.",
  rating: 5,
  image: "/placeholder-avatar.jpg"
}, {
  name: "Julie Moreau",
  role: "CMO",
  company: "DigitalPro",
  content: "L'expertise de Boubacar nous a permis de structurer notre tunnel de vente de A à Z. Résultat : +250% de leads qualifiés.",
  rating: 5,
  image: "/placeholder-avatar.jpg"
}];
const InfiniteTestimonialCarousel = () => {
  return <div className="overflow-hidden">
      <motion.div className="flex gap-6" animate={{
      x: [0, -100 * testimonials.length]
    }} transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear"
      }
    }}>
        {[...testimonials, ...testimonials].map((testimonial, index) => {})}
      </motion.div>
    </div>;
};
export default InfiniteTestimonialCarousel;