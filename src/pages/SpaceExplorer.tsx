import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import SpaceScene from '../components/3d/SpaceScene';
import UI from '../components/3d/UI';
import '../components/3d/space3d.css';

const SpaceExplorer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent body scroll when in 3D mode
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="w-full h-screen fixed inset-0 bg-black">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SpaceScene />
        </Suspense>
      </Canvas>
      <UI navigate={navigate} />
    </div>
  );
};

export default SpaceExplorer;
