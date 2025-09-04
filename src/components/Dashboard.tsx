import { useState } from "react";
import { MapPin, Users, AlertTriangle, Shield, TrendingUp, Clock, Eye, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const recentAlerts = [
    { id: 1, type: "geo-fence", message: "Tourist entered restricted area near Red Fort", time: "2 min ago", severity: "high" },
    { id: 2, type: "sos", message: "Emergency alert from tourist near Connaught Place", time: "5 min ago", severity: "critical" },
    { id: 3, type: "anomaly", message: "Unusual activity detected for Tourist ID: DID-123456", time: "10 min ago", severity: "medium" },
    { id: 4, type: "check-in", message: "Tourist safely checked into hotel in Paharganj", time: "15 min ago", severity: "low" }
  ];

  const activeTourists = [
    { id: "DID-123456", name: "John Smith", location: "New Delhi", status: "safe", lastUpdate: "1 min ago" },
    { id: "DID-789012", name: "Maria Garcia", location: "Mumbai", status: "alert", lastUpdate: "3 min ago" },
    { id: "DID-345678", name: "David Johnson", location: "Goa", status: "safe", lastUpdate: "5 min ago" },
    { id: "DID-901234", name: "Sarah Wilson", location: "Jaipur", status: "safe", lastUpdate: "2 min ago" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-emergency";
      case "high": return "bg-warning";
      case "medium": return "bg-primary";
      case "low": return "bg-success";
      default: return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe": return "bg-success";
      case "alert": return "bg-warning";
      case "emergency": return "bg-emergency";
      default: return "bg-muted";
    }
  };

  return (
    <section id="dashboard" className="py-16 sm:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Authority Dashboard
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Real-time monitoring and incident response system
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:w-fit h-auto p-1">
            <TabsTrigger value="overview" className="text-xs sm:text-sm py-2 px-2 sm:px-3">Overview</TabsTrigger>
            <TabsTrigger value="monitoring" className="text-xs sm:text-sm py-2 px-2 sm:px-3">Monitoring</TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs sm:text-sm py-2 px-2 sm:px-3">Analytics</TabsTrigger>
            <TabsTrigger value="incidents" className="text-xs sm:text-sm py-2 px-2 sm:px-3">Incidents</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card className="shadow-medium border-0 gradient-primary text-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Active Tourists</p>
                      <p className="text-3xl font-bold">2,847</p>
                      <p className="text-xs opacity-80 flex items-center mt-2">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12% from yesterday
                      </p>
                    </div>
                    <Users className="h-8 w-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0 gradient-safety text-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Safe Zones</p>
                      <p className="text-3xl font-bold">156</p>
                      <p className="text-xs opacity-80">Geo-fenced areas</p>
                    </div>
                    <Shield className="h-8 w-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0 bg-warning text-warning-foreground">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Active Alerts</p>
                      <p className="text-3xl font-bold">7</p>
                      <p className="text-xs opacity-80">Requires attention</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0 bg-success text-success-foreground">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Response Time</p>
                      <p className="text-3xl font-bold">2.3</p>
                      <p className="text-xs opacity-80">Average minutes</p>
                    </div>
                    <Clock className="h-8 w-8 opacity-80" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Alerts */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Recent Alerts</span>
                </CardTitle>
                <CardDescription>Latest safety notifications and incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 border rounded-lg hover:shadow-soft transition-smooth gap-3 sm:gap-0">
                      <div className="flex items-center space-x-3 flex-1">
                        <Badge className={`${getSeverityColor(alert.severity)} text-white text-xs`}>
                          {alert.severity}
                        </Badge>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-card-foreground text-sm sm:text-base break-words">{alert.message}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{alert.time}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto min-h-[40px]">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4 sm:space-y-6">
            {/* Live Tourist Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Live Location Tracking</span>
                    </CardTitle>
                    <CardDescription>Real-time tourist location monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 sm:h-96 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-lg font-semibold text-card-foreground">Interactive Map</p>
                        <p className="text-muted-foreground">Real-time tourist locations and geo-fences</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="h-5 w-5 text-secondary" />
                      <span>Active Tourists</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {activeTourists.map((tourist) => (
                        <div key={tourist.id} className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-card-foreground">{tourist.name}</h4>
                            <Badge className={`${getStatusColor(tourist.status)} text-white`}>
                              {tourist.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{tourist.location}</p>
                          <p className="text-xs text-muted-foreground">{tourist.lastUpdate}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4 sm:space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Safety Analytics</span>
                </CardTitle>
                <CardDescription>Data insights and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-semibold text-card-foreground">Analytics Dashboard</p>
                    <p className="text-muted-foreground">Safety metrics and incident analysis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="incidents" className="space-y-4 sm:space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-emergency" />
                  <span>Incident Management</span>
                </CardTitle>
                <CardDescription>Emergency response and case tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <AlertTriangle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-semibold text-card-foreground">No Active Incidents</p>
                  <p className="text-muted-foreground">All tourists are currently safe</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Dashboard;