
import { ArrowRight, FileText, Brain, Mail, RefreshCw, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: 0
    },
    visible: (isLeft: boolean) => ({
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const lineVariants = {
    hidden: { 
      scaleY: 0,
      opacity: 0
    },
    visible: { 
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.8
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5 étapes automatisées pour transformer vos visiteurs en clients qualifiés
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Central vertical line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 via-green-200 via-orange-200 to-indigo-200 rounded-full"
            style={{ height: `${(steps.length - 1) * 200 + 100}px` }}
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          
          <motion.div 
            className="space-y-32"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  className="relative flex items-center"
                  variants={cardVariants}
                  custom={isLeft}
                >
                  {/* Timeline dot with icon */}
                  <motion.div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg z-10 border-4 border-white`}
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content card */}
                  <motion.div 
                    className={`w-5/12 ${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-8 bg-white rounded-2xl shadow-lg border-l-4 ${step.lineColor} hover:shadow-xl transition-all duration-300 relative`}>
                      {/* Step number */}
                      <div className={`absolute -top-3 ${isLeft ? '-right-3' : '-left-3'} w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white text-sm font-bold flex items-center justify-center shadow-md`}>
                        {index + 1}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Decorative element */}
                      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} rounded-b-2xl`} />
                    </div>
                  </motion.div>
                  
                  {/* Connection line to center */}
                  <motion.div 
                    className={`absolute top-1/2 ${isLeft ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} w-8 h-0.5 ${step.lineColor}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 1 + index * 0.2,
                      ease: "easeOut"
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
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 2,
              ease: "easeOut"
            }}
          >
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden border border-green-200">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 animate-pulse" />
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
