"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-primary-foreground">
              🦉
            </span>
          </div>
          <span className="text-xl font-bold text-foreground">Owl Finance</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#stats"
            className="text-foreground/70 hover:text-foreground transition"
          >
            About
          </a>
          <a
            href="#features"
            className="text-foreground/70 hover:text-foreground transition"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-foreground/70 hover:text-foreground transition"
          >
            How It Works
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://owlfi.vercel.app" target="_blank">
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium cursor-pointer">
              Launch App
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-foreground/70 hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-foreground/70 hover:text-foreground"
            >
              How It Works
            </a>
            <a
              href="#stats"
              className="block text-foreground/70 hover:text-foreground"
            >
              About
            </a>
            <div className="flex gap-2 pt-4">
              <Link href="https://owlfi.vercel.app" target="_blank">
                <button className="flex-1 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm cursor-pointer">
                  Launch App
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
