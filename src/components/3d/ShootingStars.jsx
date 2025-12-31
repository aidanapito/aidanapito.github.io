import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ShootingStars({ count = 5 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      // Random starting position in a large sphere around the scene
      const radius = 100
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      // Random direction (toward center-ish)
      const direction = new THREE.Vector3(
        -x + (Math.random() - 0.5) * 20,
        -y + (Math.random() - 0.5) * 20,
        -z + (Math.random() - 0.5) * 20
      ).normalize()

      // Random speed
      const speed = 0.5 + Math.random() * 0.5

      // Random delay for staggered appearance
      const delay = Math.random() * 10

      return {
        position: new THREE.Vector3(x, y, z),
        direction,
        speed,
        delay,
        length: 5 + Math.random() * 10, // Length of the trail
        active: false,
        progress: 0,
      }
    })
  }, [count])

  useFrame((state) => {
    stars.forEach((star) => {
      const time = state.clock.elapsedTime

      // Activate star after delay
      if (!star.active && time > star.delay) {
        star.active = true
        star.progress = 0
      }

      if (star.active) {
        // Update position - keep moving continuously
        star.position.add(star.direction.clone().multiplyScalar(star.speed))

        // Reset only if it's gone too far from the scene (off screen)
        // Check distance from origin - if it's beyond a large radius, reset
        if (star.position.length() > 300) {
          // Reset to new random position
          const radius = 100
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(Math.random() * 2 - 1)
          star.position.set(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi)
          )
          star.direction.set(
            -star.position.x + (Math.random() - 0.5) * 20,
            -star.position.y + (Math.random() - 0.5) * 20,
            -star.position.z + (Math.random() - 0.5) * 20
          ).normalize()
          star.progress = 0
          star.delay = time + Math.random() * 5 // Wait before next appearance
          star.active = false
        }
      }
    })
  })

  return (
    <group>
      {stars.map((star, index) => (
        <ShootingStar key={index} star={star} />
      ))}
    </group>
  )
}

// Individual shooting star component
const ShootingStar = ({ star }) => {
  const meshRef = useRef()
  const geometryRef = useRef()

  useFrame(() => {
    if (meshRef.current && star.active && geometryRef.current) {
      // Create a line from current position to previous position (trail effect)
      const trailEnd = star.position.clone().sub(
        star.direction.clone().multiplyScalar(star.length)
      )

      // Update geometry
      const points = [trailEnd, star.position]
      geometryRef.current.setFromPoints(points)

      // Keep opacity constant while active (no fade based on progress)
      if (meshRef.current.material) {
        meshRef.current.material.opacity = 1
      }
    }
  })

  if (!star.active) return null

  return (
    <line ref={meshRef}>
      <bufferGeometry ref={geometryRef} />
      <lineBasicMaterial
        color="#ffffff"
        transparent
        opacity={1}
        linewidth={2}
        blending={THREE.AdditiveBlending}
      />
    </line>
  )
}

