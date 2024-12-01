"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-primary transition-colors ${
                  pathname === href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}