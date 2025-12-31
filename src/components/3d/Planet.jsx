import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Sphere, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '../../store/3d/store'
import PlanetMaterial from './PlanetMaterial'
import Atmosphere from './Atmosphere'
import PlanetRings from './PlanetRings'

// Planet-specific configurations - adjusted for varied sizes and more visual interest
const PLANET_CONFIGS = {
  about: {
    noiseScale: 4.0,
    noiseStrength: 0.5, // Increased for more surface detail
    ringCount: 0, // No rings
    hasParticles: true,
    particleCount: 80, // More particles for larger planet
  },
  experience: {
    noiseScale: 6.0,
    noiseStrength: 0.6, // Increased for more surface detail
    ringCount: 0, // No rings
    hasParticles: false,
    particleCount: 0,
  },
  projects: {
    noiseScale: 5.0,
    noiseStrength: 0.55, // Increased for more surface detail
    ringCount: 0, // No rings for textured planet
    hasParticles: true,
    particleCount: 100, // More particles for larger planet
  },
  skills: {
    noiseScale: 7.0,
    noiseStrength: 0.5, // Increased for more surface detail
    ringCount: 2, // Keep rings for skills
    hasParticles: true,
    particleCount: 90, // More particles for background planet
  },
  leadership: {
    noiseScale: 4.5,
    noiseStrength: 0.45, // Increased for more surface detail
    ringCount: 0, // No rings
    hasParticles: false,
    particleCount: 0,
  },
  contact: {
    noiseScale: 5.5,
    noiseStrength: 0.5, // Increased for more surface detail
    ringCount: 0, // No rings
    hasParticles: true,
    particleCount: 60,
  },
}

