import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Heart, Factory, GraduationCap, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AIAgentsPage = () => {
  const industries = [
    {
      icon: TrendingUp,
      title: "Finance & Banking",
      description: "Transforming financial services through intelligent automation",
      useCases: [
        "Fraud detection and prevention with real-time anomaly detection",
        "Automated risk assessment and credit scoring",
        "Algorithmic trading optimization and market analysis",
        "Customer service chatbots for 24/7 support",
        "Compliance monitoring and regulatory reporting",
        "Anti-money laundering (AML) detection systems"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Revolutionizing patient care and medical research",
      useCases: [
        "Medical diagnosis assistance with image analysis",
        "Patient data analysis and treatment outcome prediction",
        "Treatment recommendation systems based on medical history",
        "Hospital resource optimization and scheduling",
        "Drug discovery acceleration through AI modeling",
        "Clinical documentation automation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Retail & E-commerce",
      description: "Enhancing customer experiences and operational efficiency",
      useCases: [
        "Personalized product recommendations based on behavior",
        "Inventory management optimization and demand forecasting",
        "Dynamic pricing strategies with market analysis",
        "Customer behavior prediction and churn prevention",
        "Automated customer support and virtual shopping assistants",
        "Visual search and product discovery"
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Driving Industry 4.0 with intelligent automation",
      useCases: [
        "Predictive maintenance to reduce equipment downtime",
        "Quality control automation with computer vision",
        "Supply chain optimization and logistics planning",
        "Production line efficiency and throughput optimization",
        "Resource allocation and energy management",
        "Defect detection and root cause analysis"
      ]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Personalizing learning and improving outcomes",
      useCases: [
        "Personalized learning paths adapted to student needs",
        "Automated grading systems for assignments and exams",
        "Student performance analytics and early intervention",
        "Adaptive tutoring systems with real-time feedback",
        "Content recommendation and curriculum optimization",
        "Administrative task automation for educators"
      ]
    },
    {
      icon: Code,
      title: "Technology & SaaS",
      description: "Accelerating development and operational excellence",
      useCases: [
        "Code generation, review, and refactoring assistance",
        "Infrastructure monitoring and anomaly detection",
        "Automated testing and quality assurance",
        "Security threat detection and vulnerability scanning",
        "Developer productivity tools and intelligent IDEs",
        "Documentation generation and maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Brain className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              AI Agents by Industry
            </h1>
            <p className="text-xl font-source-sans leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              Discover how AI agents are transforming operations, driving innovation, and creating unprecedented value 
              across diverse industries. From cloud automation to intelligent decision-making, AI is reshaping the future.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <industry.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat">{industry.title}</CardTitle>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-source-sans font-semibold mb-3 text-primary">Key Use Cases:</h4>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-source-sans text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
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
              Ready to Explore AI Solutions?
            </h2>
            <p className="text-lg font-source-sans mb-6 text-muted-foreground">
              Let's discuss how AI agents can transform your industry and drive operational excellence.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-primary text-primary-foreground font-source-sans font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgentsPage;
