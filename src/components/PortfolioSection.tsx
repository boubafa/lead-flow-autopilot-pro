
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mic, Youtube, Zap } from "lucide-react";

const PortfolioSection = () => {
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

  const projects = [
    {
      title: "Agent vocal IA",
      description: "Système d'intelligence artificielle conversationnelle avancé capable de gérer des interactions vocales naturelles et fluides avec les clients. Automatise la qualification des leads et les premiers contacts commerciaux avec une précision remarquable.",
      icon: Mic,
      tags: ["IA Conversationnelle", "Automatisation", "Vocal"],
      gradient: "from-blue-500 to-cyan-500",
      // Placeholder pour l'image que vous fournirez
      image: "/placeholder-vocal-ai.jpg"
    },
    {
      title: "Agent stratégiste YouTube IA",
      description: "Intelligence artificielle spécialisée dans l'optimisation des stratégies YouTube. Analyse les tendances, optimise les contenus et maximise l'engagement pour développer votre audience et vos conversions sur la plateforme.",
      icon: Youtube,
      tags: ["YouTube", "Stratégie", "Optimisation"],
      gradient: "from-red-500 to-pink-500",
      // Placeholder pour l'image que vous fournirez
      image: "/placeholder-youtube-ai.jpg"
    },
    {
      title: "Setter IA",
      description: "Mon système commercialisé actuellement qui révolutionne la prise de rendez-vous commerciaux. Automatise intelligemment la qualification, la prise de contact et la planification des meetings avec vos prospects les plus qualifiés.",
      icon: Zap,
      tags: ["Commercial", "Automatisation", "Lead Gen"],
      gradient: "from-purple-500 to-indigo-500",
      // Placeholder pour l'image que vous fournirez
      image: "/placeholder-setter-ai.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Mes Réalisations
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Portfolio de mes Systèmes IA
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Découvrez mes créations les plus innovantes : des systèmes d'intelligence artificielle qui transforment 
            radicalement la façon dont les entreprises interagissent avec leurs clients et génèrent des résultats.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white" />
                  </div>
                  {/* Placeholder pour votre image */}
                  <div className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/20 px-2 py-1 rounded">
                    Image à venir
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
          <p className="text-gray-600 mb-6">
            Intéressé par l'un de ces systèmes ? Discutons de votre projet !
          </p>
          <button 
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Discuter de votre projet
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
