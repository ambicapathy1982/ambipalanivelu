import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CertificationsPage = () => {
  const certifications = [
    {
      title: "AWS Certified SysOps Administrator – Associate",
      issuer: "Amazon Web Services (AWS)",
      description: "Demonstrates expertise in deployment, management, and operations on AWS, including monitoring, troubleshooting, and implementing security controls.",
      year: "2024",
      status: "Active",
      verifyLink: "https://aws.amazon.com/certification/certified-sysops-admin-associate/"
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      description: "Validates foundational knowledge of AI, machine learning, and generative AI concepts and AWS AI/ML services.",
      year: "2024",
      status: "Active",
      verifyLink: "https://aws.amazon.com/certification/"
    },
    {
      title: "Linux Subject Matter Expert",
      issuer: "Industry Recognition",
      description: "Deep expertise in Linux system administration, kernel operations, security hardening, automation, and enterprise-level infrastructure management.",
      year: "2023",
      status: "Active",
      verifyLink: null
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      description: "Foundational understanding of AWS Cloud, services, and terminology. Entry-level certification demonstrating cloud literacy.",
      year: "2023",
      status: "Active",
      verifyLink: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Certifications
            </h1>
            <p className="text-xl font-source-sans leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              Professional credentials demonstrating deep expertise in cloud operations, system administration, 
              and emerging technologies like AI and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Journey Narrative */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold mb-6 text-center">My Learning Journey</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg font-source-sans leading-relaxed mb-4">
                  My certification journey reflects a commitment to staying at the forefront of cloud technology and systems engineering. 
                  Each credential represents hundreds of hours of study, hands-on practice, and real-world application.
                </p>
                <p className="text-lg font-source-sans leading-relaxed mb-4">
                  Starting with foundational AWS Cloud Practitioner certification, I've progressively deepened my expertise through 
                  SysOps Administrator certification, focusing on operational excellence, monitoring, and security best practices. 
                  My Linux expertise, developed through years of enterprise system administration, positions me as a subject matter expert 
                  in one of the most critical operating systems powering modern cloud infrastructure.
                </p>
                <p className="text-lg font-source-sans leading-relaxed">
                  Recently, I've expanded into AI and machine learning with the AWS AI Practitioner certification, recognizing that 
                  the future of cloud operations lies at the intersection of traditional infrastructure and intelligent automation. 
                  This continuous learning mindset ensures I bring the latest innovations and best practices to every project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-accent text-accent-foreground font-semibold px-3 py-1">
                      {cert.year}
                    </Badge>
                    <Badge variant="outline" className="border-green-500 text-green-600 font-medium">
                      {cert.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-montserrat">{cert.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-source-sans text-sm mb-4 text-muted-foreground">
                    {cert.description}
                  </p>
                  {cert.verifyLink && (
                    <a 
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-source-sans font-medium text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certification Details
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renewal & Commitment */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-montserrat font-bold mb-4">
              Commitment to Continuous Professional Development
            </h2>
            <p className="text-lg font-source-sans text-muted-foreground">
              All AWS certifications are maintained through regular recertification, ensuring knowledge remains current 
              with the latest AWS services, features, and best practices. I'm committed to lifelong learning and staying 
              ahead of the rapidly evolving cloud technology landscape.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationsPage;
