"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      data-interactive="true"
      size="icon"
      className={`fixed bottom-4 left-4 z-50 rounded-full p-2 ${
        theme == "dark"
          ? "bg-slate-100 hover:bg-slate-100 mix-blend-difference"
          : "bg-black hover:bg-black"
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun data-interactive="true" className="h-6 w-6 text-black" />
      ) : (
        <Moon data-interactive="true" className="h-6 w-6 text-white" />
      )}
    </Button>
  );
}
