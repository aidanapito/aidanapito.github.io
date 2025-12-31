// Planets configuration - shared across components
// All planets positioned to fit within viewport
export const PLANETS = [
  // Central hub - largest, at origin
  { id: 'about', name: 'About', position: [-1, -1, -8], color: '#4A90E2', size: 1.5, texturePath: '/bluePlanet2to1.png' },
  
  // Foreground planets (closer to camera, smaller)
  { id: 'experience', name: 'Experience', position: [-9, 3, -3], color: '#FF6B35', size: 1.2, texturePath: '/orangePlanet2to1.png' },
  { id: 'contact', name: 'Contact', position: [6, -6, -4], color: '#1ABC9C', size: 1.0, texturePath: '/greenPlanet2to1.png' },
  
  // Mid-ground planets (medium distance)
  { id: 'projects', name: 'Projects', position: [11, 1, 2], color: '#9B59B6', size: 1.4, texturePath: '/purplePlanet2to1.png' },
  { id: 'leadership', name: 'Leadership', position: [-12, -6, 2], color: '#F39C12', size: 1.1, texturePath: '/yellowPlanet2to1.png'},
  
  // Background planets (farther away, larger to maintain visibility)
  { id: 'skills', name: 'Skills', position: [3, 4, 5], color: '#E74C3C', size: 1.2, texturePath: '/redPlanet2to1.png'},
]

