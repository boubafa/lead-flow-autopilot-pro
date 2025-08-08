
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Globe, Shield, ArrowRight, CheckCircle, Star, Sparkles } from "lucide-react";
import AnimatedLightButton from "./AnimatedLightButton";

const SystemeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Globe,
      title: "Intégrations natives",
      description: "Compatible avec n8n, Gmail, Telegram, Make, Calendar etc",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Sécurité renforcée",
      description: "Vos données sont protégées par un chiffrement de niveau bancaire",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Performance optimale",
      description: "Temps de réponse < 2 secondes, disponibilité 99.9%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Support premium",
      description: "Équipe dédiée pour votre réussite, formation incluse",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <motion.div 
          initial="hidden" 
          animate={isInView ? "visible" : "hidden"} 
          variants={containerVariants} 
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Un système <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">robuste et fiable</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Infrastructure cloud premium pour une performance et sécurité maximales
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1">
                  <p className="text-blue-100 text-center text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants} 
          className="text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
            <h3 className="text-xl md:text-2xl font-bold">Garantie satisfait ou remboursé</h3>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
          </div>
          <p className="text-blue-100 text-base md:text-lg mb-6">
            30 jours pour tester sans risque. Si vous n'êtes pas satisfait, nous vous remboursons intégralement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/50 text-sm md:text-base px-3 py-1">
              <CheckCircle className="w-4 h-4 mr-2" />
              Support 24/7
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 text-sm md:text-base px-3 py-1">
              <Star className="w-4 h-4 mr-2" />
              Formation incluse
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 text-sm md:text-base px-3 py-1">
              <Zap className="w-4 h-4 mr-2" />
              Mise en place rapide
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemeSection;
