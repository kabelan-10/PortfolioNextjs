"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Pacifico,
  Handjet,
  Merienda,
  WindSong,
  Open_Sans,
  Londrina_Shadow,
  Londrina_Outline,
  Splash,
} from "next/font/google";
// ${londrinaShadow.className}
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const handjet = Handjet({ weight: ["400", "700"], subsets: ["latin"] });
const merienda = Merienda({ weight: ["400", "700"], subsets: ["latin"] });
const windsong = WindSong({ weight: ["400", "500"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const londrinaShadow = Londrina_Shadow({ weight: "400", subsets: ["latin"] });
const londrinaOutline = Londrina_Outline({ weight: "400", subsets: ["latin"] });
const splash = Splash({ weight: "400", subsets: ["latin"] });
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Gallery", href: "/gallery" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Wait for intro animation to complete (approximately 2 seconds)
    const timer = setTimeout(() => {
      setMounted(true);
    }, 2000);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold tracking-tighter transition-colors hover:text-primary `}
            >
              Kabelan
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative font-medium transition-colors hover:text-primary",
                      isActive
                        ? "text-primary after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                        : "text-foreground/80"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-border">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
