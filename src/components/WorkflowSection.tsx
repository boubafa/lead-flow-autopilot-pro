
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkflowSection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
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
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.3
      }
    }
  };

  const steps = [{
    icon: Target,
    title: "Capture automatique",
    description: "Vos formulaires se connectent instantanément à notre système. Chaque nouveau lead est capturé automatiquement.",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: BarChart3,
    title: "Tri et enrichissement",
    description: "Les leads sont automatiquement triés, qualifiés et enrichis avec les bonnes informations dans votre CRM.",
    color: "from-purple-500 to-pink-500"
  }, {
    icon: MessageSquare,
    title: "Messages personnalisés",
    description: "Chaque lead reçoit instantanément un message de bienvenue personnalisé avec un lien de prise de rendez-vous.",
    color: "from-green-500 to-emerald-500"
  }, {
    icon: Clock,
    title: "Relances intelligentes",
    description: "Si le lead ne prend pas rendez-vous, notre système envoie des relances automatiques à J+3, J+6, et J+9.",
    color: "from-orange-500 to-red-500"
  }, {
    icon: Users,
    title: "Notification équipe",
    description: "Votre équipe commerciale est notifiée en temps réel des leads chauds prêts à être contactés.",
    color: "from-indigo-500 to-purple-500"
  }, {
    icon: Zap,
    title: "Suivi en temps réel",
    description: "Dashboard complet pour suivre tous vos leads, leur statut et les actions automatisées effectuées.",
    color: "from-yellow-500 to-orange-500"
  }];

  return (
    <section id="workflow" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 px-4"
          >
            Je vous présente <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lead Booster Auto Pilot</span>, la solution à ce problème. Comment ça marche ? <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">En 6 étapes automatisées</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Notre système intelligent transforme vos visiteurs en clients qualifiés, 24h/24 et 7j/7, sans intervention manuelle
          </motion.p>
        </motion.div>
        
        {/* Layout responsive avec ligne centrale pour desktop uniquement */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne verticale centrale - visible uniquement sur desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 transform -translate-x-1/2 hidden lg:block"></div>
          
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8 md:space-y-12 lg:space-y-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-12 gap-6`}
              >
                {/* Carte */}
                <div className="lg:w-1/2 w-full">
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        variants={iconVariants}
                        className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
                      </motion.div>
                      <CardTitle className="text-lg md:text-xl font-bold text-gray-900">
                        Étape {index + 1}: {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed text-center text-sm md:text-base">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Espaceur pour l'autre côté - desktop uniquement */}
                <div className="lg:w-1/2 w-full hidden lg:block"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-blue-200 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
              ⚡ Résultat : Zéro lead perdu, conversion maximisée
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Pendant que vous dormez, notre IA travaille pour vous. Vos prospects sont pris en charge instantanément, relancés intelligemment, et convertis en clients payants.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
