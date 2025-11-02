import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Code, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <div className="flex justify-center gap-4 mb-8">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <Cloud className="w-8 h-8" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <Code className="w-8 h-8" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <Shield className="w-8 h-8" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Ambicapathy Palanivelu
          </h1>
          
          <p className="text-xl md:text-2xl font-montserrat font-semibold mb-4 text-accent">
            Senior Cloud Operations Engineer & Systems Engineer
          </p>
          
          <p className="text-lg md:text-xl font-source-sans mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
            Building scalable, secure, and automated cloud infrastructures that drive business success. 
            Passionate about innovation, automation, and solving complex technical challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-source-sans font-semibold text-lg px-8 py-6 shadow-medium"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/ambicapathyp/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-white/10 font-source-sans font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Expertise
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
