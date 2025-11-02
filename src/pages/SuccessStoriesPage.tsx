import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Rocket, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SuccessStoriesPage = () => {
  const stories = [
    {
      company: "Gallup",
      role: "Cloud Operations Engineer",
      challenge: "Manual infrastructure provisioning was slowing down deployment cycles and increasing operational overhead, limiting the team's ability to scale efficiently.",
      solution: "Designed and implemented comprehensive cloud infrastructure automation using Terraform and AWS CloudFormation. Built CI/CD pipelines to automate deployment workflows and reduce manual intervention.",
      technologies: ["AWS", "Terraform", "CloudFormation", "Jenkins", "Python", "Ansible"],
      outcomes: [
        "Reduced infrastructure provisioning time by 70%",
        "Improved deployment reliability with automated testing",
        "Enabled team to scale infrastructure on-demand",
        "Decreased operational costs by 35% through resource optimization"
      ],
      impact: "high"
    },
    {
      company: "AWS",
      role: "Senior Systems Engineer",
      challenge: "Enterprise customers were experiencing complex technical challenges requiring deep AWS expertise and rapid resolution to maintain business-critical operations.",
      solution: "Provided expert-level technical support for AWS enterprise customers, troubleshooting complex infrastructure issues, architecting solutions, and ensuring high availability and performance.",
      technologies: ["AWS EC2", "S3", "RDS", "Lambda", "CloudWatch", "IAM", "VPC"],
      outcomes: [
        "Achieved 98% customer satisfaction rating",
        "Resolved critical incidents with average response time under 1 hour",
        "Mentored junior engineers on AWS best practices",
        "Contributed to internal knowledge base with 50+ solution articles"
      ],
      impact: "high"
    },
    {
      company: "Fiserv",
      role: "Systems Engineer",
      challenge: "Financial services infrastructure required 99.99% uptime with zero tolerance for data loss, demanding robust monitoring, rapid incident response, and proactive maintenance.",
      solution: "Implemented advanced monitoring and alerting systems using CloudWatch, Datadog, and custom scripts. Established proactive maintenance schedules and disaster recovery procedures.",
      technologies: ["Linux", "AWS", "Datadog", "CloudWatch", "Bash", "Python", "PostgreSQL"],
      outcomes: [
        "Achieved 99.98% system uptime over 12-month period",
        "Reduced mean time to recovery (MTTR) by 60%",
        "Implemented automated failover procedures",
        "Zero critical data loss incidents during tenure"
      ],
      impact: "critical"
    },
    {
      company: "Cognizant",
      role: "DevOps Engineer",
      challenge: "Slow, error-prone manual deployment processes were creating bottlenecks, increasing the risk of production incidents, and limiting release frequency.",
      solution: "Built end-to-end CI/CD automation pipelines using Jenkins, GitLab CI, and AWS CodePipeline. Containerized applications with Docker and orchestrated with Kubernetes for scalability.",
      technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "AWS", "Terraform"],
      outcomes: [
        "Reduced deployment time by 60% (from 4 hours to 1.5 hours)",
        "Increased deployment frequency from weekly to daily",
        "Decreased production incidents by 45% through automated testing",
        "Enabled zero-downtime deployments with blue-green strategies"
      ],
      impact: "high"
    },
    {
      company: "HCL Technologies",
      role: "Linux Systems Administrator",
      challenge: "Managing hundreds of Linux servers manually was unsustainable, leading to configuration drift, security vulnerabilities, and operational inefficiencies.",
      solution: "Implemented infrastructure as code using Ansible and Puppet for configuration management. Established automated patch management, security hardening, and compliance monitoring.",
      technologies: ["Linux", "Ansible", "Puppet", "Bash", "Python", "RHEL", "Ubuntu"],
      outcomes: [
        "Automated configuration management for 300+ servers",
        "Reduced security patching time from days to hours",
        "Achieved 100% compliance with security baselines",
        "Decreased mean time to provision new servers by 80%"
      ],
      impact: "high"
    },
    {
      company: "Cross-Company Innovation",
      role: "AI/ML Integration Champion",
      challenge: "Organizations were slow to adopt emerging AI and ML technologies, missing opportunities for intelligent automation and data-driven decision-making.",
      solution: "Championed AI/ML adoption by integrating AWS AI services (SageMaker, Rekognition, Comprehend) into existing workflows. Built proof-of-concepts demonstrating practical business value.",
      technologies: ["AWS SageMaker", "AWS Rekognition", "Python", "TensorFlow", "Lambda", "S3"],
      outcomes: [
        "Implemented intelligent document processing reducing manual effort by 50%",
        "Built anomaly detection system identifying cost optimization opportunities",
        "Created automated image classification pipeline for quality control",
        "Educated 100+ engineers on practical AI/ML applications"
      ],
      impact: "transformative"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "critical": return "bg-red-500";
      case "transformative": return "bg-purple-500";
      default: return "bg-accent";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Rocket className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Success Stories
            </h1>
            <p className="text-xl font-source-sans leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              Real-world impact across leading organizations—from automation breakthroughs to AI integration, 
              delivering measurable business value through technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {stories.map((story, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl font-montserrat mb-2">{story.company}</CardTitle>
                      <CardDescription className="text-base font-semibold text-primary">
                        {story.role}
                      </CardDescription>
                    </div>
                    <Badge className={`${getImpactColor(story.impact)} text-white font-semibold px-3 py-1`}>
                      {story.impact.charAt(0).toUpperCase() + story.impact.slice(1)} Impact
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-destructive" />
                      <h4 className="font-source-sans font-bold text-lg">Challenge</h4>
                    </div>
                    <p className="font-source-sans text-muted-foreground">
                      {story.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h4 className="font-source-sans font-bold text-lg">Solution</h4>
                    </div>
                    <p className="font-source-sans text-muted-foreground mb-3">
                      {story.solution}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {story.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="font-source-sans text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h4 className="font-source-sans font-bold text-lg">Measurable Outcomes</h4>
                    </div>
                    <ul className="space-y-2">
                      {story.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-source-sans text-sm">
                          <span className="text-green-600 mt-1 font-bold">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-4">
              Ready to Drive Similar Results?
            </h2>
            <p className="text-lg font-source-sans mb-6 text-muted-foreground">
              Let's discuss how my experience in cloud operations, automation, and AI can help your organization 
              achieve measurable business outcomes.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-primary text-primary-foreground font-source-sans font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
