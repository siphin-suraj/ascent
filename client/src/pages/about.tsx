import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Users, Award } from "lucide-react";

export default function About() {
  const milestones = [
    { year: "2012", title: "Company Founded", description: "Ascent Group established in Riyadh" },
    { year: "2015", title: "Expansion", description: "Extended our product range and supplier network" },
    { year: "2018", title: "Industry Recognition", description: "Became a trusted name in industrial supply" },
    { year: "2021", title: "Digital Transformation", description: "Modernized operations and customer service" },
    { year: "2024", title: "Market Leadership", description: "Leading supplier with 1000+ satisfied clients" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every product and service we deliver"
    },
    {
      icon: Users,
      title: "Customer Focus", 
      description: "Our customers' success is our primary goal and motivation"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices"
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We continuously evolve to meet changing market demands"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6" data-testid="text-about-hero-title">
            Our <span className="text-accent">Story</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto" data-testid="text-about-hero-description">
            Building trust through quality, reliability, and exceptional service since 2012
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8" data-testid="text-about-story-title">
                <span className="gradient-text">Our Journey</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-story-p1">
                  Established in 2012, Ascent Group has become a prominent name in the industrial supply sector, particularly in commercial construction. We distinguish ourselves through our unwavering dedication to quality and continuous innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-story-p2">
                  We collaborate with trusted manufacturers and suppliers to ensure premium-quality products at competitive prices. Our strong network enables us to deliver excellence on time, every time.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-story-p3">
                  Over the years, we have expanded our product range and built lasting relationships with businesses across various industries. Today, we serve over 1,000 satisfied clients throughout the Kingdom, maintaining our commitment to quality and customer service.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                alt="Professional business team collaboration"
                className="rounded-xl shadow-lg w-full"
                data-testid="img-about-team"
              />
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
                alt="Modern warehouse facility"
                className="rounded-xl shadow-lg w-full"
                data-testid="img-about-warehouse"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary" data-testid="text-about-vision-title">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-vision-content">
                  To be the leading wholesale and retail supplier in the region, known for our exceptional quality, reliability, and customer service. We envision a future where businesses can rely on us as their primary partner for all procurement needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-accent" data-testid="text-about-mission-title">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-mission-content">
                  To help businesses simplify procurement, reduce costs, and improve operational efficiency through our comprehensive product range and customer-focused approach. We are committed to building long-term partnerships based on trust and mutual success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" data-testid="text-about-values-title">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-values-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover-lift" data-testid={`card-value-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6" data-testid="text-about-timeline-title">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-about-timeline-subtitle">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center gap-8" data-testid={`milestone-${index}`}>
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-black text-lg" data-testid={`text-milestone-year-${index}`}>
                    {milestone.year}
                  </span>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2" data-testid={`text-milestone-title-${index}`}>
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-milestone-description-${index}`}>
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6" data-testid="text-about-cta-title">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-about-cta-description">
            Join the hundreds of businesses who trust Ascent Group for their procurement needs
          </p>
          <Button asChild size="lg" className="font-semibold" data-testid="button-about-contact">
            <a href="/contact">
              <ArrowRight className="mr-2 h-5 w-5" />
              Start Your Partnership
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
