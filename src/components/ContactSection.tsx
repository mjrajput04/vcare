import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Address Card */}
          <Card className="medical-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span>Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-semibold">123 Healthcare Boulevard</p>
                <p className="text-muted-foreground">Medical District, NY 10001</p>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="medical-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-primary">
                <Phone className="w-5 h-5" />
                <span>Phone</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a 
                  href="tel:555-123-4567" 
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  (555) 123-4567
                </a>
                <p className="text-sm text-muted-foreground">Main Hospital Number</p>
              </div>
            </CardContent>
          </Card>

          {/* Directions Card */}
          <Card className="medical-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-primary">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Map & Directions →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary">
                <Clock className="w-5 h-5" />
                <span>Emergency Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-3">
                Our Advanced Trauma Center is available 24/7 for emergency medical care.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergency Department:</span>
                  <span className="font-semibold">24/7 Open</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trauma Center:</span>
                  <span className="font-semibold">Advanced Care</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="text-primary">Visiting Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-3">
                Plan your visit to Vcare Multispecialty Hospital with our comprehensive visitor guide.
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="mr-2">
                  Visitor Guide
                </Button>
                <Button variant="outline" size="sm" className="mr-2">
                  Parking Info
                </Button>
                <Button variant="outline" size="sm">
                  Patient Portal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;