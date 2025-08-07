
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare, Mail, Calendar, Shield, Star } from "lucide-react";
import GlowingButton from "./GlowingButton";
import AnimatedLightButton from "./AnimatedLightButton";

const OffreSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offre</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Découvrez nos solutions adaptées à vos besoins
        </p>
      </div>
    </section>
  );
};

export default OffreSection;
