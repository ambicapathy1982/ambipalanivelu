import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Driven by Innovation
            </h2>
          </div>
          
          <Card className="p-10 bg-white/10 backdrop-blur-sm border-white/20 mb-8 animate-slide-up">
            <p className="text-lg font-source-sans leading-relaxed mb-6">
              I'm passionate about leveraging cutting-edge cloud technologies to solve real-world business challenges. 
              My approach combines deep technical expertise with a commitment to continuous learning and innovation.
            </p>
            
            <p className="text-lg font-source-sans leading-relaxed">
              Whether it's architecting resilient cloud infrastructures, automating complex workflows, or exploring 
              emerging technologies like AI and machine learning, I thrive on pushing the boundaries of what's possible 
              in cloud operations and systems engineering.
            </p>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">Continuous Learning</h3>
              <p className="font-source-sans text-sm text-primary-foreground/80">
                Always exploring new technologies and best practices
              </p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">Collaboration</h3>
              <p className="font-source-sans text-sm text-primary-foreground/80">
                Building strong teams and sharing knowledge
              </p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">Problem Solving</h3>
              <p className="font-source-sans text-sm text-primary-foreground/80">
                Finding elegant solutions to complex challenges
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
