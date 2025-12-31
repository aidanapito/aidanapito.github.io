export default function LeadershipContent({ planetColor = '#F39C12' }) {
  const achievements = [
    {
      title: 'Captain',
      organization: 'Rutgers University Newark Men\'s Volleyball Team',
      description: 'Guided a 15-member squad to national ranking and mentored incoming athletes. Recognized as a member of the Rutgers University–Newark All-Academic Team for maintaining high academic performance while balancing the demands of athletics and leadership responsibilities.',
      year: '2021 - 2025',
    },
    {
      title: 'Member',
      organization: 'Rutgers University Newark Student Athlete Advisory Committee',
      description: 'Advocated for athlete well-being; organized 5+ wellness and networking events engaging 200+ student athletes.',
      year: '2021 - 2025',
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
        Leadership & Achievements
      </h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', ...textStyle }}>
        My journey in leadership, mentorship, and making an impact in the tech community.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {achievements.map((achievement, i) => (
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
              <h2 style={{ fontSize: '24px', ...headingStyle }}>
                {achievement.title}
              </h2>
              <span style={{ fontSize: '14px', ...textStyle }}>
                {achievement.year}
              </span>
            </div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px', ...textStyle }}>
              {achievement.organization}
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', ...textStyle }}>
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

