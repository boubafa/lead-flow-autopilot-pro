
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare, Mail, Calendar, Shield, Star } from "lucide-react";
import GlowingButton from "./GlowingButton";

const OffreSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Notre Offre</h2>
          <p className="text-gray-600">Découvrez nos solutions adaptées à vos besoins</p>
        </div>
      </div>
    </section>
  );
};

export default OffreSection;
