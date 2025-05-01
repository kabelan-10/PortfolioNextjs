"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Skill } from "@/lib/types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group p-4 rounded-lg bg-card border border-border hover:bg-accent/5 transition-all duration-300 interactive"
    >
      <div className="flex flex-col space-y-2">
        <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
          {skill.name}
        </h3>

        <div className="w-full bg-accent/20 rounded-full h-2.5 mt-2">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="h-2.5 rounded-full bg-primary"
          />
        </div>

        <div className="flex justify-between text-sm text-muted-foreground mt-1">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
}
