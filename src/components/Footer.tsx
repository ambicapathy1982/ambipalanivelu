import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "AI Agents", path: "/ai-agents-by-industry" },
    { name: "Certifications", path: "/certifications" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-source-sans text-sm hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center border-t border-primary-foreground/20 pt-8">
            <p className="font-source-sans text-sm">
              © {new Date().getFullYear()} Ambicapathy Palanivelu. Building the future of cloud infrastructure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
