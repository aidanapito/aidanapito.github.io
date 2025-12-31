import { useRef } from 'react'
import { useFrame, extend, useThree } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const PlanetShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(1, 1, 1),
    emissiveColor: new THREE.Color(1, 1, 1),
    emissiveIntensity: 0.2,
    noiseScale: 5.0,
    noiseStrength: 0.3,
    speed: 1.0,
    cameraPosition: new THREE.Vector3(0, 0, 0),
  },
  // Vertex shader
  `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec3 color;
    uniform vec3 emissiveColor;
    uniform float emissiveIntensity;
    uniform float noiseScale;
    uniform float noiseStrength;
    uniform float speed;
    uniform vec3 cameraPosition;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    
    // Noise function
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec2 uv = vUv;
      
      // Multi-octave noise for complex surface detail
      float n1 = fbm(uv * noiseScale + time * speed * 0.05);
      float n2 = fbm(uv * noiseScale * 2.5 + time * speed * 0.08);
      float n3 = fbm(uv * noiseScale * 8.0 + time * speed * 0.12);
      
      // Create craters and terrain variation
      float craters = smoothstep(0.7, 1.0, n1);
      float terrain = mix(n2, n3, 0.6);
      
      // Combine for rich surface detail
      float surface = mix(terrain, 1.0 - craters * 0.3, 0.7);
      surface = surface * noiseStrength + (1.0 - noiseStrength);
      
      // Use colors more directly - like the moons
      vec3 darkColor = color * 0.9;
      vec3 brightColor = color * 1.3;
      vec3 finalColor = mix(darkColor, brightColor, surface);
      
      // Moderate color saturation boost
      float luminance = dot(finalColor, vec3(0.299, 0.587, 0.114));
      finalColor = mix(vec3(luminance), finalColor, 1.4);
      
      // Subtle color variation
      vec3 colorShift = vec3(
        sin(uv.x * 3.14159) * 0.1,
        cos(uv.y * 3.14159) * 0.1,
        0.0
      );
      finalColor += colorShift * 0.2;
      
      // Ensure minimum brightness - keep it close to original color
      finalColor = max(finalColor, color * 0.8);
      
      // Moderate emissive glow - don't overpower the base color
      vec3 emissive = emissiveColor * emissiveIntensity * 0.8;
      emissive *= (0.95 + surface * 0.3); // Variation on elevated areas
      
      // Fresnel effect for atmospheric glow
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.0);
      emissive += emissiveColor * fresnel * emissiveIntensity * 0.3;
      
      // Specular highlights for depth and shine
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
      float specular = pow(max(dot(reflect(-lightDir, vNormal), viewDir), 0.0), 32.0);
      finalColor += emissiveColor * specular * 0.3;
      
      // Rim lighting for more pop
      float rim = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
      finalColor += emissiveColor * rim * 0.2;
      
      // Ensure fully opaque - no transparency, keep colors true
      vec3 finalOutput = finalColor + emissive;
      // Slight brightness boost to match moons
      finalOutput *= 1.1;
      // Ensure it's never too dark but keep colors accurate
      finalOutput = max(finalOutput, color * 0.9);
      gl_FragColor = vec4(finalOutput, 1.0);
    }
  `
)

extend({ PlanetShaderMaterial })

export default function PlanetMaterial({ color, emissiveColor, emissiveIntensity, noiseScale, noiseStrength, speed }) {
  const materialRef = useRef()
  const { camera } = useThree()
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime
      materialRef.current.cameraPosition = camera.position
    }
  })

  return (
    <planetShaderMaterial
      ref={materialRef}
      color={color}
      emissiveColor={emissiveColor}
      emissiveIntensity={emissiveIntensity}
      noiseScale={noiseScale}
      noiseStrength={noiseStrength}
      speed={speed}
      transparent={false}
      opacity={1.0}
    />
  )
}

