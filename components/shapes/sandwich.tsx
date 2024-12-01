"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { useTheme } from "next-themes";

export function Sandwich() {
  const groupRef = useRef<Group>(null);
  const { theme } = useTheme();
  
  // Brighter colors
  const breadColor = theme === 'dark' ? '#FFA54F' : '#FFD700';
  const lettuceColor = '#7FFF00';
  const tomatoColor = '#FF4500';
  const cheeseColor = '#FFD700';
  const meatColor = '#CD853F';

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.5}>
      {/* Bottom bread */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 0.4, 4]} />
        <meshStandardMaterial color={breadColor} />
      </mesh>

      {/* Lettuce */}
      <mesh position={[0, -0.25, 0]}>
        <boxGeometry args={[3.8, 0.1, 3.8]} />
        <meshStandardMaterial color={lettuceColor} roughness={0.8} />
      </mesh>

      {/* Meat */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.5, 0.3, 3.5]} />
        <meshStandardMaterial color={meatColor} roughness={0.6} />
      </mesh>

      {/* Cheese */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[3.7, 0.1, 3.7]} />
        <meshStandardMaterial color={cheeseColor} roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Tomato slices */}
      <mesh position={[0.8, 0.4, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
        <meshStandardMaterial color={tomatoColor} roughness={0.4} />
      </mesh>
      <mesh position={[-0.8, 0.4, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
        <meshStandardMaterial color={tomatoColor} roughness={0.4} />
      </mesh>

      {/* Top bread */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[4, 0.4, 4]} />
        <meshStandardMaterial color={breadColor} />
      </mesh>
    </group>
  );
} 