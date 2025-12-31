import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function PlanetParticles({ planetPosition, color, count = 50, radius = 2 }) {
  const particlesRef = useRef()
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorObj = new THREE.Color(color)
    
    for (let i = 0; i < count; i++) {
      // Random position around planet
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = radius + (Math.random() - 0.5) * 0.5
      
      positions[i * 3] = Math.sin(phi) * Math.cos(theta) * r
      positions[i * 3 + 1] = Math.cos(phi) * r
      positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r
      
      // Vary color slightly
      const colorVariation = 0.7 + Math.random() * 0.3
      colors[i * 3] = colorObj.r * colorVariation
      colors[i * 3 + 1] = colorObj.g * colorVariation
      colors[i * 3 + 2] = colorObj.b * colorVariation
    }
    
    return { positions, colors }
  }, [count, radius, color])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={particlesRef} position={planetPosition}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

