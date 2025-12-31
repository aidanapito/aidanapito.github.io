export default function ContactContent({ planetColor = '#1ABC9C' }) {
  const socialLinks = [
    { name: 'Email', url: 'mailto:aidan2apito@gmail.com', icon: '📧' },
    { name: 'Phone', url: 'tel:973-907-3265', icon: '📱' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aidanapito/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/aidanapito', icon: '💻' },
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
        Get In Touch
      </h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', ...textStyle }}>
        I'm always open to discussing new opportunities, collaborations, or just having
        a chat about technology and innovation.
      </p>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px', ...headingStyle }}>
          Connect With Me
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '10px',
                textDecoration: 'none',
                ...textStyle,
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                transition: 'transform 0.2s',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)'
              }}
            >
              <span style={{ fontSize: '32px' }}>{link.icon}</span>
              <span style={{ fontSize: '18px', fontWeight: '500' }}>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div style={{
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '20px',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '10px', ...headingStyle }}>
          Let's Build Something Amazing Together
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', ...textStyle }}>
          Whether you have a project in mind, want to collaborate, or just want to say hello,
          I'd love to hear from you!
        </p>
      </div>
    </div>
  )
}

