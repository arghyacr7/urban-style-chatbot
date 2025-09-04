import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: ["Women", "Men", "Accessories", "New Arrivals", "Sale"]
    },
    {
      title: "Customer Care",
      links: ["Contact Us", "Size Guide", "Shipping Info", "Returns", "FAQ"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Sustainability", "Privacy Policy"]
    }
  ];

  return (
    <footer className="bg-neutral-100 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Urban Style</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Timeless fashion for the modern individual. Discover our curated collection 
              of sustainable and ethically-made clothing.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 6289898300</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>iamarghyacr7@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="font-semibold text-foreground mb-2">Stay in the loop</h4>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for exclusive offers and style updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="btn-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Urban Style. All rights reserved. Made with care for fashion lovers by Arghyadeep Das.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;