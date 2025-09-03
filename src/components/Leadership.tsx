import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Award, Calendar } from "lucide-react";

const Leadership = () => {
  const activities = [
    {
      organization: "Rutgers University Newark Men's Volleyball Team",
      role: "Captain of nationally ranked volleyball team",
      location: "Newark, New Jersey",
      period: "November 2021 – April 2025",
      icon: Trophy,
      achievements: [
        "Guided a 15‑member squad to national ranking",
        "Mentored incoming athletes and facilitated team integration", 
        "Recognized as a member of the Rutgers University–Newark All-Academic Team",
        "Balanced high academic performance with athletics and leadership responsibilities"
      ],
      highlights: ["National Ranking", "All-Academic Team", "4+ Years Leadership"]
    },
    {
      organization: "Rutgers University Newark Student Athlete Advisory Committee",
      role: "Member",
      location: "Newark, New Jersey", 
      period: "September 2023 – May 2025",
      icon: Users,
      achievements: [
        "Advocated for athlete welfare and student-athlete rights",
        "Organized 5+ wellness and networking events",
        "Engaged 200+ student athletes across various sports",
        "Contributed to policy discussions affecting student-athlete experience"
      ],
      highlights: ["200+ Athletes Engaged", "5+ Events Organized", "Advocacy Role"]
    }
  ];

  return (
    <section className="py-20 px-4" id="leadership">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="nebula-text">Leadership & Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Combining athletic excellence with academic achievement and community leadership
          </p>
        </div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <Card key={index} className="p-8 hover:glow-accent transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon & Highlights */}
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-full bg-primary/20 mb-4 w-fit">
                    <activity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, hIndex) => (
                      <Badge key={hIndex} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {activity.organization}
                  </h3>
                  <h4 className="text-xl text-primary font-semibold mb-4">
                    {activity.role}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {activity.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      {activity.location}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activity.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <p className="text-foreground leading-relaxed text-sm">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16">
          <Card className="p-8 text-center hover:glow-primary transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 nebula-text">
                Recognized Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As a member of the Rutgers University–Newark All-Academic Team, I've demonstrated 
                the ability to excel both in the classroom and on the court, maintaining high 
                academic standards while leading a nationally competitive athletics program.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;