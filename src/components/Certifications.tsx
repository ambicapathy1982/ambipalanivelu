import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified SysOps Administrator",
    issuer: "Amazon Web Services",
    description: "Demonstrated expertise in deployment, management, and operations on AWS.",
    year: "Associate Level",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    description: "Foundational knowledge of AI, machine learning, and generative AI on AWS.",
    year: "Foundational Level",
  },
  {
    title: "Linux Subject Matter Expert",
    issuer: "Industry Recognized",
    description: "Deep expertise in Linux system administration, troubleshooting, and optimization.",
    year: "Expert Level",
  },
];

const Certifications = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-6">
            <Award className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground font-source-sans max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Badge variant="secondary" className="mb-4 font-source-sans font-semibold">
                {cert.year}
              </Badge>
              
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                {cert.title}
              </h3>
              
              <p className="text-sm text-accent font-source-sans font-semibold mb-4">
                {cert.issuer}
              </p>
              
              <p className="text-muted-foreground font-source-sans leading-relaxed">
                {cert.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
