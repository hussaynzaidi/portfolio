"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "I'm apt with React, Next.js, and modern frontend architecture",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "This is my favourite part. Building robust APIs with Node.js and TypeScript",
    },
    {
      icon: Layers,
      title: "Full-Stack Integration",
      description: "Seamlessly connecting frontend and backend systems with databases and third party integrations",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a full-stack developer passionate about building end-to-end solutions
            with React, Next.js, and modern backend technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-background rounded-lg shadow-lg"
            >
              <skill.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}