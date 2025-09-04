import { Shield, MapPin, AlertTriangle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-16 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
              Safar Suraksha
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
              Advanced AI-powered monitoring and blockchain-secured digital IDs 
              for complete tourist protection across India
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-bounce hover:scale-105 min-h-[48px]"
              >
                Register as Tourist
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white/30 text-white hover:bg-white/10 transition-bounce hover:scale-105 min-h-[48px]"
              >
                Authority Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Safety Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection powered by cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 shadow-medium hover:shadow-strong transition-smooth border-0 gradient-primary text-white">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Blockchain Digital ID</h3>
              <p className="opacity-90 text-sm sm:text-base">Tamper-proof, time-bound tourist IDs with secure verification</p>
            </Card>
            
            <Card className="p-4 sm:p-6 shadow-medium hover:shadow-strong transition-smooth">
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4 text-secondary" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-card-foreground">Geo-Fencing Alerts</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Real-time warnings when entering restricted or high-risk areas</p>
            </Card>
            
            <Card className="p-4 sm:p-6 shadow-medium hover:shadow-strong transition-smooth border-0 bg-emergency text-emergency-foreground">
              <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">SOS Panic Button</h3>
              <p className="opacity-90 text-sm sm:text-base">Instant emergency alerts with live location sharing</p>
            </Card>
            
            <Card className="p-4 sm:p-6 shadow-medium hover:shadow-strong transition-smooth border-0 gradient-safety text-white">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">AI Monitoring</h3>
              <p className="opacity-90 text-sm sm:text-base">Intelligent anomaly detection and predictive safety alerts</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">AI</div>
              <div className="text-muted-foreground">Anomaly Detection</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">10+</div>
              <div className="text-muted-foreground">Languages Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-warning mb-2">100%</div>
              <div className="text-muted-foreground">Secure & Encrypted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;