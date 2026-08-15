import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

// This function builds the rig out of basic shapes
function RigModel() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Main Tower (Derrick) */}
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[0.2, 4, 0.2]} />
          <meshStandardMaterial color="#eab308" roughness={0.4} metalness={0.8} />
        </mesh>
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.8]} />
          <meshStandardMaterial color="#ca8a04" roughness={0.5} metalness={0.6} />
        </mesh>

        {/* Cross Beams (Making it look like a lattice) */}
        <mesh position={[0, 2, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[2, 0.05, 0.05]} />
          <meshStandardMaterial color="#fef08a" />
        </mesh>
        <mesh position={[0, 2, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[2, 0.05, 0.05]} />
          <meshStandardMaterial color="#fef08a" />
        </mesh>

        {/* Base Platform */}
        <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
          <meshStandardMaterial color="#4b5563" roughness={0.7} metalness={0.9} />
        </mesh>

        {/* The Crane (Arm sticking out) */}
        <mesh position={[0.5, 3.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[1.5, 0.05, 0.05]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
        <mesh position={[1.5, 3, 0]}>
          <boxGeometry args={[0.05, 0.05, 0.05]} />
          <meshStandardMaterial color="#b91c1c" />
        </mesh>
      </group>
    </Float>
  );
}

// This is the exported component matching your previous setup
export default function OilRig3D({ scrollProgress = 0 }: { scrollProgress?: number }) {
  // Calculate Y position: Moves from -5 up to 0 based on scroll
  const yPosition = -5 + (scrollProgress * 5); 

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [4, 2, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        
        {/* We move the whole group up based on scroll */}
        <group position={[0, yPosition, 0]}>
          <RigModel />
        </group>
        
        <Environment preset="city" />
        <ContactShadows position={[0, -1.1, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#000000" />
        
        <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
