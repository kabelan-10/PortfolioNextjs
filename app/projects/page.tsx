import ParallaxEffect from "@/components/ParallaxEffect";
import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
import SlowFadeText from "@/components/SlowFadeText";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden ">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container px-4 mx-auto">
          <div className="text-center flex flex-col items-center ">
            <AnimatedText
              cusy
              zooming
              direction="up"
              text="My Projects"
              className="text-4xl md:text-6xl font-bold mb-6 w-fit"
            />
            <AnimatedText
              cusy
              text="A collection of my recent work, personal projects, and client engagements."
              className="text-xl text-muted-foreground mb-8  w-fit"
              once
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto">
        <div className="container px-4 mx-auto">
          {/* Featured Projects */}
          <div className="mb-20">
            <ParallaxEffect>
              <h2 data-interactive="true" className="text-3xl font-bold mb-12">
                Featured Projects
              </h2>
            </ParallaxEffect>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <ParallaxEffect>
              <h2 className="text-3xl font-bold mb-12">Other Projects</h2>
            </ParallaxEffect>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 bg-white w-full">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </section> */}
      <section className="py-20 bg-primary">
        <div className="container px-4 mx-auto text-center">
          <ParallaxEffect>
            <h2>
              <AnimatedText
                cusy
                direction="down"
                text=" Interested in Working Together?"
                className="text-3xl md:text-5xl font-bold mb-6 flex flex-wrap  justify-center gap-1 text-primary-foreground"
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
              Lets's Talk
            </Link>
          </ParallaxEffect>
        </div>
      </section>
    </div>
  );
}
