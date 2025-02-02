"use client";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Script
        src="https://unpkg.com/react@17/umd/react.production.min.js"
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />
      <Script
        src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* Accessibility Widget - Loaded Last */}
      <Script
        src="https://ihtisham-123.github.io/accessibility-widget/accessibility-widget.js"
        strategy="lazyOnload"
        data-accessibility-widget
        data-auto-init="true"
        data-theme="light"
      />
    </main>
  );
}