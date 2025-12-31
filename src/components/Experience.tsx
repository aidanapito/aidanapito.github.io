import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Rouxbe",
      position: "Software Development Contractor",
      location: "Totowa, New Jersey",
      period: "June 2025 – July 2025",
      achievements: [
        "Reduced manual data entry by automating extraction of 10,000+ client records with a Python web scraper and consolidating the data into a centralized repository.",
        "Decreased support backlog by 60% by building and deploying an AI-powered HR chatbot (OpenAI API + Flask) integrated into Slack, automating 60+ employee inquiries monthly."
      ],
      skills: ["Python", "OpenAI API", "Flask", "Slack Integration", "Web Scraping"]
    },
    {
      company: "Sobel & Co LLC.",
      position: "Information Technology Intern",
      location: "Livingston, New Jersey",
      period: "June 2022 – January 2023",
      achievements: [
        "Reduced IT audit preparation time by 50% and boosted inventory accuracy by 35% by developing a SQL-based asset management system logging and tracking 200+ equipment assets.",
        "Shortened compliance audit duration by 30% by automating discovery and classification of 500+ endpoints with Lansweeper (network discovery software) and generating real-time reports and dashboards.",
        "Provided technical support resolving 60+ monthly hardware and software issues through Helpdesk ticketing system."
      ],
      skills: ["SQL", "Lansweeper", "Asset Management", "IT Support", "Compliance"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="nebula-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building impactful solutions through hands-on development and innovation
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:glow-primary transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                  <h4 className="text-xl text-primary font-semibold mb-3">{exp.position}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;