import Image from "next/image";
import Link from "next/link";
import {
  Github as GitHub,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  MailIcon,
} from "lucide-react";
import ParallaxEffect from "@/components/ParallaxEffect";
import AnimatedText from "@/components/AnimatedText";
import SlowFadeText from "@/components/SlowFadeText";
import CenterTextAnimation from "@/components/CenterTextAnimation";
import AnimatedAny from "@/components/AnimatedAny";
import { education, experience, socialLinks, personalInfo } from "@/lib/data";
import AnimatedCard from "@/components/AnimatedCard";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center">
            <AnimatedText
              cusy
              zooming
              direction="up"
              text="About Me"
              className="text-4xl w-fit md:text-6xl font-bold mb-6"
            />
            <AnimatedText
              cusy
              once={true}
              text="Get to know more about me, my background, and what I do."
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 gap-12 items-center">
            <ParallaxEffect direction="up">
              <div className="relative transition-all duration-1000 shadow-bottom-right hover:-translate-y-10 hover:shadow-bottom-right-0.5 aspect-square max-w-md mx-auto lg:max-w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt={personalInfo.name}
                  fill
                  className="object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-white/80">{personalInfo.title}</p>
                </div>
              </div>
            </ParallaxEffect>

            <ParallaxEffect direction="down">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {" "}
                  <AnimatedText cusy text="Who I Am" />
                </h2>

                <div className="prose dark:prose-invert max-w-none mb-8">
                  {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-4 text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <AnimatedAny
                      className=" w-fit"
                      once
                      direction="right"
                      value={50}
                    >
                      <h3 className="text-lg font-semibold mb-2  w-fit">
                        Location
                      </h3>
                      <p className="text-muted-foreground  w-fit">
                        {personalInfo.location}
                      </p>
                    </AnimatedAny>
                  </div>

                  <div>
                    <AnimatedAny
                      className=" w-fit"
                      once
                      direction="right"
                      value={50}
                    >
                      <h3 className="text-lg font-semibold mb-2 w-fit">
                        Email
                      </h3>
                      <p className="text-muted-foreground  w-fit">
                        {personalInfo.email}
                      </p>
                    </AnimatedAny>
                  </div>

                  <div>
                    <AnimatedAny
                      once
                      direction="right"
                      className="w-fit"
                      value={50}
                    >
                      <h3 className="text-lg font-semibold mb-2 w-fit">
                        Phone
                      </h3>
                      <p className="text-muted-foreground w-fit">
                        {personalInfo.phone}
                      </p>
                    </AnimatedAny>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                    data-interactive="true"
                  >
                    <AnimatedText cusy direction="down" text="Contact Me" />
                  </Link>
                  <Link
                    href="/projects"
                    className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
                  >
                    <AnimatedText cusy direction="down" text="View Projects" />
                  </Link>
                </div>
              </div>
            </ParallaxEffect>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 md:py-24 bg-accent/5 max-w-7xl mx-auto">
        <div className="container px-4 mx-auto flex flex-col items-center">
          <div className="text-center w-fit mb-16">
            <AnimatedText
              cusy
              text="Education & Experience"
              direction="down"
              className="text-3xl md:text-4xl font-bold mb-4"
            />

            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <ParallaxEffect>
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span
                    data-interactive="true"
                    className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm"
                  >
                    <svg
                      data-interactive="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        data-interactive="true"
                        d="M22 10v6M2 10l10-5 10 5-10 5z"
                      />
                      <path
                        data-interactive="true"
                        d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"
                      />
                    </svg>
                  </span>
                  <AnimatedText cusy direction="up" text="Education" />
                </h3>

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
                    >
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary" />
                      <div>
                        <span className="inline-block  px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                          <AnimatedText
                            direction="down"
                            className="overflow-clip"
                            text={`${edu.from} - ${edu.to}`}
                          />
                        </span>
                        <h4 className="text-xl font-semibold">
                          <AnimatedText
                            cusy
                            once={true}
                            text={`${edu.degree} in ${edu.field}`}
                            className="text-3xl md:text-4xl font-bold mb-4"
                          />
                        </h4>
                        <div className="text-lg text-muted-foreground mt-1 mb-2">
                          <AnimatedText
                            cusy
                            direction="up"
                            className="overflow-clip text-lg text-muted-foreground mt-1 mb-2"
                            text={edu.institution}
                          />
                        </div>
                        <div className="text-muted-foreground">
                          <SlowFadeText
                            once={true}
                            text={edu.description}
                            className="text-muted-foreground"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ParallaxEffect>

            {/* Experience */}
            <ParallaxEffect>
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span
                    data-interactive="true"
                    className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm"
                  >
                    <svg
                      data-interactive="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        data-interactive="true"
                        width="20"
                        height="14"
                        x="2"
                        y="7"
                        rx="2"
                        ry="2"
                      />
                      <path
                        data-interactive="true"
                        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                      />
                    </svg>
                  </span>
                  <AnimatedText cusy direction="up" text=" Experience" />
                </h3>

                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
                    >
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary" />
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                          <AnimatedText
                            direction="down"
                            className="overflow-clip"
                            text={`${exp.from} - ${exp.to}`}
                          />
                        </span>
                        <h4 className="text-xl font-semibold">
                          <AnimatedText
                            cusy
                            once={true}
                            text={exp.position}
                            className="text-3xl md:text-4xl font-bold mb-4"
                          />
                        </h4>
                        <div className="text-lg text-muted-foreground mt-1 mb-2">
                          <AnimatedText
                            cusy
                            direction="up"
                            className="overflow-clip text-lg text-muted-foreground mt-1 mb-2"
                            text={exp.company}
                          />
                        </div>
                        <div className="text-muted-foreground">
                          <SlowFadeText once text={exp.description} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ParallaxEffect>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              cusy
              direction="down"
              text="Connect With Me"
              className="text-3xl md:text-4xl font-bold mb-4 "
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find me on various platforms and social media.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <AnimatedCard
              y={-10}
              once
              direction="down"
              className="flex flex-wrap justify-center gap-6 "
            >
              <a
                data-interactive="true"
                href={socialLinks.find((s) => s.platform === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-40 h-40 p-6 bg-card rounded-lg border border-border hover:bg-accent/10 transition-colors"
              >
                <GitHub data-interactive="true" size={32} className="mb-3" />
                <span data-interactive="true" className="text-lg font-medium">
                  GitHub
                </span>
              </a>

              <a
                data-interactive="true"
                href={socialLinks.find((s) => s.platform === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-40 h-40 p-6 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors"
              >
                <Linkedin data-interactive="true" size={32} className="mb-3" />
                <span data-interactive="true" className="text-lg font-medium">
                  LinkedIn
                </span>
              </a>

              {/* <a
                data-interactive="false"
                href={socialLinks.find((s) => s.platform === "Twitter")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-40 h-40 p-6 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors"
              >
                <Twitter size={32} className="mb-3 " />
                <span data-interactive="true" className="text-lg font-medium">
                  Twitter
                </span>
              </a> */}

              {/* <a
                data-interactive="false"
                href={socialLinks.find((s) => s.platform === "Instagram")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-40 h-40 p-6 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors"
              >
                <Instagram size={32} className="mb-3" />
                <span data-interactive="true" className="text-lg font-medium">
                  Instagram
                </span>
              </a> */}

              <a
                data-interactive="true"
                href={`mailto:${
                  socialLinks.find((s) => s.platform === "Gmail")?.url
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-40 h-40 p-6 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors"
              >
                <MailIcon size={32} className="mb-3" />
                <span data-interactive="true" className="text-lg font-medium">
                  Mail
                </span>
              </a>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-20 bg-primary">
        <div className="container px-4 mx-auto text-center">
          <ParallaxEffect>
            <h2>
              <AnimatedText
                cusy
                direction="down"
                text=" Let's Connect and Create Something Amazing!?"
                className="text-3xl flex justify-center flex-wrap gap-1 md:text-5xl font-bold mb-6 text-primary-foreground"
              />
            </h2>
            <SlowFadeText
              once
              text="I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
              className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
            />

            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-full inline-flex items-center font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Contact Me
            </Link>
          </ParallaxEffect>
        </div>
      </section>
    </div>
  );
}
