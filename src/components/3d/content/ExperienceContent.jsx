export default function ExperienceContent({ planetColor = '#FF6B35' }) {
  const experiences = [
    {
      company: 'Rouxbe',
      role: 'Software Development Contractor',
      period: 'Present',
      description: 'Reduced manual data entry by automating extraction of 10,000+ client records with a Python web scraper and consolidating the data into a centralized repository. Decreased support backlog by 60% by building and deploying an AI-powered HR chatbot (OpenAI API + Flask) integrated into Slack, automating 60+ employee inquiries monthly.',
    },
    {
      company: 'Sobel & Co LLC.',
      role: 'Information Technology Intern',
      period: 'Previous',
      description: 'Reduced IT audit preparation time by 50% and boosted inventory accuracy by 35% by developing a SQL-based asset management system logging and tracking 200+ equipment assets. Shortened compliance audit duration by 30% by automating discovery and classification of 500+ endpoints with Lansweeper and generating real-time reports and dashboards. Provided technical support resolving 60+ monthly hardware and software issues through Helpdesk ticketing system.',
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
      <h1 style={{ fontSize: '28px', marginBottom: '20px', ...headingStyle }}>
        Experience
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              padding: '20px',
              borderRadius: '10px',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <h2 style={{ fontSize: '24px', marginBottom: '5px', ...headingStyle }}>
              {exp.role}
            </h2>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', ...textStyle }}>
              {exp.company}
            </h3>
            <p style={{ fontSize: '14px', ...textStyle, marginBottom: '10px' }}>
              {exp.period}
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', ...textStyle }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

