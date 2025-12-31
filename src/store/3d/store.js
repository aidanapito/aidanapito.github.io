import { create } from 'zustand'

export const useStore = create((set) => ({
  currentView: 'space', // 'space' or planet name
  selectedPlanet: null,
  cameraTarget: null,
  isTransitioning: false,
  showTutorial: true,
  
  setCurrentView: (view) => set({ currentView: view }),
  setSelectedPlanet: (planet) => set({ selectedPlanet: planet }),
  setCameraTarget: (target) => set({ cameraTarget: target }),
  setIsTransitioning: (transitioning) => set({ isTransitioning: transitioning }),
  setShowTutorial: (show) => set({ showTutorial: show }),
}))

