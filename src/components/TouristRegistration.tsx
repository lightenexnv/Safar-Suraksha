import { useState } from "react";
import { User, Phone, MapPin, Calendar, Shield, Upload, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const TouristRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    passportNumber: "",
    visitDuration: "",
    emergencyContact: "",
    destination: "",
    accommodation: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate blockchain ID generation
    const digitalId = `DID-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    toast({
      title: "Registration Successful!",
      description: `Your Digital ID: ${digitalId} has been generated on the blockchain.`,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="register" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tourist Registration
          </h2>
          <p className="text-xl text-muted-foreground">
            Register to receive your blockchain-secured Digital Tourist ID
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="md:col-span-2">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Personal Information</span>
                </CardTitle>
                <CardDescription>
                  All information is encrypted and secured on the blockchain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+91 12345 67890"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Select onValueChange={(value) => handleInputChange("nationality", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="indian">Indian</SelectItem>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="passport">Passport Number</Label>
                      <Input
                        id="passport"
                        placeholder="A12345678"
                        value={formData.passportNumber}
                        onChange={(e) => handleInputChange("passportNumber", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Visit Duration (days)</Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="7"
                        value={formData.visitDuration}
                        onChange={(e) => handleInputChange("visitDuration", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergency">Emergency Contact</Label>
                    <Input
                      id="emergency"
                      placeholder="Emergency contact name and phone"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination">Planned Destinations</Label>
                    <Textarea
                      id="destination"
                      placeholder="Delhi, Agra, Rajasthan..."
                      value={formData.destination}
                      onChange={(e) => handleInputChange("destination", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary text-lg py-3">
                    Generate Digital Tourist ID
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-medium border-0 gradient-safety text-white">
              <CardContent className="p-6">
                <QrCode className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Blockchain Digital ID</h3>
                <p className="opacity-90 text-sm">
                  Secure, tamper-proof identification valid throughout your visit
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Real-time Protection</h3>
                <p className="text-muted-foreground text-sm">
                  24/7 monitoring with instant alerts and emergency response
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2">Multi-language Support</h3>
                <p className="text-muted-foreground text-sm">
                  Available in 10+ Indian languages plus English
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristRegistration;