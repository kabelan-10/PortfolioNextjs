"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  dis?: number;
  children: ReactNode;
  speed?: number;
  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "uponly"
    | "downonly"
    | "leftonly"
    | "rightonly"
    | "uponly1"
    | "downonly1"
    | "leftonly1"
    | "rightonly1";
  className?: string;
}

export default function ParallaxEffect({
  dis = 100,
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate transform based on direction
  let transformStyle;
  const distance = dis * speed;

  switch (direction) {
    case "up":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateY(${distance}px)`, `translateY(-${distance}px)`]
      );
      break;
    case "down":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateY(-${distance}px)`, `translateY(${distance}px)`]
      );
      break;
    case "left":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateX(${distance}px)`, `translateX(-${distance}px)`]
      );
      break;
    case "right":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateX(-${distance}px)`, `translateX(${distance}px)`]
      );
      break;
    case "uponly1":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateY(${distance}px)`, `translateY(0px)`]
      );
      break;
    case "downonly1":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateY(-${distance}px)`, `translateY0px)`]
      );
      break;
    case "leftonly1":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateX(${distance}px)`, `translateX(0px)`]
      );
      break;
    case "rightonly1":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateX(-${distance}px)`, `translateX(0px)`]
      );
      break;
    case "uponly":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateY(0px)`, `translateY(-${distance}px)`]
      );
      break;
    case "downonly":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateY(0px)`, `translateY(${distance}px)`]
      );
      break;
    case "leftonly":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateX(0px)`, `translateX(-${distance}px)`]
      );
      break;
    case "rightonly":
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateX(0}px)`, `translateX(${distance}px)`]
      );
      break;
    default:
      transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        [`translateY(${distance}px)`, `translateY(-${distance}px)`]
      );
  }

  return (
    <motion.div
      ref={ref}
      style={{ transform: transformStyle }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
