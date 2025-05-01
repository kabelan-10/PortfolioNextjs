"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
  y?: number;
  scale?: number;
  className?: string;
  children: React.ReactNode;
  once?: boolean;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  value?: number;
  hoverEffect?: boolean;
}

export default function AnimatedCard({
  hoverEffect = true,
  y = 0,
  scale = 1,
  className = "",
  children,
  once = false,
  delay = 0,
  direction = "left",
  duration = 1,
  value = 100,
}: AnimatedCardProps) {
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

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2, // 👈 controls spacing between each child animation
            delayChildren: delay, // 👈 starting delay for the first child
          },
        },
      }}
    >
      {/* Animate each child individually */}
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            className="rounded-lg"
            key={index}
            variants={{
              hidden: { opacity: 0, ...getInitialPosition() },
              show: { opacity: 1, x: 0, y: 0 },
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration,
            }}
            whileHover={
              hoverEffect
                ? {
                    y: y,
                    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
                  }
                : undefined
            }
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          className="rounded-lg"
          variants={{
            hidden: { opacity: 0, ...getInitialPosition() },
            show: { opacity: 1, x: 0, y: 0 },
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration,
          }}
          whileHover={{
            y: y,
            scale: scale,

            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
