import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Cloud, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "R", "Swift", "C++", "C#", "JavaScript", "C", "HTML/CSS", "SQL", "Java"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["Flask", "SwiftUI", "Core ML", "OpenGL", "NumPy", "Jupyter", ".NET", "ASP.NET Core", "Entity Framework"],
      color: "text-green-400"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Machine Learning", "OpenAI API", "Core ML", "Data Science", "AI Integration"],
      color: "text-purple-400"
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: ["Docker", "Firebase", "Git", "Xcode", "Linux", "WeatherAPI"],
      color: "text-cyan-400"
    },
    {
      title: "Databases & Systems",
      icon: Database,
      skills: ["SQL", "SQL Server", "Firebase", "Asset Management", "Network Systems"],
      color: "text-orange-400"
    },
    {
      title: "Mobile & Web",
      icon: Smartphone,
      skills: ["SwiftUI", "Web Scraping", "Flask", "JavaScript", "HTML/CSS"],
      color: "text-pink-400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="nebula-text">Technical Constellation</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A diverse skill set spanning multiple domains of software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:glow-primary transition-all duration-300 animate-slide-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto hover:glow-accent transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 nebula-text">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about staying current with emerging technologies and continuously expanding 
              my skill set. Whether it's exploring new AI frameworks, diving into advanced algorithms, 
              or building innovative applications, I approach every challenge as an opportunity to learn 
              and create something meaningful.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;