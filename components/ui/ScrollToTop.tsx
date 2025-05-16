"use client";

import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
export default function ScrollToTop({ visibilityThreshold = 300, text = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const pathname = usePathname();
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > visibilityThreshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [visibilityThreshold]);
  useEffect(() => {
    // Scroll to top on every pathname change
    window.scrollTo(0, 0);
  }, [pathname]);
  // Scroll to top with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      data-interactive="true"
      variant="outline"
      size="icon"
      className={`${
        text ? "" : "fixed"
      } bottom-4 right-4 z-50 rounded-full p-2 mix-blend-difference`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      {/* If text is passed, style the text with button-like appearance, otherwise display the icon */}
      {text ? (
        <span className="px-8 py-4 bg-primary-foreground text-primary rounded-full inline-flex items-center font-medium hover:bg-primary-foreground/90 transition-colors">
          {text}
        </span>
      ) : (
        <ArrowUpCircle data-interactive="true" className="h-6 w-6" />
      )}
    </Button>
  );
}
