import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Ring } from '@react-three/drei'
import * as THREE from 'three'

export default function PlanetRings({ size, color, count = 3, rotationSpeed = 0.2 }) {
  const ringsRef = useRef()
  
  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed
    }
  })

  return (
    <group ref={ringsRef}>
      {Array.from({ length: count }).map((_, i) => {
        const innerRadius = size * (1.4 + i * 0.2)
        const outerRadius = size * (1.5 + i * 0.2)
        const opacity = 0.4 - i * 0.1
        const tilt = (i % 2 === 0 ? 1 : -1) * (Math.PI / 6) * (i + 1) * 0.3
        
        return (
          <Ring
            key={i}
            args={[innerRadius, outerRadius, 64]}
            rotation={[Math.PI / 2 + tilt, 0, 0]}
          >
            <meshBasicMaterial
              color={color}
              transparent
              opacity={opacity}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
            />
          </Ring>
        )
      })}
    </group>
  )
}

