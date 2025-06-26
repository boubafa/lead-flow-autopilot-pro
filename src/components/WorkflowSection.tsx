
import { ArrowRight, FileText, Brain, Mail, RefreshCw, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const steps = [{
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Formulaire",
    description: "Capture automatique des leads qualifiés grâce à des formulaires intelligents et optimisés",
    color: "from-blue-500 to-blue-600",
    lineColor: "bg-blue-500"
  }, {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "Tri IA",
    description: "Qualification automatique et intelligente de vos prospects selon vos critères personnalisés",
    color: "from-purple-500 to-purple-600",
    lineColor: "bg-purple-500"
  }, {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email 1",
    description: "Premier contact personnalisé et automatisé pour engager vos prospects qualifiés",
    color: "from-green-500 to-green-600",
    lineColor: "bg-green-500"
  }, {
    icon: <RefreshCw className="w-6 h-6 text-white" />,
    title: "Relances",
    description: "Suivi automatique intelligent avec maximum 3 relances personnalisées et stratégiques",
    color: "from-orange-500 to-orange-600",
    lineColor: "bg-orange-500"
  }, {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: "RDV/CRM",
    description: "Conversion finale avec prise de rendez-vous automatique et intégration CRM complète",
    color: "from-indigo-500 to-indigo-600",
    lineColor: "bg-indigo-500"
  }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8
    },
    visible: {
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -80,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const timelineVariants = {
    hidden: { 
      scaleY: 0,
      opacity: 0
    },
    visible: { 
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
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
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55],
        delay: 0.3
      }
    },
    exit: {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5 étapes automatisées pour transformer vos visiteurs en clients qualifiés
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline continue - ligne verticale centrale continue */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 via-green-200 via-orange-200 to-indigo-200 rounded-full shadow-lg"
            style={{ 
              height: `${steps.length * 240}px`,
              top: '0px'
            }}
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
          />
          
          <motion.div 
            className="space-y-32"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
          >
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  className="relative flex items-center"
                  variants={cardVariants}
                  style={{ zIndex: 10 }}
                >
                  {/* Timeline dot avec icône */}
                  <motion.div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl z-20 border-4 border-white`}
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.15,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Carte de contenu */}
                  <motion.div 
                    className={`w-5/12 ${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}
                    whileHover={{ 
                      scale: 1.03,
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`p-8 bg-white rounded-2xl shadow-xl border-l-4 ${step.lineColor} hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                      {/* Numéro d'étape */}
                      <div className={`absolute -top-3 ${isLeft ? '-right-3' : '-left-3'} w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white text-sm font-bold flex items-center justify-center shadow-lg`}>
                        {index + 1}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Élément décoratif */}
                      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} rounded-b-2xl`} />
                      
                      {/* Effet brillant au hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-10 transition-opacity duration-500 transform -skew-x-12" />
                    </div>
                  </motion.div>
                  
                  {/* Ligne de connexion vers le centre */}
                  <motion.div 
                    className={`absolute top-1/2 ${isLeft ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} w-8 h-0.5 ${step.lineColor} z-10`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.15,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    style={{ 
                      transformOrigin: isLeft ? 'right' : 'left'
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden border border-green-200 shadow-xl">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
                Résultat final :
              </h3>
              <p className="text-lg text-gray-700 relative z-10">
                <span className="font-bold text-green-600">+300% de RDV qualifiés</span> sans effort humain supplémentaire
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
