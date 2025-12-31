import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../../store/3d/store'

export default function KeyboardControls() {
  const { camera } = useThree()
  const { freeFlyMode } = useStore()
  const keysRef = useRef({ w: false, a: false, s: false, d: false, ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false })

  useEffect(() => {
    if (!freeFlyMode) return

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase()
      if (keysRef.current.hasOwnProperty(key) || keysRef.current.hasOwnProperty(e.key)) {
        keysRef.current[key] = true
        keysRef.current[e.key] = true
        e.preventDefault()
      }
    }

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase()
      if (keysRef.current.hasOwnProperty(key) || keysRef.current.hasOwnProperty(e.key)) {
        keysRef.current[key] = false
        keysRef.current[e.key] = false
        e.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [freeFlyMode])

  useFrame(() => {
    if (!freeFlyMode) return

    const keys = keysRef.current
    const speed = 0.3
    const direction = new THREE.Vector3()
    const right = new THREE.Vector3()
    
    camera.getWorldDirection(direction)
    right.crossVectors(camera.up, direction).normalize()

    if (keys.w || keys.arrowup) {
      camera.position.addScaledVector(direction, speed)
    }
    if (keys.s || keys.arrowdown) {
      camera.position.addScaledVector(direction, -speed)
    }
    if (keys.a || keys.arrowleft) {
      camera.position.addScaledVector(right, speed)
    }
    if (keys.d || keys.arrowright) {
      camera.position.addScaledVector(right, -speed)
    }
  })

  return null
}