export default function Planet({ id, name, position, color, size, texturePath }) {
  const meshRef = useRef()
  const glowRef = useRef()
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)
  const { setCurrentView, setCameraTarget, currentView, selectedPlanet } = useStore()
  const { camera } = useThree()
  
  const config = PLANET_CONFIGS[id] || PLANET_CONFIGS.about
  // Use colors directly like the moons do - don't over-multiply
  const colorObj = new THREE.Color(color) // Use original color
  const emissiveColor = new THREE.Color(color).multiplyScalar(1.2) // Slight emissive boost
  
  // Load texture if texturePath is provided
  const [texture, setTexture] = useState(null)
  useEffect(() => {
    if (texturePath) {
      const loader = new THREE.TextureLoader()
      // In Vite, public folder files are served from root in dev, or base URL in production
      const baseUrl = import.meta.env.BASE_URL
      const cleanPath = texturePath.startsWith('/') ? texturePath.slice(1) : texturePath
      const fullPath = baseUrl === '/' ? `/${cleanPath}` : `${baseUrl}${cleanPath}`
      
      console.log('Loading texture:', { texturePath, baseUrl, fullPath, planetId: id })
      
      loader.load(
        fullPath,
        (loadedTexture) => {
          // Configure texture settings for sphere mapping
          // For equirectangular (2:1) images, use ClampToEdgeWrapping
          // For square images, RepeatWrapping works but may cause pole stretching
          loadedTexture.wrapS = THREE.ClampToEdgeWrapping
          loadedTexture.wrapT = THREE.ClampToEdgeWrapping
          loadedTexture.flipY = false // Important for sphere mapping
          console.log('✓ Texture loaded successfully for planet:', id)
          setTexture(loadedTexture)
        },
        undefined,
        (error) => {
          console.error('✗ Failed to load texture:', { fullPath, error, planetId: id })
        }
      )
    }
    return () => {
      if (texture) {
        texture.dispose()
      }
    }
  }, [texturePath, id])
  
  // Set initial rotation for textured planets
  useEffect(() => {
    if (meshRef.current && texturePath) {
      // Rotate 50% more (1.5 radians ≈ 86 degrees) for better viewpoint
      meshRef.current.rotation.y = -2.5
    }
  }, [texturePath, texture])
  
  // Rotation animation - skip for planets with textures
  useFrame((state) => {
    if (meshRef.current && !texturePath) {
      meshRef.current.rotation.y += 0.003
    }
  })

  // Hover scale and glow animation - disable scale when selected
  useFrame(() => {
    if (meshRef.current) {
      // Only scale on hover if planet is not currently selected/viewed
      const targetScale = (hovered && !isSelected) ? size * 1.15 : size
      meshRef.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale },
        0.1
      )
    }
    if (glowRef.current) {
      const targetOpacity = hovered || isSelected ? 0.4 : 0.15
      glowRef.current.material.opacity = THREE.MathUtils.lerp(
        glowRef.current.material.opacity,
        targetOpacity,
        0.1
      )
    }
    // Make text always face the camera
    if (textRef.current) {
      textRef.current.lookAt(camera.position)
    }
  })

  const handleClick = () => {
    // Allow clicking any planet in any mode
    setCameraTarget(id)
    setCurrentView(id)
    setSelectedPlanet(id)
    // When clicking a planet, temporarily exit free-fly for smooth zoom
    // User can re-enable free-fly after viewing content
  }

  const isSelected = currentView === id || selectedPlanet === id
  const emissiveIntensity = hovered || isSelected ? 0.6 : 0.4

  return (
    <group position={position}>
      {/* Atmospheric glow - subtle but visible */}
      <Atmosphere
        size={size}
        color={color}
        intensity={hovered || isSelected ? 0.2 : 0.12}
        speed={0.3}
      />

      {/* Outer glow halo - very subtle and thinner */}
      <Sphere ref={glowRef} args={[size * 1.2, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Main Planet with custom shader or texture - higher detail */}
      <Sphere
        ref={meshRef}
        args={[size, 128, 128]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        cursor="pointer"
      >
        {texturePath && texture ? (
          <meshBasicMaterial
            map={texture}
          />
        ) : (
          <PlanetMaterial
            color={colorObj}
            emissiveColor={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            noiseScale={config.noiseScale}
            noiseStrength={config.noiseStrength}
            speed={0.5}
          />
        )}
      </Sphere>

      {/* Enhanced rings */}
      <PlanetRings
        size={size}
        color={color}
        count={config.ringCount}
        rotationSpeed={0.15}
      />

      {/* Orbiting moons/satellites - enhanced, scaled by planet size */}
      {id === 'projects' && (
        <OrbitingMoon
          radius={size * 2.5}
          speed={0.1}
          color={color}
          size={0.2 + size * 0.1}
        />
      )}

      {/* Skills planet - orbiting skill badges */}
      {id === 'skills' && (
        <OrbitingMoon
          radius={size * 2.2}
          speed={0.08}
          color={color}
          size={0.15 + size * 0.08}
        />
      )}

      {/* Experience planet - timeline markers */}
      {id === 'experience' && (
        <OrbitingMoon
          radius={size * 2.0}
          speed={0.06}
          color={color}
          size={0.12 + size * 0.05}
        />
      )}

      {/* About planet - central hub with more elements */}
      {id === 'about' && (
        <OrbitingMoon
          radius={size * 2.8}
          speed={0.05}
          color={color}
          size={0.18 + size * 0.1}
        />
      )}


      {/* Enhanced label with better typography - always faces camera */}
      <Text
        ref={textRef}
        position={[0, size + 1.8, 0]}
        fontSize={texturePath ? 0.5 : 0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={texturePath ? 0.05 : 0.02}
        outlineColor="#000000"
        renderOrder={1000}
        strokeWidth={texturePath ? 0.01 : 0}
        strokeColor="#000000"
      >
        {name}
      </Text>
    </group>
  )
}

// Enhanced orbiting moon component
function OrbitingMoon({ radius, speed, color, size = 0.3 }) {
  const moonRef = useRef()
  const trailRef = useRef()
  
  useFrame((state) => {
    if (moonRef.current) {
      const time = state.clock.elapsedTime * speed
      const x = Math.cos(time) * radius
      const z = Math.sin(time) * radius
      const y = Math.sin(time * 0.7) * 0.8
      
      moonRef.current.position.set(x, y, z)
      
      // Add slight rotation
      moonRef.current.rotation.y += 0.02
    }
  })

  return (
    <group ref={moonRef}>
      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Glow around moon */}
      <mesh>
        <sphereGeometry args={[size * 1.3, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}
