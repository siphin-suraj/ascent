import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const services = [
    "Footwear",
    "Plywood", 
    "Travel & Tourism",
    "Safety Wear",
    "Industrial Wear",
    "Logistics"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Story", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "fab fa-instagram", href: "#" },
    { name: "Facebook", icon: "fab fa-facebook", href: "#" },
    { name: "LinkedIn", icon: "fab fa-linkedin", href: "#" },
    { name: "Snapchat", icon: "fab fa-snapchat", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-black text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-black">ASCENT GROUP</h3>
                <p className="text-sm opacity-70">Riyadh, Saudi Arabia</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Your trusted wholesale & retail supplier since 2012. Quality products, competitive prices, exceptional service.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <a className="hover:text-accent transition-colors" data-testid={`link-footer-service-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                      {service}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a className="hover:text-accent transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="hover:text-accent transition-colors" data-testid="link-footer-terms">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span data-testid="text-footer-phone">+966 53 028 6549</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span data-testid="text-footer-email">official@ascentgroupsa.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span data-testid="text-footer-address">
                  SHEHAB AL DINE AL QALQASHANDI,<br />
                  AL FAISALIYYAH, RIYADH 12891
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-colors"
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-12 text-center">
          <p className="text-sm opacity-70">
            © 2024 All Rights Reserved by{" "}
            <span className="font-bold text-accent">ASCENT GROUP SA</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
