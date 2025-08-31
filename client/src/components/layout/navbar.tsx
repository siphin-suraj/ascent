import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3" data-testid="link-logo">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-black text-xl">A</span>
          </div>
          <div>
            <h1 className="text-xl font-black text-primary">ASCENT GROUP</h1>
            <p className="text-xs text-muted-foreground">Riyadh, Saudi Arabia</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={`font-semibold transition-colors ${
                  location === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            </Link>
          ))}
          <Button asChild className="font-semibold" data-testid="button-call-now">
            <a href="tel:+966530286549">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navigation.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={`font-heading text-3xl transition-all duration-300 hover:scale-110 ${
                    location === item.href
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  } ${isMobileMenuOpen ? 'slide-in-left' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Button asChild className="mt-8 text-lg px-8 py-4 scale-in" data-testid="button-mobile-call">
              <a href="tel:+966530286549">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
