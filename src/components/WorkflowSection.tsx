
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Zap, Target, BarChart3 } from "lucide-react";

const WorkflowSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const steps = [
    {
      icon: Target,
      title: "Audit et Stratégie",
      description: "Analyse complète de votre funnel actuel et définition de la stratégie d'automatisation optimale.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Mise en Place",
      description: "Configuration des systèmes d'IA, création des workflows et intégration avec vos outils existants.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Optimisation Continue",
      description: "Suivi des performances, ajustements en temps réel et amélioration continue des conversions.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Notre Méthodologie
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Comment nous transformons votre business
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Une approche structurée en 3 étapes pour automatiser intelligemment votre acquisition client et multiplier vos résultats.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 md:gap-4 items-center mb-16"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                variants={stepVariants}
                className="relative"
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mx-auto mb-6`}>
                  <motion.div variants={iconVariants}>
                    <step.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </motion.div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="hidden md:flex items-center justify-center mx-4"
                >
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center"
        >
          <button 
            onClick={() => scrollToSection('systeme')}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Découvrir notre système
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
