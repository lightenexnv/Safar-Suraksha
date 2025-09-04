import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TouristRegistration from "@/components/TouristRegistration";
import Dashboard from "@/components/Dashboard";
import EmergencyPanel from "@/components/EmergencyPanel";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-white" />
          <p className="text-white/80">Loading Safar Suraksha...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TouristRegistration />
        <Dashboard />
        <EmergencyPanel />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Safar Suraksha</h3>
            <p className="text-primary-foreground/80 mb-6">
              Protecting travelers with advanced technology and blockchain security
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-primary-foreground/80 transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground/80 transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground/80 transition-smooth">Contact Support</a>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-primary-foreground/60 text-xs">
              © 2025 Safar Suraksha System. Powered by Government of India.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
