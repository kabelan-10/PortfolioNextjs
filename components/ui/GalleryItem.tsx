"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem as GalleryItemType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GalleryItemProps {
  once?: boolean;
  item: GalleryItemType;
  index: number;
  onClick: () => void;
}

export default function GalleryItem({
  once = false,
  item,
  index,
  onClick,
}: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group cursor-pointer overflow-hidden rounded-lg aspect-square relative interactive"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      viewport={{ once }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className={cn(
          "object-cover transition-transform duration-500",
          isHovered ? "scale-110" : "scale-100"
        )}
      />

      <div
        className={cn(
          "absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      >
        <h3 className="text-white text-lg font-semibold mb-1 text-center">
          {item.title}
        </h3>
        <span className="text-white/80 text-sm px-3 py-1 rounded-full bg-white/10 mb-2">
          {item.category}
        </span>
      </div>
    </motion.div>
  );
}
