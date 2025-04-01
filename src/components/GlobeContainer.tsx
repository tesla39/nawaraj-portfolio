
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ParticleGlobe } from './ParticleGlobe';

export function GlobeContainer() {
  return (
    <div className="relative h-full w-full aspect-square max-w-md mx-auto lg:ml-auto">
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
