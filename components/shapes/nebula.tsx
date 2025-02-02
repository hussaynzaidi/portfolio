"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Color } from "three";
import { useTheme } from "next-themes";
import * as THREE from 'three';

export function Nebula() {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.001;
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]} scale={20}>
      <planeGeometry />
      <meshBasicMaterial
        color={theme === 'dark' ? '#ff33cc' : '#6366f1'}
        transparent
        opacity={0.2}
        blending={2}
        depthWrite={false}
      />
    </mesh>
  );
}