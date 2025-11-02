import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Automating AWS Infrastructure with Terraform",
      excerpt: "A comprehensive guide to building scalable, repeatable infrastructure as code using Terraform and AWS best practices.",
      publishDate: "Coming Soon",
      readTime: "12 min read",
      tags: ["AWS", "Terraform", "IaC", "DevOps"],
      status: "planned"
    },
    {
      title: "Best Practices for Linux System Hardening",
      excerpt: "Essential security configurations and hardening techniques for enterprise Linux systems in production environments.",
      publishDate: "Coming Soon",
      readTime: "10 min read",
      tags: ["Linux", "Security", "Systems Administration"],
      status: "planned"
    },
    {
      title: "Kubernetes Cost Optimization Strategies",
      excerpt: "Practical approaches to reducing Kubernetes infrastructure costs while maintaining performance and reliability.",
      publishDate: "Coming Soon",
      readTime: "15 min read",
      tags: ["Kubernetes", "Cloud Cost", "Optimization"],
      status: "planned"
    },
    {
      title: "Building Resilient Cloud Architectures",
      excerpt: "Design patterns and strategies for creating highly available, fault-tolerant cloud systems that withstand failures gracefully.",
      publishDate: "Coming Soon",
      readTime: "14 min read",
      tags: ["AWS", "Architecture", "High Availability"],
      status: "planned"
    },
    {
      title: "AI-Powered DevOps: The Future of Operations",
      excerpt: "Exploring how AI and machine learning are transforming DevOps practices, from predictive monitoring to intelligent automation.",
      publishDate: "Coming Soon",
      readTime: "18 min read",
      tags: ["AI/ML", "DevOps", "Automation", "Innovation"],
      status: "planned"
    },
    {
      title: "CI/CD Pipeline Design: From Zero to Production",
      excerpt: "Step-by-step guide to designing robust CI/CD pipelines that enable fast, safe, and reliable software delivery.",
      publishDate: "Coming Soon",
      readTime: "20 min read",
      tags: ["CI/CD", "Jenkins", "GitLab", "DevOps"],
      status: "planned"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Technical Blog
            </h1>
            <p className="text-xl font-source-sans leading-relaxed" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              Insights, tutorials, and deep dives into cloud operations, DevOps practices, system administration, 
              and emerging technologies. Stay tuned for upcoming articles.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-montserrat font-bold mb-4">
              Get Notified When New Articles Drop
            </h2>
            <p className="font-source-sans text-muted-foreground mb-6">
              Subscribe to receive updates about new technical articles, tutorials, and industry insights.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <button className="bg-primary text-primary-foreground font-source-sans font-semibold px-6 py-2 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-lg transition-shadow flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex-1">
                  <Badge className="bg-accent text-accent-foreground font-semibold px-3 py-1 mb-3 w-fit">
                    Coming Soon
                  </Badge>
                  <CardTitle className="text-xl font-montserrat mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="font-source-sans text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics of Interest */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold mb-6 text-center">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-montserrat">Practical Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-source-sans text-sm text-muted-foreground">
                    Step-by-step guides with real-world examples, code snippets, and best practices you can apply immediately.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-montserrat">Architecture Deep Dives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-source-sans text-sm text-muted-foreground">
                    In-depth explorations of cloud architecture patterns, design decisions, and scalability strategies.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-montserrat">DevOps Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-source-sans text-sm text-muted-foreground">
                    Lessons learned from years of building CI/CD pipelines, automation frameworks, and operational excellence.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-montserrat">Emerging Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-source-sans text-sm text-muted-foreground">
                    Insights into AI/ML integration, serverless architectures, and the latest innovations shaping the future of cloud.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
