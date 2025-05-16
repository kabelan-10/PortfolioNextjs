// components/AnimatedBackground.tsx
"use client";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

export default function AnimatedBackground() {
  const { isBrowser, getTransform } = useMousePosition();
  const circle1Transform = getTransform(0.15);
  const circle2Transform = getTransform(0.2);
  const circle3Transform = getTransform(0.1);

  return (
    <>
      {/* Static background elements */}
      <div className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      {/* Animated background circles (only if browser) */}
      {isBrowser && (
        <>
          <motion.div
            className="absolute rounded-full blur-3xl bg-gradient-to-r from-primary/50 to-violet-900/30 pointer-events-none"
            style={{
              width: "15rem",
              height: "15rem",
              top: "50%",
              left: "60%",
              x: circle1Transform.x,
              y: circle1Transform.y,
              zIndex: 0,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[50px] bg-gradient-to-r from-violet-900/30 to-primary/50 pointer-events-none"
            style={{
              width: "20rem",
              height: "20rem",
              top: "50%",
              right: "60%",
              x: circle2Transform.x,
              y: circle2Transform.y,
              zIndex: 0,
            }}
          />
          <motion.div
            className="absolute rounded-full bg-primary/20 blur-2xl pointer-events-none"
            style={{
              width: "18rem",
              height: "18rem",
              bottom: "50%",
              left: "50%",
              x: circle3Transform.x,
              y: circle3Transform.y,
              zIndex: 0,
            }}
          />
        </>
      )}
    </>
  );
}
