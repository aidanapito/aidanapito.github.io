import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Text } from '@react-three/drei'
import * as THREE from 'three'
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

export default function PlanetContent3D({ planetId, planetPosition, planetSize, planetColor }) {
  const { setCurrentView, setCameraTarget, setSelectedPlanet } = useStore()
  const groupRef = useRef()
  const ContentComponent = CONTENT_MAP[planetId]

  // Debug logging
  console.log('PlanetContent3D rendering:', { planetId, planetPosition, planetSize, hasContent: !!ContentComponent })

  useFrame((state) => {
    if (groupRef.current) {
      // Position content on the planet surface, not above it
      // Place it at the planet's surface level
      groupRef.current.position.x = planetPosition[0]
      groupRef.current.position.y = planetPosition[1]
      groupRef.current.position.z = planetPosition[2]
    }
  })

  const handleBack = () => {
    setCurrentView('space')
    setCameraTarget(null)
    setSelectedPlanet(null)
  }

  if (!ContentComponent) {
    console.warn(`No content component found for planet: ${planetId}`)
    return null
  }

  return (
    <group ref={groupRef} position={planetPosition}>
      {/* Main content panel - positioned directly on planet surface, no container */}
      <Html
        position={[0, planetSize * 0.0, planetSize + 0.1]}
        center
        transform
        occlude={false}
        distanceFactor={planetSize * 0.7}
        style={{
          pointerEvents: 'auto',
        }}
      >
        <div
          style={{
            background: 'transparent',
            padding: `${Math.max(15, planetSize * 15)}px`,
            maxHeight: `${Math.max(700, planetSize * 700)}px`,
            overflow: 'visible',
            transform: 'none',
            width: `${Math.max(500, planetSize * 500)}px`,
            minWidth: '500px',
            maxWidth: '750px',
            zIndex: 1000,
            position: 'relative',
          }}
        >
          <ContentComponent planetColor={planetColor} />
        </div>
      </Html>

    </group>
  )
}

