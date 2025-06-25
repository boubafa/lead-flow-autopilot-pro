
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à <span className="text-yellow-400">automatiser</span> votre prospection ?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Réservez votre démo gratuite et découvrez comment transformer vos leads en clients
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Parlons de votre projet</CardTitle>
              <CardDescription className="text-blue-100">
                Remplissez ce formulaire et nous vous recontactons sous 24h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email professionnel"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    required
                  />
                </div>
                <Input
                  name="company"
                  placeholder="Nom de votre entreprise"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Parlez-nous de vos besoins en automatisation..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-3 group"
                >
                  Envoyer ma demande
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ou contactez-nous directement</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">contact@autoconvertpro.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="text-blue-100">+33 1 23 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <div className="font-semibold">Réserver un créneau</div>
                    <div className="text-blue-100">Démo gratuite de 30 minutes</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Réponse garantie sous 24h</h4>
              <p className="text-blue-100 mb-4">
                Notre équipe d'experts vous accompagne dans la mise en place de votre automatisation.
              </p>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
                Réserver ma démo Calendly
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
