import { motion } from 'framer-motion'

export default function Tutorial({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '20px 30px',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        pointerEvents: 'auto',
        maxWidth: '500px',
        textAlign: 'center',
        zIndex: 10000,
      }}
    >
      <h2 style={{ marginBottom: '10px', fontSize: '24px' }}>Welcome to My 3D Portfolio</h2>
      <p style={{ marginBottom: '15px', opacity: 0.9 }}>
        Explore the planets to learn about me and my work
      </p>
      <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '15px' }}>
        <p>🖱️ Click planets to explore</p>
        <p>🖱️ Drag to look around</p>
      </div>
      <button
        onClick={onClose}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
        onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
        onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
      >
        Got it!
      </button>
    </motion.div>
  )
}

