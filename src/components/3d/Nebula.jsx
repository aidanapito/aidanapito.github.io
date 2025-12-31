import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const NebulaMaterial = shaderMaterial(
  {
    time: 0,
    color1: new THREE.Color('#4A148C'),
    color2: new THREE.Color('#1A237E'),
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      float noise = sin(uv.x * 10.0 + time) * sin(uv.y * 10.0 + time * 0.5) * 0.5 + 0.5;
      vec3 color = mix(color1, color2, noise);
      gl_FragColor = vec4(color, 0.3);
    }
  `
)

extend({ NebulaMaterial })

export default function Nebula() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current?.material) {
      meshRef.current.material.time = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -30]} scale={[50, 50, 1]}>
      <planeGeometry args={[1, 1]} />
      <nebulaMaterial />
    </mesh>
  )
}

