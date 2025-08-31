import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      name: "Footwear",
      description: "Premium footwear for every industry - comfort and durability combined",
      icon: "fas fa-shoe-prints",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Professional industrial footwear"
    },
    {
      name: "Plywood", 
      description: "Strong plywood built to last - premium quality for construction needs",
      icon: "fas fa-layer-group",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Premium plywood sheets"
    },
    {
      name: "Travel & Tourism",
      description: "Explore the world with our comprehensive travel solutions", 
      icon: "fas fa-plane",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Saudi Arabia tourism destination"
    },
    {
      name: "Safety Wear",
      description: "Complete safety solutions to protect your workforce",
      icon: "fas fa-hard-hat", 
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Professional safety equipment"
    },
    {
      name: "Industrial Wear",
      description: "Durable industrial clothing for demanding work environments",
      icon: "fas fa-tshirt",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", 
      alt: "Industrial workwear and uniforms"
    },
    {
      name: "Logistics",
      description: "Efficient delivery solutions - on time, every time",
      icon: "fas fa-truck",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Logistics and transportation services"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6" data-testid="text-services-title">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive solutions for all your wholesale and retail needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.name} className="overflow-hidden hover-lift" data-testid={`card-service-${index}`}>
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-48 object-cover"
                data-testid={`img-service-${index}`}
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className={`${service.icon} text-primary text-2xl mr-3`}></i>
                  <h3 className="text-xl font-bold" data-testid={`text-service-name-${index}`}>
                    {service.name}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <a 
                  href="/services" 
                  className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center"
                  data-testid={`link-service-learn-more-${index}`}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
