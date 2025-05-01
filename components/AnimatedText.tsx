"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  cusy?: boolean; // Make cusy optional
  text: string;
  className?: string;
  once?: boolean;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  zooming?: boolean; // Added zooming prop
}

export default function AnimatedText({
  cusy = false,
  zooming = false,
  text,
  className = "",
  once = false,
  direction = "right",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  const getHiddenPosition = () => {
    switch (direction) {
      case "left":
        return { x: -20 };
      case "right":
        return { x: 20 };
      case "up":
        return { y: -20 };
      case "down":
        return { y: 20 };
      default:
        return { x: 20 };
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay + 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      ...getHiddenPosition(),
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={` ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      // Apply to the parent container
      data-interactive={cusy ? "true" : "false"}
      data-zooming={zooming ? "true" : "false"} // Apply to the parent container
      // Apply to the parent container
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          data-interactive={cusy ? "true" : "false"}
          data-zooming={zooming ? "true" : "false"} // Apply to the parent container
          variants={child}
        >
          <p
            data-interactive={cusy ? "true" : "false"}
            data-zooming={zooming ? "true" : "false"}
          >
            {word}
          </p>
        </motion.span>
      ))}
    </motion.div>
  );
}
