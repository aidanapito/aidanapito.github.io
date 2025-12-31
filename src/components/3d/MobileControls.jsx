import { useState, useEffect } from 'react'
import { useStore } from '../../store/3d/store'
import { motion } from 'framer-motion'

export default function MobileControls() {
  const [isMobile, setIsMobile] = useState(false)
  const { currentView, setCurrentView, setCameraTarget, setSelectedPlanet } = useStore()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile || currentView !== 'space') return null

  const PLANETS = [
    { id: 'about', name: 'About', color: '#4A90E2' },
    { id: 'experience', name: 'Experience', color: '#FF6B35' },
    { id: 'projects', name: 'Projects', color: '#9B59B6' },
    { id: 'skills', name: 'Skills', color: '#E74C3C' },
    { id: 'leadership', name: 'Leadership', color: '#F39C12' },
    { id: 'contact', name: 'Contact', color: '#1ABC9C' },
  ]

  const handlePlanetClick = (planetId) => {
    setCameraTarget(planetId)
    setCurrentView(planetId)
    setSelectedPlanet(planetId)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '90%',
        pointerEvents: 'auto',
        padding: '15px',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      {PLANETS.map((planet) => (
        <button
          key={planet.id}
          onClick={() => handlePlanetClick(planet.id)}
          style={{
            background: `rgba(${parseInt(planet.color.slice(1, 3), 16)}, ${parseInt(planet.color.slice(3, 5), 16)}, ${parseInt(planet.color.slice(5, 7), 16)}, 0.2)`,
            border: `1px solid ${planet.color}`,
            color: 'white',
            padding: '12px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '500',
            minWidth: '80px',
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)'
            e.currentTarget.style.opacity = '0.8'
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.opacity = '1'
          }}
        >
          {planet.name}
        </button>
      ))}
    </motion.div>
  )
}

