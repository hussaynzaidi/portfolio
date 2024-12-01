"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useTheme } from "next-themes";
import * as THREE from 'three';

export function DoubleHelix() {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const particlesCount = 80; // Increased particle count
  const radius = 2.5; // Increased radius
  const height = 6; // Increased height

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const createHelix = (offset: number) => {
    return Array.from({ length: particlesCount }, (_, i) => {
      const t = (i / particlesCount) * Math.PI * 4;
      const x = Math.cos(t + offset) * radius;
      const y = (i / particlesCount) * height - height / 2;
      const z = Math.sin(t + offset) * radius;
      return new Vector3(x, y, z);
    });
  };

  const helix1 = createHelix(0);
  const helix2 = createHelix(Math.PI);

  return (
    <group ref={groupRef}>
      {[...helix1, ...helix2].map((position, i) => (
        <mesh key={i} position={position} scale={0.15}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={theme === 'dark' ? '#ffffff' : '#000000'}
            emissive={theme === 'dark' ? '#ffffff' : '#000000'}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}