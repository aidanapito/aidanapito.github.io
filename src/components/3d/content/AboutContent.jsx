export default function AboutContent({ planetColor = '#4A90E2' }) {
  // Dark text with light shadows for contrast against light backgrounds
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
      <h1 style={{ fontSize: '28px', marginBottom: '15px', ...headingStyle }}>
        About Me
      </h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '25px', ...textStyle }}>
        I'm a dedicated Software Engineer with a passion for innovation, combining technical expertise with leadership experience to create impactful solutions.
      </p>
      
      {/* Key Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '25px' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.25)', padding: '12px', borderRadius: '8px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
          <p style={{ ...textStyle, fontSize: '12px', marginBottom: '5px', opacity: 0.8 }}>Education</p>
          <p style={{ ...textStyle, fontSize: '14px', fontWeight: '600' }}>Computer Science @ Rutgers Newark</p>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.25)', padding: '12px', borderRadius: '8px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
          <p style={{ ...textStyle, fontSize: '12px', marginBottom: '5px', opacity: 0.8 }}>Education</p>
          <p style={{ ...textStyle, fontSize: '14px', fontWeight: '600' }}>Minor in Data Science</p>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.25)', padding: '12px', borderRadius: '8px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
          <p style={{ ...textStyle, fontSize: '12px', marginBottom: '5px', opacity: 0.8 }}>Achievement</p>
          <p style={{ ...textStyle, fontSize: '14px', fontWeight: '600' }}>All-Academic Team</p>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.25)', padding: '12px', borderRadius: '8px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
          <p style={{ ...textStyle, fontSize: '12px', marginBottom: '5px', opacity: 0.8 }}>Leadership</p>
          <p style={{ ...textStyle, fontSize: '14px', fontWeight: '600' }}>Volleyball Captain</p>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.25)', padding: '12px', borderRadius: '8px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)', gridColumn: '1 / -1' }}>
          <p style={{ ...textStyle, fontSize: '12px', marginBottom: '5px', opacity: 0.8 }}>Experience</p>
          <p style={{ ...textStyle, fontSize: '14px', fontWeight: '600' }}>2+ Years Software Engineering</p>
        </div>
      </div>

      <div style={{ marginTop: '25px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '12px', ...headingStyle }}>
          Education
        </h2>
        <div style={{ background: 'rgba(255, 255, 255, 0.25)', padding: '12px', borderRadius: '8px', marginBottom: '12px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '5px', ...textStyle }}>Rutgers University Newark / NJIT College of Computing Sciences</h3>
          <p style={{ ...textStyle }}>Bachelor's in Computer Science</p>
          <p style={{ ...textStyle, fontSize: '14px', marginTop: '5px' }}>Minor: Data Science • May 2025</p>
          <p style={{ ...textStyle, fontSize: '14px', marginTop: '10px', fontStyle: 'italic' }}>Relevant Coursework:</p>
          <p style={{ ...textStyle, fontSize: '13px', marginTop: '5px' }}>
            Advanced Data Structures & Algorithms, Machine Learning & AI, Software Engineering, 
            Database System Design, Popular Data Science Models, Intensive Programming in Linux
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: '25px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '12px', ...headingStyle }}>
          Always Learning, Always Growing
        </h2>
        <p style={{ fontSize: '14px', lineHeight: '1.6', ...textStyle }}>
          I'm passionate about staying current with emerging technologies and continuously expanding my skill set. Whether it's exploring new AI frameworks, diving into advanced algorithms, or building innovative applications, I approach every challenge as an opportunity to learn and create something meaningful.
        </p>
      </div>
    </div>
  )
}

