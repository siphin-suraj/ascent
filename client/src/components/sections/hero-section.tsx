import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 hero-bg"></div>
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 opacity-30"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight slide-in-left" data-testid="text-hero-title">
            <span className="text-white">RIYADH'S</span>{" "}
            <span className="gradient-text block">TRUSTED SUPPLIER</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-medium max-w-3xl slide-up" data-testid="text-hero-description" style={{ animationDelay: '0.3s' }}>
            We take great pride in our strong network, punctual deliveries, and customer-focused approach. Our wholesale and retail solutions are designed to help businesses simplify procurement, reduce costs, and improve operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-4 hover-lift"
              data-testid="button-explore-services"
            >
              <a href="/services">
                <ArrowRight className="mr-3 h-5 w-5" />
                Explore Services
              </a>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg" 
              className="glass-effect text-white border border-white/30 hover:bg-white/30 font-bold text-lg px-8 py-4"
              data-testid="button-chat-whatsapp"
            >
              <a href="https://wa.me/+966545825341">
                <i className="fab fa-whatsapp mr-3"></i>
                Chat With Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce pulse-slow">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
