import { useStore } from '../../store/3d/store'
import { motion } from 'framer-motion'

export default function Controls() {
  const { freeFlyMode, setFreeFlyMode, currentView } = useStore()

  // Show controls in space view, or allow toggling when viewing a planet
  if (currentView !== 'space' && !freeFlyMode) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'auto',
      }}
    >
      <button
        onClick={() => setFreeFlyMode(!freeFlyMode)}
        style={{
          background: freeFlyMode ? 'rgba(74, 144, 226, 0.3)' : 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
        }}
        onMouseOver={(e) => e.target.style.background = freeFlyMode ? 'rgba(74, 144, 226, 0.4)' : 'rgba(255, 255, 255, 0.2)'}
        onMouseOut={(e) => e.target.style.background = freeFlyMode ? 'rgba(74, 144, 226, 0.3)' : 'rgba(255, 255, 255, 0.1)'}
      >
        {freeFlyMode ? '🎮 Free-Fly Mode: ON' : '🖱️ Click-to-Fly Mode'}
      </button>
    </motion.div>
  )
}

