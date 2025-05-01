"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  once?: boolean;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  value?: number;
  staggerDelay?: number;
}

export default function AnimatedCard({
  className = "",
  children,
  once = false,
  delay = 0,
  direction = "left",
  duration = 1,
  value = 100,
  staggerDelay = 0.1,
}: AnimatedCardProps) {
  // Create a reference to track when the element is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -value, y: 0 };
      case "right":
        return { x: value, y: 0 };
      case "up":
        return { x: 0, y: -value };
      case "down":
        return { x: 0, y: value };
      default:
        return { x: -value, y: 0 };
    }
  };

  // Container variants with explicit animation states
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  // Child variants with more precise animation settings
  const childVariants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
