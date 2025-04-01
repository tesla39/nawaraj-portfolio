
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ParticleGlobe } from './ParticleGlobe';
import { useTheme } from '@/components/ThemeProvider';

export function GlobeContainer() {
  const { theme } = useTheme();
  
  return (
    <div className="relative h-full w-full aspect-square max-w-md mx-auto lg:ml-auto">
      <div className="absolute inset-0 z-0">
        {/* Removed the background container entirely */}
      </div>
      <div className="relative h-full w-full">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ParticleGlobe />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.5}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
