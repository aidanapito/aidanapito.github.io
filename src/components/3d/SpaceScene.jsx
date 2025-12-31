import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Stars, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '../../store/3d/store'
import Planet from './Planet'
import ParticleField from './ParticleField'
import PlanetContent3D from './PlanetContent3D'
import ShootingStars from './ShootingStars'

import { PLANETS } from '../../constants/3d/planets'

export default function SpaceScene() {
  const cameraRef = useRef()
  const { camera } = useThree()
  const { currentView, cameraTarget } = useStore()
  
  // Get current planet info for content display
  // Use currentView as primary, fallback to cameraTarget
  const currentPlanet = PLANETS.find(p => p.id === currentView || p.id === cameraTarget)

  const controlsRef = useRef()
  const previousView = useRef(currentView)
  const shouldAnimateBack = useRef(false)

  // Reset OrbitControls target when returning to space from a planet
  useEffect(() => {
    // If we just transitioned from a planet view to space view
    if (currentView === 'space' && previousView.current !== 'space' && !cameraTarget) {
      // Reset OrbitControls target and flag that we should animate back
      if (controlsRef.current) {
        controlsRef.current.target.set(0, 0, -2)
        controlsRef.current.update()
      }
      shouldAnimateBack.current = true
    }
    previousView.current = currentView
  }, [currentView, cameraTarget])

  // Camera animation - zoom in close to planet when selected
  useFrame(() => {
    if (cameraTarget) {
      const target = PLANETS.find(p => p.id === cameraTarget)
      if (target) {
        // Disable controls when zooming to planet
        if (controlsRef.current) {
          controlsRef.current.enabled = false
        }
        
        const [x, y, z] = target.position
        // Zoom in extremely close - planet should fill the viewport
        // Calculate distance so planet fills most of the screen
        // Using FOV and planet size to calculate optimal distance
        const fov = camera.fov * (Math.PI / 180) // Convert to radians
        const planetRadius = target.size
        // Distance = radius / tan(fov/2) to fill viewport
        // Add small offset to be just outside the planet surface
        const zoomDistance = (planetRadius / Math.tan(fov / 2)) * 1.1 + 0.5
        
        // Position camera directly in front of planet, centered
        const direction = new THREE.Vector3(0, 0, 1).normalize()
        const targetPos = new THREE.Vector3(x, y, z).add(direction.multiplyScalar(zoomDistance))
        
        // Smoother, more direct zoom in - faster lerp
        camera.position.lerp(targetPos, 0.12)
        // Look at planet center
        camera.lookAt(x, y, z)
      }
    } else if (currentView === 'space') {
      // Re-enable controls when in space view
      if (controlsRef.current) {
        controlsRef.current.enabled = true
      }
      
      // Only animate back to default if we just returned from a planet
      if (shouldAnimateBack.current) {
        const defaultPos = new THREE.Vector3(0, 0, 22)
        const defaultLookAt = new THREE.Vector3(0, 0, -2)
        
        // Faster, more direct zoom out
        camera.position.lerp(defaultPos, 0.12)
        
        // Smoothly look at default target
        const currentLookAt = new THREE.Vector3()
        camera.getWorldDirection(currentLookAt)
        currentLookAt.multiplyScalar(100).add(camera.position)
        
        const targetLookAt = defaultLookAt.clone()
        currentLookAt.lerp(targetLookAt, 0.12)
        camera.lookAt(currentLookAt)
        
        // Stop animating once we're close enough to default position
        const distanceToDefault = camera.position.distanceTo(defaultPos)
        if (distanceToDefault < 0.5) {
          shouldAnimateBack.current = false
        }
      }
    }
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 22]} />
      <ambientLight intensity={1.0} />
      <pointLight position={[10, 10, 10]} intensity={2.5} />
      <pointLight position={[-10, -10, -10]} intensity={1.5} />
      <directionalLight position={[0, 10, 5]} intensity={2.0} />
      
      <Stars radius={500} depth={100} count={45000} factor={4} fade speed={1} />
      <ParticleField />
      <ShootingStars count={3} />
      
      {PLANETS.map((planet) => (
        <Planet key={planet.id} {...planet} texturePath={planet.texturePath} />
      ))}
      
      {/* Display 3D content when planet is selected */}
      {currentPlanet && currentView !== 'space' && (
        <PlanetContent3D
          planetId={currentPlanet.id}
          planetPosition={currentPlanet.position}
          planetSize={currentPlanet.size}
          planetColor={currentPlanet.color}
        />
      )}
      
      {/* Drag controls - only active when in space view */}
      {currentView === 'space' && (
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={15}
          maxDistance={50}
          target={[0, 0, -2]}
          dampingFactor={0.05}
          enableDamping={true}
          onStart={() => {
            // Stop animation when user starts dragging
            shouldAnimateBack.current = false
          }}
        />
      )}
      
    </>
  )
}

