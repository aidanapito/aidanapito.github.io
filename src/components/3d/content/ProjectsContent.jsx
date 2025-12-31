export default function ProjectsContent({ planetColor = '#9B59B6' }) {
  const projects = [
    {
      name: 'NHL Fantasy Hockey Helper',
      description: 'Engineered a full-stack TypeScript application that aggregates NHL player statistics and fantasy league data via REST APIs and web scraping, enabling real-time trade analysis and player valuations. Built and productionized PyTorch multi-task neural networks to forecast player performance with batch inference pipelines.',
      tech: ['TypeScript', 'Next.js', 'Prisma', 'PyTorch', 'REST APIs', 'Selenium', 'Playwright'],
      link: '#',
    },
    {
      name: 'Restyled',
      description: 'Developed and launched a SwiftUI wardrobe visualization app with real-time outfit previews. Integrated an AI-powered background-removal feature and engineered a weather-aware Core ML collaborative filtering model with Firebase serverless feedback pipeline, boosting recommendation accuracy by 20%.',
      tech: ['Swift', 'SwiftUI', 'Core ML', 'Firebase', 'AI'],
      link: '#',
    },
    {
      name: 'NCAA Volleyball Stat Scraper',
      description: 'Built a Python pipeline that extracted, cleaned, and validated 15,000+ individual player statistics across 100+ NCAA men\'s volleyball teams over 3 seasons, enabling reliable exploratory data analysis.',
      tech: ['Python', 'Web Scraping', 'Data Analysis'],
      link: '#',
    },
  ]

  const textStyle = {
    color: '#1a1a1a',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.3), 0 0 8px rgba(255, 255, 255, 0.2)',
  }
  
  const headingStyle = {
    ...textStyle,
    color: '#0a0a0a',
    textShadow: `0 1px 3px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.3)`,
  }

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '15px', ...headingStyle }}>
        Projects
      </h1>
      <div style={{ display: 'grid', gap: '15px' }}>
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              padding: '18px',
              borderRadius: '10px',
              backdropFilter: 'blur(5px)',
              transition: 'transform 0.2s',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h2 style={{ fontSize: '20px', marginBottom: '8px', ...headingStyle }}>
              {project.name}
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '1.5', marginBottom: '12px', ...textStyle }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    fontSize: '11px',
                    ...textStyle,
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              style={{
                ...textStyle,
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '600',
                color: '#2d1b4e',
                textShadow: `0 1px 2px rgba(255, 255, 255, 0.4)`,
              }}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

