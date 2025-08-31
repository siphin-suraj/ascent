import HeroSection from "@/components/sections/hero-section";
import CompanyHighlights from "@/components/sections/company-highlights";
import ServicesGrid from "@/components/sections/services-grid";
import WhyChooseUs from "@/components/sections/why-choose-us";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyHighlights />
      <ServicesGrid />
      <WhyChooseUs />
      
      {/* Partners Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6" data-testid="text-partners-title">
              Our <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-partners-subtitle">
              Trusted relationships with leading manufacturers and suppliers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-testid={`card-partner-${i}`}>
                <div className="w-full h-16 bg-muted rounded flex items-center justify-center">
                  <i className={`fas fa-${['building', 'industry', 'tools', 'warehouse', 'cogs', 'hammer'][i]} text-3xl text-muted-foreground`}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1565611419710-57a400f9b5e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 opacity-20"
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6" data-testid="text-cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto" data-testid="text-cta-description">
            Join hundreds of satisfied businesses who trust Ascent Group for their wholesale and retail needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-4 hover-lift"
              data-testid="button-cta-whatsapp"
            >
              <a href="https://wa.me/+966545825341">
                <i className="fab fa-whatsapp mr-3"></i>
                Chat With Us
              </a>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg" 
              className="glass-effect border border-white/30 hover:bg-white/30 font-bold text-lg px-8 py-4"
              data-testid="button-cta-call"
            >
              <a href="tel:+966530286549">
                <i className="fas fa-phone mr-3"></i>
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
