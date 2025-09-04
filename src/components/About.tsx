import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Code } from "lucide-react";

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "Education", value: "CS @ Rutgers Newark", desc: "Minor in Data Science" },
    { icon: Award, label: "Achievement", value: "All-Academic Team", desc: "Excellence in academics & athletics" },
    { icon: Users, label: "Leadership", value: "Volleyball Captain", desc: "Nationally ranked team" },
    { icon: Code, label: "Experience", value: "2+ Years", desc: "Software Engineering" }
  ];

  const coursework = [
    "Advanced Data Structures & Algorithms",
    "Machine Learning & AI", 
    "Software Engineering",
    "Database System Design",
    "Popular Data Science Models",
    "Intensive Programming in Linux"
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="nebula-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Software Engineer with a passion for innovation, 
            combining technical expertise with leadership experience to create impactful solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:glow-primary transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mx-auto mb-4 p-3 rounded-full bg-primary/20 w-fit">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.desc}</p>
            </Card>
          ))}
        </div>

        {/* Education & Coursework */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 hover:glow-accent transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 nebula-text">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  Rutgers University Newark / NJIT College of Computing Sciences
                </h4>
                <p className="text-muted-foreground">Newark, New Jersey</p>
                <p className="text-primary font-medium">Bachelor's in Computer Science</p>
                <p className="text-sm text-muted-foreground">Minor: Data Science • May 2025</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:glow-accent transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 nebula-text">Relevant Coursework</h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {course}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;