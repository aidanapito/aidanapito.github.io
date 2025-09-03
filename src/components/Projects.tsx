import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Zap, Smartphone, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Drone Avoidance Simulator",
      description: "Architected a real-time 3D drone simulator for autonomous navigation with C++/OpenGL and Python/NumPy. Implemented an optimized A* algorithm for 3D waypointing and dynamic obstacle avoidance.",
      period: "August 2025 - September 2025",
      icon: Zap,
      achievements: [
        "Built real-time 3D simulation with C++/OpenGL",
        "Optimized A* algorithm for 3D navigation",
        "Delivered smooth autonomous flight characteristics"
      ],
      technologies: ["C++", "OpenGL", "Python", "NumPy", "A* Algorithm"],
      githubLink: "https://github.com",
      type: "Simulation"
    },
    {
      title: "Restyled",
      description: "Developed and launched a SwiftUI wardrobe visualization app with real-time outfit previews. Integrated AI-powered background removal and weather-aware Core ML recommendation system.",
      period: "June 2025 - August 2025",
      icon: Smartphone,
      achievements: [
        "Launched on App Store with SwiftUI",
        "AI-powered background removal integration",
        "20% boost in recommendation accuracy with Core ML"
      ],
      technologies: ["SwiftUI", "Core ML", "Firebase", "WeatherAPI", "AI/ML"],
      appStoreLink: "https://apps.apple.com",
      type: "Mobile App"
    },
    {
      title: "NCAA Volleyball Stat Scraper",
      description: "Built and maintained a Python pipeline that parsed stats for every NCAA men's volleyball team across 3 seasons. Achieved 100% extraction accuracy through rigorous testing and optimization.",
      period: "November 2023 - May 2025",
      icon: BarChart3,
      achievements: [
        "Scraped 3 seasons of NCAA volleyball data",
        "Achieved 100% extraction accuracy",
        "Optimized performance with analysis features"
      ],
      technologies: ["Python", "Web Scraping", "Data Analysis", "Testing"],
      githubLink: "https://github.com",
      type: "Data Analytics"
    }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="nebula-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative solutions spanning AI, mobile development, and data analytics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 h-full flex flex-col hover:glow-accent transition-all duration-300 animate-slide-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {project.type}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {project.period}
                </p>

                <p className="text-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-2 pt-4 border-t border-border">
                {project.githubLink && (
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                )}
                {project.appStoreLink && (
                  <Button variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    App Store
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;