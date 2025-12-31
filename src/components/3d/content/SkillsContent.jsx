export default function SkillsContent({ planetColor = '#E74C3C' }) {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'R', 'C#', 'TypeScript', 'Swift', 'C++', 'JavaScript', 'C', 'HTML/CSS', 'SQL'],
    },
    {
      category: 'Frameworks',
      skills: ['Flask', 'Next.js', 'PyTorch', 'PySpark', 'Scikit-learn', 'Prisma', 'SwiftUI', 'Selenium', 'Playwright'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Docker', 'Firebase', 'Git', 'Xcode', 'Linux', 'Jupyter', 'NLP', 'RAG', 'Prompt Engineering', 'REST APIs', 'Web Scraping'],
    },
  ]

  const textStyle = {
    color: '#ffffff',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9), 2px 2px 4px rgba(0, 0, 0, 0.9)',
  }
  
  const headingStyle = {
    ...textStyle,
    textShadow: `0 0 15px ${planetColor}, 0 0 20px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)`,
  }

  return (
    <div>
      <h1 style={{ fontSize: '28px', marginBottom: '20px', ...headingStyle }}>
        Skills
      </h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {skillCategories.map((category, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '20px',
              borderRadius: '10px',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <h2 style={{ fontSize: '20px', marginBottom: '15px', ...headingStyle }}>
              {category.category}
            </h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {category.skills.map((skill, j) => (
                <span
                  key={j}
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    ...textStyle,
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

