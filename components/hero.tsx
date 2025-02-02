"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { CosmicTorus } from "./shapes/cosmic-torus";
import { Starfield } from "./shapes/starfield";
import { Nebula } from "./shapes/nebula";
import Image from "next/image";
import { Sandwich } from "./shapes/sandwich";
import hussain from "@/assets/hussain.jpeg";
import { TypeWriter } from "./ui/type-writer";

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            className="relative w-64 h-64 mx-auto lg:mx-0 mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 animate-border-pulse" />
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-background to-background/90 p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={hussain}
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeWriter 
              text="Hi there! I'm Hussain."
              className="block text-2xl font-medium mb-4 text-primary justify-self-end"
              speed={70}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I'm a Full-Stack
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
             Web Dev
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              I make modern web applications with React, Next.js, and TypeScript
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="h-[400px] lg:h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 12], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
            <Starfield />
            <Sandwich />
            <CosmicTorus />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}