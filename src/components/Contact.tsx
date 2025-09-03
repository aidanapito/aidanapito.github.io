import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "aidan2apito@gmail.com",
      href: "mailto:aidan2apito@gmail.com",
      description: "Best way to reach me for opportunities"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/aidanapito",
      href: "https://github.com/aidanapito",
      description: "Check out my latest projects and code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aidanapito",
      href: "https://www.linkedin.com/in/aidanapito/",
      description: "Let's connect professionally"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="nebula-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology. 
            Whether you're looking for a dedicated developer, have a project in mind, or just want to chat 
            about the latest in AI and software development, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="p-6 hover:glow-primary transition-all duration-300 animate-slide-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(method.href, '_blank')}>
              
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/20 w-fit group-hover:bg-primary/30 transition-colors">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {method.label}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-2">
                  {method.value}
                </p>
                
                <p className="text-xs text-muted-foreground">
                  {method.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 max-w-4xl mx-auto hover:glow-accent transition-all duration-300">
            <div className="space-y-6">
              <Send className="h-12 w-12 text-accent mx-auto" />
              
              <div>
                <h3 className="text-2xl font-bold mb-4 nebula-text">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm currently open to internship opportunities, full-time positions starting after 
                  my graduation in May 2025, and exciting project collaborations. Let's create something 
                  extraordinary together.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="glow-primary animate-pulse-glow" onClick={() => window.open('mailto:aidan2apito@gmail.com', '_blank')}>
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                  <Button variant="outline" size="lg" className="hover:glow-accent" onClick={() => window.open('https://github.com/aidanapito', '_blank')}>
                    <Github className="mr-2 h-5 w-5" />
                    View My Work
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;