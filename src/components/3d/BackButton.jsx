import { useStore } from '../../store/3d/store'
import { motion } from 'framer-motion'
import { PLANETS } from '../../constants/3d/planets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function BackButton() {
  const navigate = useNavigate()
  const { currentView, setCurrentView, setCameraTarget, setSelectedPlanet } = useStore()
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const currentPlanet = PLANETS.find(p => p.id === currentView)
  const planetColor = currentPlanet?.color || '#4A90E2'

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleBack = () => {
    setCurrentView('space')
    setCameraTarget(null)
    setSelectedPlanet(null)
  }

  const handleExitToPortfolio = () => {
    navigate('/')
  }

  // Responsive button styles
  const getButtonStyle = (isSmall = false) => ({
    background: 'rgba(0, 0, 0, 0.85)',
    border: '2px solid #4A90E2',
    color: 'white',
    padding: isSmall ? '10px 16px' : '14px 28px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: isSmall ? '14px' : '16px',
    fontWeight: '600',
    transition: 'all 0.2s',
    boxShadow: '0 0 25px #4A90E260, 0 4px 15px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap',
  })

  const buttonStyle = getButtonStyle(isSmallScreen)

  return (
    <>
      {/* Back to Space button - top left, only show when viewing a planet */}
      {currentView !== 'space' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: isSmallScreen ? '10px' : '20px',
            left: isSmallScreen ? '10px' : '20px',
            pointerEvents: 'auto',
            zIndex: 1000,
            maxWidth: isSmallScreen ? 'calc(50% - 15px)' : 'none',
          }}
        >
          <button
            onClick={handleBack}
            style={{
              ...buttonStyle,
              border: `2px solid ${planetColor}`,
              boxShadow: `0 0 25px ${planetColor}60, 0 4px 15px rgba(0, 0, 0, 0.3)`,
              width: isSmallScreen ? '100%' : 'auto',
            }}
            onMouseOver={(e) => {
              e.target.style.background = planetColor
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = `0 0 35px ${planetColor}, 0 4px 20px rgba(0, 0, 0, 0.4)`
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(0, 0, 0, 0.85)'
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = `0 0 25px ${planetColor}60, 0 4px 15px rgba(0, 0, 0, 0.3)`
            }}
          >
            <span style={{ fontSize: isSmallScreen ? '16px' : '20px' }}>←</span>
            <span>{isSmallScreen ? 'Back' : 'Back to Space'}</span>
          </button>
        </motion.div>
      )}
      
      {/* Exit to Portfolio button - top right, always visible */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{
          position: 'fixed',
          top: isSmallScreen ? '10px' : '20px',
          right: isSmallScreen ? '10px' : '20px',
          pointerEvents: 'auto',
          zIndex: 1000,
          maxWidth: isSmallScreen ? 'calc(50% - 15px)' : 'none',
        }}
      >
        <button
          onClick={handleExitToPortfolio}
          style={{
            ...buttonStyle,
            width: isSmallScreen ? '100%' : 'auto',
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#4A90E2'
            e.target.style.transform = 'scale(1.05)'
            e.target.style.boxShadow = '0 0 35px #4A90E2, 0 4px 20px rgba(0, 0, 0, 0.4)'
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.85)'
            e.target.style.transform = 'scale(1)'
            e.target.style.boxShadow = '0 0 25px #4A90E260, 0 4px 15px rgba(0, 0, 0, 0.3)'
          }}
        >
          <span style={{ fontSize: isSmallScreen ? '16px' : '20px' }}>🏠</span>
          <span>{isSmallScreen ? 'Exit' : 'Exit to Portfolio'}</span>
        </button>
      </motion.div>
    </>
  )
}

