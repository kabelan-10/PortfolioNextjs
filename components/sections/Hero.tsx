"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import useMousePosition from "@/hooks/useMousePosition";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import AnimatedCard from "@/components/AnimatedCard";
import { socialLinks } from "@/lib/data";

import {
  Github as GitHub,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  MailIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
export default function Hero() {
  const { isBrowser, getTransform } = useMousePosition();
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false); // Hide the arrow when scrolling more than 50px
      } else {
        setIsVisible(true); // Show the arrow when scrolling less than 50px
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Get different transform factors for various elements
  const nameTransform = getTransform(0.02);
  const circle1Transform = getTransform(0.15);
  const circle2Transform = getTransform(0.2);
  const circle3Transform = getTransform(0.1);
  //   <motion.header
  //   id="home"
  //   initial={{ opacity: 0, y: -50 }}
  //   animate={{ opacity: 1, y: 0 }}
  //   transition={{ duration: 1 }}
  //   className="container mx-auto px-4 py-32 flex-col items-center text-center min-h-screen flex justify-center"
  // >
  //   <motion.div className="space-y-8">
  //     {isBrowser ? (
  //       <motion.h1
  //         className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
  //         style={{
  //           x: nameTransform.x,
  //           y: nameTransform.y,
  //         }}
  //       >
  //         John Developer
  //       </motion.h1>
  //     ) : (
  //       <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
  //         John Developer
  //       </h1>
  //     )}
  //   </motion.div>
  // </motion.header>
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container fixed px-4 z-50 flex justify-center  top-1/5 left-50 lg:left-10"></div>
      {/* Static background elements */}
      <div className="absolute  w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute  w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute  w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />

      {/* Animated background circles (only appear in browser) */}
      {isBrowser && (
        <>
          <motion.div
            className="absolute rounded-full blur-3xl bg-gradient-to-r from-primary/50 to-violet-900/30"
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
            className="absolute rounded-full blur-[50px] bg-gradient-to-r from-violet-900/30 to-primary/50"
            style={{
              width: "20rem",
              height: "20rem",
              right: "60%",
              top: "50",
              x: circle2Transform.x,
              y: circle2Transform.y,
              zIndex: 0,
            }}
            // <motion.div
            // className="absolute rounded-full bg-primary/25 blur-3xl"
            // style={{
            //   width: "20rem",
            //   height: "20rem",
            //   right: "60%",
            //   top: "50",
            //   x: circle2Transform.x,
            //   y: circle2Transform.y,
            //   zIndex: 0,
            // }}
          />

          <motion.div
            className="absolute rounded-full bg-primary/20 blur-2xl"
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

      <div className="container px-4 z-10">
        <div className="max-w-4xl mx-auto flex justify-center flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-primary">
              <AnimatedText
                cusy
                delay={1.5}
                direction="down"
                text="Welcome to my world"
                once
              />
            </h2>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-primary">
              Welcome to my world
            </h2>
          </motion.div> */}
          {/* <AnimatedText
            direction="up"
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight "
            text="Kabelan E"
          /> */}
          {/* <motion.div
            transition={{ duration: 0.6, delay: 1.5 }}
            className="overflow-hidden"
          >
            <div className="text-6xl md:text-8xl  font-bold mb-6 tracking-tight">
              <AnimatedText direction="down" text={personalInfo.name} once />
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, scale: 1, filter: "blur(10px)" }} // 👈 use filter for blur
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1
              className={`text-6xl flex justify-center md:text-8xl font-bold  mb-6 tracking-normal 
`}
            >
              <p className="w-fit " data-interactive="true" data-zooming="true">
                {personalInfo.name}
              </p>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-8"
          >
            <AnimatedText
              cusy
              zooming
              direction="up"
              className={`text-3xl md:text-4xl w-fit font-semibold flex justify-center gap-2 text-muted-foreground  `}
              text={personalInfo.title}
              once
              delay={1.5}
            />
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
              {personalInfo.title}
            </h2>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            <AnimatedText
              direction="down"
              cusy
              once
              className="w-fit text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              text="Crafting beautiful digital experiences with clean code and creative solutions."
            />
            {/* Crafting beautiful digital experiences with clean code and creative
            solutions. Specialized in React, Next.js, and modern frontend
            technologies. */}
          </motion.div>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting beautiful digital experiences with clean code and creative
            solutions. Specialized in React, Next.js, and modern frontend
            technologies.
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex justify-center space-x-6"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
              >
                <AnimatedText
                  cusy
                  once
                  delay={2}
                  direction="up"
                  text="View My Work"
                />
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-medium transition-all hover:bg-primary/10"
              >
                <AnimatedText
                  cusy
                  once
                  delay={2}
                  direction="down"
                  text="Contact Me"
                />
              </motion.button>
            </Link>
          </motion.div>
          <div className="flex flex-wrap mt-10   gap-1 md:gap-6 ">
            <AnimatedCard
              y={-10}
              delay={2.5}
              once
              direction="down"
              className="flex flex-wrap  flex-row  items-center gap-10 md:gap-20 "
            >
              <a
                data-interactive="true"
                href={socialLinks.find((s) => s.platform === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-16 h-16  bg-transparent rounded-lg  hover:bg-accent/10 transition-colors"
              >
                <GitHub data-interactive="true" size={32} className="mb-3" />
              </a>

              <a
                data-interactive="true"
                href={socialLinks.find((s) => s.platform === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-16 h-16   rounded-3xl bg-transparent  hover:bg-accent/10 transition-colors"
              >
                <Linkedin data-interactive="true" size={32} className="mb-3" />
              </a>

              <a
                data-interactive="true"
                href={`mailto:${
                  socialLinks.find((s) => s.platform === "Gmail")?.url
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-16 h-16   rounded-lg bg-transparent  hover:bg-accent/10 transition-colors"
              >
                <MailIcon size={32} className="mb-3" />
              </a>
            </AnimatedCard>
          </div>
        </div>{" "}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 3,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className={`absolute bottom-10 ${
          isVisible ? "" : "hidden"
        } left-1/2 transform -translate-x-1/2 cursor-pointer`}
      >
        <ArrowDownCircle size={40} className="text-primary/80" />
      </motion.div>
    </div>
  );
}
