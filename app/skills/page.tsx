import AnimatedText from "@/components/AnimatedText";
import ParallaxEffect from "@/components/ParallaxEffect";
import SkillCard from "@/components/ui/SkillCard";
import { skills } from "@/lib/data";
import AnimatedAny from "@/components/AnimatedAny";
import AnimatedCard from "@/components/AnimatedCard";
import SlowFadeText from "@/components/SlowFadeText";
import Link from "next/link";

export default function SkillsPage() {
  // Group skills by category
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const designSkills = skills.filter((skill) => skill.category === "design");
  const otherSkills = skills.filter((skill) => skill.category === "other");

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
              text="My Skills & Expertise"
              className="text-4xl md:text-6xl font-bold mb-6 w-fit"
            />
            <AnimatedText
              cusy
              text="A comprehensive overview of my technical skills, tools, and areas of expertise."
              className="text-xl text-muted-foreground mb-8 w-fit"
              once
            />
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 md:py-24 bg-accent/5 max-w-7xl mx-auto">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <ParallaxEffect direction="up">
              <div className="flex justify-center flex-col items-center md:items-start">
                <h2 className="text-3xl font-bold mb-6">
                  <AnimatedText
                    cusy
                    direction="up"
                    text="Technical Proficiency"
                  />
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I have a strong foundation in software development, with
                  expertise in a broad range of technologies across the full
                  stack. My approach blends technical knowledge with creative
                  problem-solving to deliver outstanding digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I continuously expand my skill set through ongoing learning
                  and staying updated with the latest industry trends and best
                  practices.
                </p>
              </div>
            </ParallaxEffect>

            <ParallaxEffect direction="down">
              <div>
                <AnimatedCard
                  direction="down"
                  value={50}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-card border border-border p-6 rounded-xl">
                    <AnimatedAny delay={0.2} value={50} direction="up">
                      <div
                        data-interactive="true"
                        className="w-fit text-4xl font-bold text-primary mb-2"
                      >
                        90%
                      </div>
                      <div
                        data-interactive="true"
                        className="w-fit text-lg font-medium"
                      >
                        Frontend Development
                      </div>
                    </AnimatedAny>
                  </div>

                  <div className="bg-card border border-border p-6 rounded-xl">
                    <AnimatedAny delay={0.2} value={50} direction="up">
                      <div
                        data-interactive="true"
                        className="w-fit text-4xl font-bold text-primary mb-2"
                      >
                        85%
                      </div>
                      <div
                        data-interactive="true"
                        className="w-fit text-lg font-medium"
                      >
                        Backend Development
                      </div>
                    </AnimatedAny>
                  </div>

                  <div className="bg-card border border-border p-6 rounded-xl">
                    <AnimatedAny delay={0.2} value={50} direction="up">
                      <div
                        data-interactive="true"
                        className="w-fit text-4xl font-bold text-primary mb-2"
                      >
                        80%
                      </div>
                      <div
                        data-interactive="true"
                        className="w-fit text-lg font-medium"
                      >
                        UI/UX Design
                      </div>
                    </AnimatedAny>
                  </div>

                  <div className="bg-card border border-border p-6 rounded-xl">
                    <AnimatedAny delay={0.2} value={50} direction="up">
                      <div
                        data-interactive="true"
                        className="w-fit text-4xl font-bold text-primary mb-2"
                      >
                        80%
                      </div>
                      <div
                        data-interactive="true"
                        className="w-fit text-lg font-medium"
                      >
                        Database
                      </div>
                    </AnimatedAny>
                  </div>
                </AnimatedCard>
              </div>
            </ParallaxEffect>
          </div>
        </div>
      </section>

      {/* Frontend Skills */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <ParallaxEffect className="flex justify-center">
            <AnimatedText
              className="text-3xl font-bold mb-12 text-center w-fit"
              cusy
              direction="up"
              text="Frontend Development"
            />
          </ParallaxEffect>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Backend Skills */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container px-4 mx-auto">
          <ParallaxEffect className="flex justify-center">
            <AnimatedText
              className="text-3xl font-bold mb-12 text-center w-fit"
              cusy
              direction="up"
              text="Backend Development"
            />
          </ParallaxEffect>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Skills */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <ParallaxEffect className="flex justify-center">
            <AnimatedText
              className="text-3xl font-bold mb-12 text-center w-fit"
              cusy
              direction="up"
              text="Design & Creative"
            />
          </ParallaxEffect>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Skills */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container px-4 mx-auto">
          <ParallaxEffect className="flex justify-center">
            <AnimatedText
              className="text-3xl font-bold mb-12 text-center w-fit"
              cusy
              direction="up"
              text="Other Skills & Tools"
            />
          </ParallaxEffect>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for My Expertise on Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm available for freelance work and open to discussing new
            opportunities.
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
                text="Looking for My Expertise on Your Project?"
                className="text-3xl md:text-5xl flex flex-wrap  justify-center gap-1 font-bold mb-6 text-primary-foreground"
              />
            </h2>
            <SlowFadeText
              once
              text="I'm available for freelance work and open to discussing new
            opportunities."
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
