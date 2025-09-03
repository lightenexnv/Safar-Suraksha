import { useState } from "react";
import { Shield, Menu, X, MapPin, AlertTriangle, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: MapPin, href: "#dashboard" },
    { label: "Registration", icon: Users, href: "#register" },
    { label: "Emergency", icon: AlertTriangle, href: "#emergency" },
    { label: "Settings", icon: Settings, href: "#settings" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 gradient-primary rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              Smart Tourist Safety
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth px-3 py-2 rounded-md hover:bg-muted"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Authority Login
            </Button>
            <Button size="sm" className="gradient-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-smooth p-3 rounded-md hover:bg-muted"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-lg">{item.label}</span>
                  </a>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <Button variant="outline" className="w-full">
                    Authority Login
                  </Button>
                  <Button className="w-full gradient-primary">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;