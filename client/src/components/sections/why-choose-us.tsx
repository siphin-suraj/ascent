import { Card, CardContent } from "@/components/ui/card";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Wide Range of Products",
      description: "We offer an extensive selection of products to meet the diverse needs of our clients. From high-quality plywood and durable footwear to essential safety wear, industrial clothing, and office supplies.",
      icon: "fas fa-boxes",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      title: "Wholesale Expertise", 
      description: "With years of experience in the wholesale industry, we understand the unique demands of businesses. Our expertise allows us to provide tailored solutions for your specific requirements.",
      icon: "fas fa-handshake",
      bgColor: "bg-accent/10", 
      iconColor: "text-accent"
    },
    {
      title: "Quality Assurance",
      description: "Quality is at the core of everything we do. We meticulously select and test our products to ensure they meet the highest standards. Our commitment to quality means you can trust every item.",
      icon: "fas fa-shield-alt",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      title: "Customer-Centric",
      description: "Our clients are at the heart of our business. We strive to build long-lasting relationships by providing exceptional customer service and going the extra mile for satisfaction.",
      icon: "fas fa-users", 
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      title: "Competitive Pricing",
      description: "We offer competitive pricing on all our products without compromising on quality. Our wholesale model allows us to pass on significant savings to our clients.",
      icon: "fas fa-dollar-sign",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      title: "Trusted Partner",
      description: "We have built a reputation as a trusted partner for businesses across various industries. Our reliability, transparency, and commitment to excellence earn client loyalty.",
      icon: "fas fa-award",
      bgColor: "bg-accent/10", 
      iconColor: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 slide-up" data-testid="text-why-choose-title">
            WHY CHOOSE <span className="gradient-text">ASCENT GROUP?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up" data-testid="text-why-choose-subtitle" style={{ animationDelay: '0.2s' }}>
            Efficiency, Quality & Reliability – The Ascent Group Promise
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {features.map((feature, index) => (
            <Card key={feature.title} className="hover-lift" data-testid={`card-feature-${index}`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <i className={`${feature.icon} ${feature.iconColor} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
