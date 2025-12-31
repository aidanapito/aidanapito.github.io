import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useStore } from '../../store/3d/store'
import AboutContent from './content/AboutContent'
import ExperienceContent from './content/ExperienceContent'
import ProjectsContent from './content/ProjectsContent'
import SkillsContent from './content/SkillsContent'
import LeadershipContent from './content/LeadershipContent'
import ContactContent from './content/ContactContent'

const CONTENT_MAP = {
  about: AboutContent,
  experience: ExperienceContent,
  projects: ProjectsContent,
  skills: SkillsContent,
  leadership: LeadershipContent,
  contact: ContactContent,
}

export default function PlanetView({ planetId }) {
  const { setCurrentView, setCameraTarget, setSelectedPlanet } = useStore()
  const ContentComponent = CONTENT_MAP[planetId]
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleBack = () => {
    setCurrentView('space')
    setCameraTarget(null)
    setSelectedPlanet(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
        background: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        style={{
          background: 'rgba(10, 10, 20, 0.95)',
          borderRadius: '20px',
          padding: isMobile ? '20px' : '40px',
          maxWidth: isMobile ? '95%' : '800px',
          maxHeight: isMobile ? '90vh' : '80vh',
          overflow: 'auto',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          margin: isMobile ? '10px' : '0',
        }}
      >
        <button
          onClick={handleBack}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
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
          ← Back to Space
        </button>
        
        {ContentComponent && <ContentComponent />}
      </motion.div>
    </motion.div>
  )
}

