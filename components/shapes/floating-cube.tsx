"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Mesh } from "three";

export function FloatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial
        color="#6366f1"
        roughness={0.2}
        metalness={0.8}
        distort={0.3}
        speed={1.5}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}