"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true); // Set cursor visible on any mouse move
    };

    const handleMouseEnter = () => setIsVisible(true); // Ensure cursor is visible when mouse enters the body
    const handleMouseLeave = () => setIsVisible(false); // Hide the cursor when mouse leaves the body

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.getAttribute("data-interactive") === "true" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.getAttribute("role") === "button";
      setIsHovering(isInteractive);
      target.getAttribute("data-zooming") === "true"
        ? setIsZooming(true)
        : setIsZooming(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleElementHover);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleElementHover);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]); // Added isVisible as dependency to trigger when mouse starts moving
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
    };

    checkScreenSize(); // Set on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      {!isMobile && (
        <>
          <motion.div
            className={`pointer-events-none fixed z-[9999] h-8 w-8 rounded-full mix-blend-difference transition-colors duration-150 ${
              isHovering
                ? "bg-white border-none"
                : "border-2 border-white bg-transparent"
            }`}
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              opacity: isVisible ? 1 : 0,
              scale: isZooming ? 2 : isHovering ? 1.2 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 50,
              mass: 0.5,
            }}
          />
          <motion.div
            className={`pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-white mix-blend-difference ${
              isHovering
                ? "border-2 border-white bg-white"
                : "bg-white border-none"
            }`}
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
              opacity: isVisible ? 1 : 0,
              scale: isHovering ? 0.4 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 750,
              damping: 28,
              mass: 0.25,
            }}
          />
          <style jsx global>{`
            * {
              cursor: none !important;
            }
            a,
            button,
            [role="button"] {
              cursor: none !important;
            }
          `}</style>
        </>
      )}
    </>
    // <>

    //   <motion.div
    //     className={`pointer-events-none fixed z-[9999] h-8 w-8 rounded-full mix-blend-difference transition-colors duration-150 ${
    //       isHovering
    //         ? "bg-white border-none"
    //         : "border-2 border-white bg-transparent"
    //     }`}
    //     animate={{
    //       x: mousePosition.x - 16,
    //       y: mousePosition.y - 16,
    //       opacity: isVisible ? 1 : 0,
    //       scale: isZooming ? 2 : isHovering ? 1.2 : 1,
    //     }}
    //     transition={{
    //       type: "spring",
    //       stiffness: 400,
    //       damping: 50,
    //       mass: 0.5,
    //     }}
    //   />
    //   <motion.div
    //     className={`pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-white mix-blend-difference ${
    //       isHovering ? "border-2 border-white bg-white" : "bg-white border-none"
    //     }`}
    //     animate={{
    //       x: mousePosition.x - 4,
    //       y: mousePosition.y - 4,
    //       opacity: isVisible ? 1 : 0,
    //       scale: isHovering ? 0.4 : 1,
    //     }}
    //     transition={{
    //       type: "spring",
    //       stiffness: 750,
    //       damping: 28,
    //       mass: 0.25,
    //     }}
    //   />
    //   <style jsx global>{`
    //     * {
    //       cursor: none !important;
    //     }
    //     a,
    //     button,
    //     [role="button"] {
    //       cursor: none !important;
    //     }
    //   `}</style>
    // </>
    //   );
    // }
  );
}
