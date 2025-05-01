"use client";

import { useState, useEffect } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export default function useMousePosition() {
  const [isBrowser, setIsBrowser] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsBrowser(true);

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e:any) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Predefine transform hooks with dummy factor = 1
  const _x = useTransform(smoothMouseX, (x) => (x - windowSize.width / 2));
  const _y = useTransform(smoothMouseY, (y) => (y - windowSize.height / 2));

  const getTransform = (factor:any) => {
    return {
      x: useTransform(_x, (x) => x * factor),
      y: useTransform(_y, (y) => y * factor),
    };
  };

  return {
    isBrowser,
    mouseX,
    mouseY,
    smoothMouseX,
    smoothMouseY,
    windowSize,
    getTransform
  };
}
