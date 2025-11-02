import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          
          <p className="text-lg text-muted-foreground font-source-sans mb-12 leading-relaxed">
            I'm always interested in discussing cloud architecture, DevOps innovations, or potential collaboration opportunities. 
            Feel free to reach out on LinkedIn!
          </p>
          
          <Card className="p-10 bg-gradient-hero border-none shadow-medium animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-source-sans font-semibold text-lg px-8 py-6 w-full sm:w-auto shadow-medium"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/ambicapathyp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-source-sans font-semibold text-lg px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <a 
                  href="mailto:contact@example.com"
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </Card>
          
          <p className="text-sm text-muted-foreground font-source-sans mt-8">
            Open to discussing cloud architecture, infrastructure automation, and emerging technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
