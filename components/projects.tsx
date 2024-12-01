"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, TypeScript, and tRPC",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Chat App",
      description: "Modern chat application using Next.js, Socket.io, and Prisma",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack applications built with React, Next.js, and modern backend technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm hover:text-primary"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}