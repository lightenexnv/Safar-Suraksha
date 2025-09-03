import { useState, useEffect } from "react";
import { AlertTriangle, Phone, MapPin, Clock, Shield, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const EmergencyPanel = () => {
  const { toast } = useToast();
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [location, setLocation] = useState("28.6139° N, 77.2090° E");

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && emergencyActive) {
      handleEmergencyActivated();
    }
  }, [countdown, emergencyActive]);

  const handleSOSPress = () => {
    setCountdown(5);
    setEmergencyActive(true);
    toast({
      title: "SOS Activated",
      description: "Emergency alert will be sent in 5 seconds. Press cancel to stop.",
      variant: "destructive",
    });
  };

  const handleCancel = () => {
    setCountdown(0);
    setEmergencyActive(false);
    toast({
      title: "SOS Cancelled",
      description: "Emergency alert has been cancelled.",
    });
  };

  const handleEmergencyActivated = () => {
    toast({
      title: "Emergency Alert Sent!",
      description: "Authorities have been notified. Help is on the way.",
      variant: "destructive",
    });
    // In real app, this would trigger actual emergency protocols
  };

  const emergencyNumbers = [
    { label: "Police", number: "100", type: "police" },
    { label: "Tourist Helpline", number: "1363", type: "tourist" },
    { label: "Women Helpline", number: "1091", type: "women" },
    { label: "Medical Emergency", number: "108", type: "medical" }
  ];

  return (
    <section id="emergency" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Emergency Response Center
          </h2>
          <p className="text-xl text-muted-foreground">
            Instant help when you need it most
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* SOS Button */}
          <div className="lg:col-span-1">
            <Card className="shadow-emergency border-0 bg-emergency text-emergency-foreground">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Siren className="h-6 w-6" />
                  <span>SOS Emergency</span>
                </CardTitle>
                <CardDescription className="text-emergency-foreground/80">
                  Press and hold for 3 seconds to activate
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                {emergencyActive && countdown > 0 ? (
                  <>
                    <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center animate-pulse">
                      <span className="text-4xl font-bold">{countdown}</span>
                    </div>
                    <Button 
                      onClick={handleCancel}
                      variant="secondary"
                      className="w-full"
                    >
                      Cancel Emergency
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={handleSOSPress}
                      size="lg"
                      className="w-32 h-32 rounded-full bg-white text-emergency hover:bg-white/90 text-2xl font-bold shadow-strong transition-bounce hover:scale-105"
                    >
                      SOS
                    </Button>
                    <p className="text-center text-emergency-foreground/80 text-sm">
                      Tap once to activate emergency protocol
                    </p>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Current Location */}
            <Card className="mt-6 shadow-medium">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Current Location:</span>
                </div>
                <p className="text-muted-foreground font-mono text-xs mt-1">
                  {location}
                </p>
                <Badge variant="secondary" className="mt-2">
                  Location Services Active
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Numbers */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-success" />
                  <span>Emergency Contacts</span>
                </CardTitle>
                <CardDescription>
                  Quick access to essential emergency services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {emergencyNumbers.map((contact) => (
                    <Card key={contact.number} className="p-4 hover:shadow-medium transition-smooth cursor-pointer border border-muted">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-card-foreground">{contact.label}</h3>
                          <p className="text-2xl font-bold text-primary">{contact.number}</p>
                        </div>
                        <Button size="sm" className="gradient-primary">
                          Call Now
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card className="mt-6 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-warning" />
                  <span>Safety Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">In Case of Emergency:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Stay calm and press SOS immediately</li>
                      <li>• Share your exact location if possible</li>
                      <li>• Follow instructions from authorities</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">Prevention Tips:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Keep location services enabled</li>
                      <li>• Inform someone about your plans</li>
                      <li>• Stay in well-populated areas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyPanel;