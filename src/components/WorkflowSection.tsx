
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
        ease: [0.6, -0.05, 0.01, 0.99]
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
        ease: [0.6, -0.05, 0.01, 0.99]
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
        ease: [0.6, -0.05, 0.01, 0.99],
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
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const steps = [
    {
      icon: Target,
      title: "Capture automatique",
      description: "Les prospects et informations sont automatiquement capturés à partir de WhatsApp ou tous vos formulaires et réseaux sociaux.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "IA et enrichissement",
      description: "Les leads sont automatiquement triés, qualifiés et priorisés avec les informations complémentaires pour une connaissance approfondie.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Messages personnalisés",
      description: "Chaque lead reçoit un message adaptatif personnalisé en fonction de son profil automatiquement pendant la conversation.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CheckCircle,
      title: "Notification équipe",
      description: "Le lead est prêt par notification, vous, votre équipe ou votre rendez automatique avec l'IA, l'IA est là.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Suivi en temps réel",
      description: "Tout est suivi automatiquement et toutes les informations récoltées sont enregistrées dans le CRM.",
      color: "from-pink-500 to-pink-600"
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
              Lead Booster Auto Pilot
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            En 6 étapes automatisées
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Notre système intelligent transforme vos prospects en clients qualifiés. 24h/24 et 
            7j/7 sans intervention manuelle.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="flex items-center mb-12 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <motion.div variants={iconVariants}>
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </div>
              
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Étape {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="absolute left-8 mt-16"
                  style={{ top: `${(index + 1) * 96 + 32}px` }}
                >
                  <div className="w-0.5 h-8 bg-gray-300"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mt-16"
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
