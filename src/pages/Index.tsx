
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Zap, Target, Clock, BarChart3, Users, MessageSquare, Mail, Calendar, Shield, Star } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import WorkflowSection from "@/components/WorkflowSection";
import OffreSection from "@/components/OffreSection";
import SystemeSection from "@/components/SystemeSection";
import PortfolioSection from "@/components/PortfolioSection";
import NewTestimonialsSection from "@/components/NewTestimonialsSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <WorkflowSection />
      <OffreSection />
      <SystemeSection />
      <PortfolioSection />
      <NewTestimonialsSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
