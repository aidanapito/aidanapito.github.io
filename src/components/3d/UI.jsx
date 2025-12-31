import { useStore } from '../../store/3d/store'
import { motion, AnimatePresence } from 'framer-motion'
import Tutorial from './Tutorial'
import PlanetView from './PlanetView'
import MobileControls from './MobileControls'
import BackButton from './BackButton'

export default function UI({ navigate }) {
  const { currentView, showTutorial, setShowTutorial } = useStore()

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}>
      <AnimatePresence>
        {showTutorial && currentView === 'space' && (
          <Tutorial onClose={() => setShowTutorial(false)} />
        )}
      </AnimatePresence>

      {/* Content now displays in 3D space, not as overlay */}
      {/* <AnimatePresence>
        {currentView !== 'space' && (
          <PlanetView planetId={currentView} />
        )}
      </AnimatePresence> */}

      <BackButton />
      <MobileControls />
    </div>
  )
}

