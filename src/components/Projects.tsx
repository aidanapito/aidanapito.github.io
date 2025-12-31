import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Brain, Smartphone, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NHL Fantasy Hockey Helper",
      description: "Engineered a full-stack TypeScript application (Next.js, Prisma) that aggregates NHL player statistics and fantasy league data via REST APIs and web scraping (Selenium/Playwright), enabling real-time trade analysis and player valuations.",
      period: "November 2025 – Present",
      icon: Brain,
      achievements: [
        "Built full-stack TypeScript application with Next.js and Prisma",
        "Integrated PyTorch multi-task neural networks for player performance forecasting",
        "Implemented batch inference pipelines for week-ahead matchup projections and trade recommendations"
      ],
      technologies: ["TypeScript", "Next.js", "Prisma", "PyTorch", "Selenium", "Playwright", "REST APIs", "Web Scraping"],
      githubLink: "https://github.com/aidanapito/NHLFantasyHockeyTool",
      type: "Full-Stack AI Application"
    },
    {
      title: "Restyled",
      description: "Developed and launched a SwiftUI wardrobe visualization app with real-time outfit previews. Integrated an AI-powered background-removal feature and engineered a weather-aware Core ML collaborative filtering model.",
      period: "June 2025 – August 2025",
      icon: Smartphone,
      achievements: [
        "Launched on App Store with SwiftUI",
        "Integrated AI-powered background-removal feature for clean garment images",
        "Engineered weather-aware Core ML model with Firebase serverless feedback pipeline, boosting recommendation accuracy by 20%"
      ],
      technologies: ["SwiftUI", "Core ML", "Firebase", "AI/ML", "Serverless"],
      appStoreLink: "https://apps.apple.com/us/app/restyled/id6751082870",
      type: "Mobile App"
    },
    {
      title: "NCAA Volleyball Stat Scraper",
      description: "Built a Python pipeline that extracted, cleaned, and validated 15,000+ individual player statistics across 100+ NCAA men's volleyball teams over 3 seasons, enabling reliable exploratory data analysis.",
      period: "November 2023 – May 2025",
      icon: BarChart3,
      achievements: [
        "Extracted 15,000+ player statistics across 100+ teams",
        "Processed 3 seasons of NCAA volleyball data",
        "Enabled reliable exploratory data analysis through data validation"
      ],
      technologies: ["Python", "Web Scraping", "Data Analysis", "Data Validation"],
      githubLink: "https://github.com/aidanapito/parser",
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
                  <Button variant="ghost" size="sm" className="flex-1" onClick={() => window.open(project.githubLink, '_blank')}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                )}
                {project.appStoreLink && (
                  <Button variant="ghost" size="sm" className="flex-1" onClick={() => window.open(project.appStoreLink, '_blank')}>
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