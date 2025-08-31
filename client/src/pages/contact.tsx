import ContactForm from "@/components/sections/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+966 53 028 6549",
      action: "tel:+966530286549",
      description: "Available during business hours"
    },
    {
      icon: Mail,
      title: "Email Us", 
      content: "official@ascentgroupsa.com",
      action: "mailto:official@ascentgroupsa.com",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "AL FAISALIYYAH, RIYADH 12891",
      action: "#",
      description: "SHEHAB AL DINE AL QALQASHANDI"
    }
  ];

  const businessHours = [
    { day: "Sunday - Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "Closed" },
    { day: "Saturday", hours: "9:00 AM - 3:00 PM" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-contact-hero-title">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto" data-testid="text-contact-hero-description">
            Ready to start your project? We're here to help you find the perfect solutions for your business needs
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="text-center hover-lift" data-testid={`card-contact-method-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`text-contact-method-title-${index}`}>
                    {method.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-2" data-testid={`text-contact-method-content-${index}`}>
                    {method.content}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4" data-testid={`text-contact-method-description-${index}`}>
                    {method.description}
                  </p>
                  <Button asChild variant="outline" data-testid={`button-contact-method-${index}`}>
                    <a href={method.action}>Contact Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Additional Information */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Business Hours */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold" data-testid="text-business-hours-title">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={schedule.day} className="flex justify-between" data-testid={`schedule-${index}`}>
                      <span className="text-muted-foreground" data-testid={`text-schedule-day-${index}`}>{schedule.day}</span>
                      <span className="font-semibold" data-testid={`text-schedule-hours-${index}`}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold" data-testid="text-location-title">Our Location</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground" data-testid="text-location-address">
                    SHEHAB AL DINE AL QALQASHANDI<br />
                    AL FAISALIYYAH<br />
                    RIYADH 12891<br />
                    SAUDI ARABIA
                  </p>
                  <Button variant="outline" className="w-full mt-4" data-testid="button-location-directions">
                    <Globe className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold" data-testid="text-emergency-title">Emergency Support</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground" data-testid="text-emergency-description">
                    For urgent business inquiries and emergency orders, reach out to us directly.
                  </p>
                  <Button asChild className="w-full" data-testid="button-emergency-whatsapp">
                    <a href="https://wa.me/+966545825341">
                      <i className="fab fa-whatsapp mr-2"></i>
                      WhatsApp Support
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-6" data-testid="text-map-title">
              Find Us in <span className="gradient-text">Riyadh</span>
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-map-description">
              Located in the heart of Riyadh's business district
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="w-full h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" data-testid="text-map-placeholder-title">Interactive Map</h3>
                <p className="text-muted-foreground" data-testid="text-map-placeholder-description">
                  Map integration available in production
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
