
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ParticleGlobe } from './ParticleGlobe';
import { useTheme } from '@/components/ThemeProvider';

export function GlobeContainer() {
  const { theme } = useTheme();
  
  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden aspect-square max-w-md mx-auto lg:ml-auto">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-primary/10 to-secondary/10' : 'bg-gradient-to-br from-primary/30 to-secondary/30'} opacity-50`}></div>
      <div className="relative p-2 flex items-center justify-center h-full">
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
