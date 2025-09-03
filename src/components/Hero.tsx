import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import cosmicHeroBg from "@/assets/cosmic-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicHeroBg})` }}
      />
      
      {/* Animated star field overlay */}
      <div className="absolute inset-0 star-field" />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            <span className="nebula-text">Aidan Apito</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-4">
            Software Developer
          </p>
          
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto font-medium">
            Passionate about AI, machine learning, and creating innovative solutions. 
            Graduated from Rutgers University Newark with a minor in Data Science.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="default" size="lg" className="glow-primary animate-pulse-glow" onClick={() => window.open('mailto:aidan2apito@gmail.com', '_blank')}>
              <Mail className="mr-2 h-5 w-5" />
              aidan2apito@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="hover:glow-accent" onClick={() => window.open('/AidanApitoSeptemberResume.pdf', '_blank')}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:glow-primary" onClick={() => window.open('https://github.com/aidanapito', '_blank')}>
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:glow-primary" onClick={() => window.open('https://www.linkedin.com/in/aidanapito/', '_blank')}>
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-80" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-70" 
             style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default Hero;