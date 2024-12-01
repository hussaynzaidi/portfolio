"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Mesh, Color } from "three";
import { useTheme } from "next-themes";
import * as THREE from 'three';

export function CosmicTorus() {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();
  const colorA = new Color(theme === 'dark' ? '#ff3366' : '#6366f1');
  const colorB = new Color(theme === 'dark' ? '#33ff99' : '#14b8a6');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y += 0.005;
      const mixFactor = (Math.sin(state.clock.elapsedTime * 0.5) + 1) / 2;
      const currentColor = colorA.clone().lerp(colorB, mixFactor);
      (meshRef.current.material as THREE.MeshStandardMaterial).color = currentColor;
      (meshRef.current.material as THREE.MeshStandardMaterial).emissive = currentColor;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <torusGeometry args={[2, 0.5, 32, 100]} />
      <meshStandardMaterial
        metalness={0.8}
        roughness={0.2}
        wireframe
        envMapIntensity={1}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}