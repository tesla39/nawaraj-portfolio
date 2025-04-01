
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/components/ThemeProvider';

// Create particles in a sphere shape
const generateParticles = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    // Use spherical coordinates for even distribution
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  
  return positions;
};

export function ParticleGlobe() {
  const { theme } = useTheme();
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2500; // Increased particle count
  const radius = 1.8; // Slightly larger radius
  
  // Generate sphere points
  const positions = generateParticles(particleCount, radius);
  
  // Animation
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color={theme === 'dark' ? '#4FC3F7' : '#2979FF'}
        size={0.045} // Slightly smaller particles
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8} // Reduced opacity to blend better
      />
    </Points>
  );
}
