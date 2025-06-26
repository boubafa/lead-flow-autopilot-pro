
import { ArrowRight, FileText, Brain, Mail, RefreshCw, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [{
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    title: "Formulaire",
    description: "Capture automatique des leads"
  }, {
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    title: "Tri IA",
    description: "Qualification intelligente"
  }, {
    icon: <Mail className="w-8 h-8 text-blue-600" />,
    title: "Email 1",
    description: "Premier contact personnalisé"
  }, {
    icon: <RefreshCw className="w-8 h-8 text-purple-600" />,
    title: "Relances",
    description: "Suivi automatique (3x max)"
  }, {
    icon: <Calendar className="w-8 h-8 text-green-600" />,
    title: "RDV/CRM",
    description: "Conversion finale"
  }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateY: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 },
        scale: { duration: 0.8, ease: "backOut" }
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20, scale: 0 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "backOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const resultVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 1,
        delay: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">5 étapes automatisées pour le scénario principale transformer vos visiteurs en clients</p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <motion.div 
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all group min-w-[200px] relative"
                  variants={stepVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md relative z-10"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.6, ease: "backOut" }
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 relative z-10">{step.title}</h3>
                  <p className="text-sm text-gray-600 relative z-10">{step.description}</p>
                  
                  {/* Animated number badge */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { 
                      scale: 1, 
                      rotate: 0,
                      transition: { 
                        delay: 0.5 + index * 0.3,
                        duration: 0.6,
                        ease: "backOut"
                      }
                    } : {}}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
                
                {index < steps.length - 1 && (
                  <motion.div
                    variants={arrowVariants}
                  >
                    <ArrowRight className="w-8 h-8 text-gray-400 mt-4 lg:mt-0 lg:mx-4 hidden lg:block" />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            variants={resultVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20"
                animate={{
                  x: [-100, 100],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 2
                }}
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Résultat :</h3>
              <motion.p 
                className="text-lg text-gray-700 relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <span className="font-bold text-green-600">+300% de RDV qualifiés</span> sans effort humain supplémentaire
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
