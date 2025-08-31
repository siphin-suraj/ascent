import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, Shield, HardHat, Plane, Layers, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Premium Footwear",
      shortDesc: "Comfort & Durability for Every Industry",
      fullDesc: "Our comprehensive footwear collection combines comfort, safety, and durability. From steel-toe boots for construction sites to comfortable work shoes for office environments, we provide footwear solutions that protect and support your workforce throughout their workday.",
      icon: Package,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Steel-toe protection", "Slip-resistant soles", "Comfortable all-day wear", "Various sizes available"],
      benefits: ["Reduced workplace injuries", "Improved worker comfort", "Long-lasting durability", "Cost-effective bulk pricing"]
    },
    {
      name: "Quality Plywood",
      shortDesc: "Strong Plywood Built to Last", 
      fullDesc: "We supply premium-grade plywood for construction, furniture making, and industrial applications. Our plywood undergoes rigorous quality testing to ensure structural integrity, moisture resistance, and long-lasting performance for your projects.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Marine-grade options", "Various thicknesses", "Certified quality", "Bulk pricing available"],
      benefits: ["Superior structural strength", "Weather resistance", "Sustainable sourcing", "Competitive wholesale rates"]
    },
    {
      name: "Travel & Tourism",
      shortDesc: "Explore the World with Confidence",
      fullDesc: "Our travel and tourism services help businesses and individuals explore Saudi Arabia and beyond. From corporate travel arrangements to leisure packages, we provide comprehensive travel solutions with attention to detail and customer satisfaction.",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", 
      features: ["Corporate travel packages", "Leisure tourism", "Visa assistance", "24/7 travel support"],
      benefits: ["Hassle-free travel planning", "Expert local knowledge", "Competitive package pricing", "Dedicated support team"]
    },
    {
      name: "Safety Equipment",
      shortDesc: "Complete Safety Solutions",
      fullDesc: "Comprehensive safety equipment and protective gear to keep your workforce safe. Our range includes helmets, gloves, reflective vests, safety glasses, and specialized equipment for various industries and work environments.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["OSHA compliant gear", "High-visibility clothing", "Personal protective equipment", "Industry-specific solutions"],
      benefits: ["Enhanced workplace safety", "Regulatory compliance", "Reduced insurance costs", "Worker confidence"]
    },
    {
      name: "Industrial Clothing",
      shortDesc: "Durable Workwear Solutions", 
      fullDesc: "Professional industrial clothing designed for demanding work environments. Our workwear combines durability, comfort, and professional appearance to ensure your team looks and feels professional while staying protected.",
      icon: HardHat,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Flame-resistant materials", "Moisture-wicking fabrics", "Professional appearance", "Custom branding available"],
      benefits: ["Enhanced team image", "Improved worker comfort", "Extended garment life", "Brand visibility options"]
    },
    {
      name: "Logistics Services",
      shortDesc: "Efficient Delivery Solutions",
      fullDesc: "Reliable logistics and transportation services ensuring your products reach their destination on time, every time. Our logistics network covers the entire Kingdom with tracking capabilities and professional handling of your valuable cargo.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Kingdom-wide delivery", "Real-time tracking", "Secure handling", "Flexible scheduling"],
      benefits: ["Reduced shipping costs", "Faster delivery times", "Secure transportation", "Flexible delivery options"]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-services-hero-title">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto" data-testid="text-services-hero-description">
            Comprehensive wholesale and retail solutions designed to help your business thrive
          </p>
          <Button asChild size="lg" variant="ghost" className="glass-effect border border-white/30 hover:bg-white/30 font-bold" data-testid="button-services-hero-contact">
            <a href="/contact">
              <ArrowRight className="mr-2 h-5 w-5" />
              Get Started Today
            </a>
          </Button>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-20">
            {services.map((service, index) => (
              <div 
                key={service.name} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                data-testid={`section-service-${index}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-foreground" data-testid={`text-service-name-${index}`}>
                        {service.name}
                      </h2>
                      <p className="text-lg text-primary font-semibold" data-testid={`text-service-short-desc-${index}`}>
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid={`text-service-full-desc-${index}`}>
                    {service.fullDesc}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Package className="h-5 w-5 text-primary mr-2" />
                        Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start" data-testid={`text-service-feature-${index}-${featureIndex}`}>
                            <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-2" />
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start" data-testid={`text-service-benefit-${index}-${benefitIndex}`}>
                            <ArrowRight className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="font-semibold" data-testid={`button-service-quote-${index}`}>
                      <a href="/contact">
                        Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="font-semibold" data-testid={`button-service-whatsapp-${index}`}>
                      <a href="https://wa.me/+966545825341">
                        <i className="fab fa-whatsapp mr-2"></i>
                        Ask Questions
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={`${service.name} service`}
                    className="rounded-xl shadow-lg w-full h-96 object-cover"
                    data-testid={`img-service-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6" data-testid="text-process-title">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-process-subtitle">
              Simple steps to get the products and services you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Contact us to discuss your requirements" },
              { step: "2", title: "Quotation", desc: "Receive detailed pricing and product information" },
              { step: "3", title: "Order", desc: "Place your order with flexible payment terms" },
              { step: "4", title: "Delivery", desc: "Fast, reliable delivery to your location" }
            ].map((process, index) => (
              <Card key={process.step} className="text-center hover-lift" data-testid={`card-process-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary-foreground font-black text-xl" data-testid={`text-process-step-${index}`}>
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" data-testid={`text-process-title-${index}`}>
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-process-description-${index}`}>
                    {process.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6" data-testid="text-services-cta-title">
            Ready to Start Your Order?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-services-cta-description">
            Get in touch with our team today for personalized quotes and expert advice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold" data-testid="button-services-contact">
              <a href="/contact">
                <ArrowRight className="mr-2 h-5 w-5" />
                Contact Us Today
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold" data-testid="button-services-call">
              <a href="tel:+966530286549">
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
