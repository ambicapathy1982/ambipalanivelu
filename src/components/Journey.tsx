import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const journeySteps = [
  {
    company: "Gallup",
    role: "Senior Cloud Operations Engineer",
    period: "Current",
    achievements: [
      "Leading cloud infrastructure automation initiatives",
      "Implementing advanced monitoring and alerting systems",
      "Driving cost optimization and performance improvements",
    ],
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Cloud Support Engineer",
    period: "Previous",
    achievements: [
      "Provided technical support for enterprise AWS customers",
      "Resolved complex cloud infrastructure issues",
      "Contributed to internal automation tools and knowledge base",
    ],
  },
  {
    company: "Fiserv",
    role: "Senior Systems Engineer",
    period: "Previous",
    achievements: [
      "Managed critical financial services infrastructure",
      "Implemented disaster recovery and high availability solutions",
      "Achieved 99.9% system uptime through proactive monitoring",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Systems Engineer",
    period: "Previous",
    achievements: [
      "Automated deployment processes reducing deployment time by 60%",
      "Managed multi-tenant Linux environments",
      "Mentored junior team members on best practices",
    ],
  },
  {
    company: "HCL Technologies",
    role: "Associate Systems Engineer",
    period: "Previous",
    achievements: [
      "Supported enterprise Linux infrastructure",
      "Developed automation scripts for routine tasks",
      "Participated in 24/7 on-call rotation",
    ],
  },
];

const Journey = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground font-source-sans max-w-2xl mx-auto">
            A track record of delivering measurable impact across leading technology companies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 hidden sm:block"></div>
          
          {journeySteps.map((step, index) => (
            <div 
              key={index} 
              className={`relative mb-12 animate-slide-up ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full -ml-2 mt-6 hidden sm:block ring-4 ring-background"></div>
              
              <Card className="p-8 bg-card border-border hover:shadow-medium transition-all duration-300 ml-16 sm:ml-20 md:ml-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-montserrat font-bold text-foreground mb-1">
                      {step.company}
                    </h3>
                    <p className="text-lg font-source-sans font-semibold text-accent mb-1">
                      {step.role}
                    </p>
                    <p className="text-sm text-muted-foreground font-source-sans">
                      {step.period}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 text-muted-foreground font-source-sans">
                  {step.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
