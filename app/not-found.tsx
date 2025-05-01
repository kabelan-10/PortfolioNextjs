// app/not-found.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import useMousePosition from "@/hooks/useMousePosition";
import AnimatedText from "@/components/AnimatedText";
import SlowFadeText from "@/components/SlowFadeText";
export default function NotFound() {
  const { isBrowser, getTransform } = useMousePosition();
  const circle1Transform = getTransform(0.15);
  const circle2Transform = getTransform(0.2);
  const circle3Transform = getTransform(0.1);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static background elements */}
      <div className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      {/* Animated background circles (only if browser) */}
      {isBrowser && (
        <>
          <motion.div
            className="absolute rounded-full bg-primary/20 blur-3xl pointer-events-none"
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
            className="absolute rounded-full bg-primary/25 blur-3xl pointer-events-none"
            style={{
              width: "20rem",
              height: "20rem",
              right: "60%",
              top: "50%",
              x: circle2Transform.x,
              y: circle2Transform.y,
              zIndex: 0,
            }}
          />

          <motion.div
            className="absolute rounded-full bg-primary/10 blur-xl pointer-events-none"
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
      {/* 404 Page Content */}{" "}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-4">
        <AnimatedText
          cusy={true}
          zooming={true}
          direction="down"
          className="text-5xl font-bold mb-4"
          text="404"
        />
        <AnimatedText
          direction="up"
          className="text-4xl font-bold mb-4"
          text="Page Not Found"
        />
        <SlowFadeText
          className="mb-6 text-lg text-gray-600 dark:text-gray-300"
          text=" Oops! The page you're looking for doesn't exist."
        />

        <Link
          href="/"
          className="px-4 py-2  bg-blue-600 text-white rounded hover:bg-blue-700  transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
