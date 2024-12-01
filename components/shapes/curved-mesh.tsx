"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { MeshDistortMaterial } from "@react-three/drei";

export function CurvedMesh() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <MeshDistortMaterial
        color="hsl(var(--primary))"
        roughness={0.5}
        metalness={0.8}
        distort={0.4}
        speed={2}
      />
    </mesh>
  );
}