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
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14.5" cy="14.5" r="14.5" fill="#F3F1F0" />
              <path
                d="M18.7447 4.81873C18.9316 4.7254 19.1304 4.73742 19.2681 4.77185C19.3566 4.79416 19.4286 4.85979 19.4644 4.94373C19.8221 5.78822 18.8253 6.94484 18.2535 7.43884C18.7119 8.48691 18.3351 10.2779 18.0894 11.0424C23.111 14.3904 22.3224 21.0714 21.2574 24.1508C21.2269 24.2381 21.1278 24.2784 21.0425 24.2426C14.636 21.5169 13.7248 15.0858 14.0767 12.1888C14.8683 11.7247 16.5496 10.633 16.9429 9.97791C17.178 9.58576 17.1907 9.01716 17.1275 8.51892C17.056 7.95604 16.7936 7.37334 16.2505 7.20935C16.0147 7.13837 15.7251 7.11581 15.3873 7.19373C14.323 7.43967 13.749 8.99526 13.4214 10.8783V10.8051C13.0982 8.94495 12.5323 7.40774 11.482 7.16443C11.1532 7.08856 10.8701 7.10833 10.6392 7.17615C10.0953 7.33627 9.83245 7.92004 9.76226 8.48279C9.70131 8.97256 9.71545 9.52955 9.94586 9.91443C10.334 10.5615 11.9934 11.6404 12.775 12.099C11.8755 15.2754 11.811 16.3526 13.3697 22.7142C13.3952 22.8191 13.3149 22.9229 13.2076 22.9125C10.2075 22.6127 6.4361 17.7675 8.81402 10.9662C8.57152 10.2107 8.19949 8.44187 8.65191 7.40662C8.0877 6.91868 7.10498 5.77681 7.4566 4.94275C7.49221 4.85864 7.56428 4.79301 7.65289 4.77087C7.78872 4.73727 7.98405 4.72613 8.16754 4.81775C8.49094 4.98006 9.05797 5.78852 11.0777 5.46521C11.509 5.41127 12.5812 5.30317 13.4214 5.3031V5.30994C14.2726 5.30997 15.3593 5.41939 15.7964 5.474C17.8429 5.80131 18.4171 4.98279 18.7447 4.81873Z"
                fill="#0F0702"
              />
              <circle cx="15.123" cy="9.12906" r="0.692776" fill="#0F0702" />
              <circle cx="11.5967" cy="9.1293" r="0.692776" fill="#0F0702" />
            </svg>
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
            <button className="px-6 py-2 rounded-full bg-[#FECD6D] hover:bg-[#fece6dd5] text-black transition font-medium cursor-pointer">
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
                <button className="flex-1 px-4 py-2 rounded-full bg-[#FECD6D] hover:bg-[#fece6dd5] text-black text-sm cursor-pointer">
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
