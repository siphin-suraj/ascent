export default function CompanyHighlights() {
  const highlights = [
    {
      number: "13",
      label: "Years of Legacy",
      description: "Established since 2012",
      color: "text-primary"
    },
    {
      number: "100%",
      label: "Quality Assured", 
      description: "Premium products only",
      color: "text-accent"
    },
    {
      number: "24/7",
      label: "Customer Support",
      description: "Always here to help", 
      color: "text-primary"
    },
    {
      number: "1K+",
      label: "Happy Clients",
      description: "Trusted partnerships",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center" data-testid={`highlight-${index}`}>
              <div className={`text-6xl font-black ${highlight.color} mb-4`} data-testid={`text-highlight-number-${index}`}>
                {highlight.number}
              </div>
              <div className="text-lg font-semibold text-foreground" data-testid={`text-highlight-label-${index}`}>
                {highlight.label}
              </div>
              <p className="text-muted-foreground" data-testid={`text-highlight-description-${index}`}>
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
