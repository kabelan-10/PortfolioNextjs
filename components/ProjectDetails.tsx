"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/types";
import AnimatedText from "./AnimatedText";
import AnimatedAny from "./AnimatedAny";

export default function ProjectDetails({
  initialProject,
}: {
  initialProject: Project;
}) {
  const router = useRouter();
  const [project, setProject] = useState<Project>(initialProject);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  return (
    <div className="pt-24 pb-20">
      <div className="container px-4 max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <AnimatedText cusy zooming text={project.title} direction="up" />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-accent/50 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={16} className="mr-2" /> Visit Project
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-accent/10 transition-colors"
              >
                <Github size={16} className="mr-2" /> View Code
              </a>
            )}
          </motion.div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative aspect-video w-full overflow-hidden rounded-lg mb-12"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6">
              <AnimatedText cusy text="Project Overview" />
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <AnimatedText cusy direction="down" text="Project Details" />
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-accent/30 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Live URL</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all"
                    >
                      {project.link}
                    </a>
                  </div>
                )}

                {project.github && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Repository</h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all"
                    >
                      {project.github}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Gallery */}
        <h2 className="text-2xl font-bold mb-6">
          <AnimatedText cusy direction="up" text="Project Gallery" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImageIndex(index)} // Set index instead of image URL
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal for image */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedImageIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Previous Button */}
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) => {
                      if (prev === null) return 0; // Fallback to the first image if prev is null
                      return prev === 0 ? project.gallery.length - 1 : prev - 1;
                    })
                  }
                  className="absolute  z-50 left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  &lt;
                </button>

                {/* Image */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={project.gallery[selectedImageIndex]}
                    alt="Project Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) => {
                      if (prev === null) return 0; // Fallback to the first image if prev is null
                      return prev === project.gallery.length - 1 ? 0 : prev + 1;
                    })
                  }
                  className="absolute z-50 right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  &gt;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
