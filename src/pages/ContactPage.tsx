import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, MessageSquare, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <MessageSquare className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Let's Connect
            </h1>
            <p className="text-xl font-source-sans leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              Whether you're looking to collaborate on cloud projects, discuss DevOps strategies, or explore 
              AI integration opportunities, I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="consulting">Consulting Opportunity</SelectItem>
                        <SelectItem value="speaking">Speaking Engagement</SelectItem>
                        <SelectItem value="collaboration">Collaboration Proposal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Brief subject line" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full font-source-sans font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {/* Direct Contact Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat">Direct Contact</CardTitle>
                  <CardDescription>
                    Prefer to reach out directly? Use one of these options:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full font-source-sans font-semibold text-lg"
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
                    className="w-full font-source-sans font-semibold text-lg"
                    asChild
                  >
                    <a 
                      href="mailto:ambicapathy@example.com"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-source-sans text-muted-foreground mb-4">
                    I'm open to discussing:
                  </p>
                  <ul className="space-y-2 font-source-sans text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Consulting opportunities for cloud infrastructure and DevOps transformation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Speaking engagements on cloud operations, automation, and AI integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Technical collaboration and knowledge sharing opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Career opportunities aligned with cloud operations and systems engineering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-muted">
                <CardContent className="p-6">
                  <p className="font-source-sans text-sm text-center">
                    <strong>Response Time:</strong> I typically respond to inquiries within 24-48 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-4">
              Let's Talk About
            </h2>
            <p className="text-lg font-source-sans text-muted-foreground mb-8">
              Cloud architecture • DevOps automation • Infrastructure as Code • AI/ML integration • 
              System reliability • Security best practices • Cost optimization • Team leadership
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
