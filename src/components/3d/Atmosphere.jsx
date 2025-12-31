import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

export default function Atmosphere({ size, color, intensity = 0.3, speed = 0.5 }) {
  const atmosphereRef = useRef()
  
  useFrame((state) => {
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = state.clock.elapsedTime * speed * 0.1
    }
  })

  return (
    <Sphere ref={atmosphereRef} args={[size * 1.08, 32, 32]}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={intensity}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
      />
    </Sphere>
  )
}

