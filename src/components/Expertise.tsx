import { Card } from "@/components/ui/card";
import { Cloud, Server, Code, GitBranch, Database, Lock } from "lucide-react";

const expertiseAreas = [
  {
    icon: Cloud,
    title: "AWS Cloud Architecture",
    description: "Designing and implementing scalable, resilient cloud solutions with EC2, S3, Lambda, CloudFormation, and more.",
  },
  {
    icon: Server,
    title: "Linux System Administration",
    description: "Expert-level management of RedHat, CentOS, Ubuntu systems with focus on performance, security, and reliability.",
  },
  {
    icon: Code,
    title: "Infrastructure as Code",
    description: "Automating infrastructure provisioning and management using Terraform, Ansible, and CloudFormation.",
  },
  {
    icon: GitBranch,
    title: "DevOps Best Practices",
    description: "Implementing CI/CD pipelines, version control, and automated deployment strategies for seamless delivery.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Managing PostgreSQL, MySQL, MongoDB with optimization, backup strategies, and high availability.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Implementing robust security measures, IAM policies, and compliance frameworks across cloud environments.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Core Expertise
          </h2>
          <p className="text-lg text-muted-foreground font-source-sans max-w-2xl mx-auto">
            Deep technical knowledge across cloud operations, system engineering, and modern DevOps practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                <area.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground font-source-sans leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
