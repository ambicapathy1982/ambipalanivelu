import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Users } from "lucide-react";
import profilePhoto from "@/assets/ambi-photo.jpg";

const About = () => {
  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Driven by Innovation
            </h2>
          </div>
          
          {/* Two-column layout with photo and bio */}
          <div className="grid md:grid-cols-2 gap-12 mb-12 animate-slide-up">
            {/* Professional Photo */}
            <div className="flex justify-center items-start">
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Photo of Ambicapathy Palanivelu, Cloud Operations Engineer"
                  className="rounded-2xl shadow-elegant w-full max-w-md object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
            </div>
            
            {/* Biography Content */}
            <Card 
              className="p-10 border-white/20 text-white font-medium" 
              style={{ 
                backgroundColor: 'rgba(20, 40, 80, 0.85)',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
              }}
            >
              <h3 className="text-2xl font-montserrat font-bold mb-4">About Me</h3>
              <p className="text-lg font-source-sans leading-relaxed mb-6">
                Hello! I'm Ambicapathy Palanivelu, a Senior Cloud Operations Engineer and Systems Engineer with a deep passion 
                for building scalable, secure, and automated cloud infrastructures that drive real business value. 
              </p>
              
              <p className="text-lg font-source-sans leading-relaxed mb-6">
                My journey in cloud technology has taken me through some incredible organizations—from leading cloud automation 
                initiatives at <strong>Gallup</strong>, providing enterprise-level support at <strong>AWS</strong>, to ensuring 
                financial services uptime at <strong>Fiserv</strong>, and driving deployment automation at <strong>Cognizant</strong> 
                and <strong>HCL Technologies</strong>. Each role has enriched my expertise in AWS, Linux, DevOps, and Infrastructure as Code.
              </p>
              
              <p className="text-lg font-source-sans leading-relaxed mb-6">
                I hold certifications as an <strong>AWS Certified SysOps Administrator</strong>, <strong>AI Practitioner</strong>, 
                and <strong>Linux Subject Matter Expert</strong>—credentials that reflect my commitment to staying at the cutting edge 
                of cloud operations and emerging technologies.
              </p>
              
              <p className="text-lg font-source-sans leading-relaxed">
                What drives me? The challenge of solving complex technical problems, the thrill of automation that transforms operations, 
                and the opportunity to lead teams toward innovation. Whether it's architecting resilient infrastructures, exploring AI 
                and machine learning applications, or mentoring fellow engineers, I'm always eager to push boundaries and build the future 
                of cloud technology.
              </p>
            </Card>
          </div>
          
          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card 
              className="p-6 border-white/20 text-center text-white font-medium" 
              style={{ 
                backgroundColor: 'rgba(20, 40, 80, 0.85)',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
              }}
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">Continuous Learning</h3>
              <p className="font-source-sans text-sm">
                Always exploring new technologies and best practices
              </p>
            </Card>
            
            <Card 
              className="p-6 border-white/20 text-center text-white font-medium" 
              style={{ 
                backgroundColor: 'rgba(20, 40, 80, 0.85)',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
              }}
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">Collaboration</h3>
              <p className="font-source-sans text-sm">
                Building strong teams and sharing knowledge
              </p>
            </Card>
            
            <Card 
              className="p-6 border-white/20 text-center text-white font-medium" 
              style={{ 
                backgroundColor: 'rgba(20, 40, 80, 0.85)',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
              }}
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">Problem Solving</h3>
              <p className="font-source-sans text-sm">
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
