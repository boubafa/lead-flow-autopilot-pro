
const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
            À propos de moi
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100 shadow-lg">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  👋 Je suis Boubacar Fall
                </h3>
                <p className="text-lg text-gray-700">
                  Passionné d'intelligence artificielle et d'automatisation
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              J'aide les entreprises à intégrer ces technologies pour gagner du temps, ne plus perdre de clients, et optimiser leurs opérations.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              J'ai créé ce service après avoir constaté une réalité simple mais coûteuse :
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-red-500 text-xl mr-3">❌</span>
                  <span className="text-gray-800">Trop d'entreprises perdent des prospects à cause du manque de suivi.</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 text-xl mr-3">❌</span>
                  <span className="text-gray-800">Trop d'équipes gaspillent leurs journées sur des tâches répétitives.</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ma mission est d'aider un maximum d'entreprises à <strong>intégrer l'IA dans leurs process</strong>, afin de rester compétitives dans un monde qui évolue à une vitesse fulgurante.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                💡 Pourquoi me faire confiance ?
              </h4>
              <p className="text-gray-800">
                Parce que je ne vends pas un outil. Je construis une <strong>solution sur mesure</strong> pour que <strong>chaque prospect perdu se transforme en opportunité gagnée</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
