import Hero from "@/components/sections/Hero";
import ParallaxEffect from "@/components/ParallaxEffect";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import SlowFadeText from "@/components/SlowFadeText";
import CenterTextAnimation from "@/components/CenterTextAnimation";
import AnimatedAny from "@/components/AnimatedAny";
export default function Home() {
  // Only display featured projects on the home page
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-accent/5 max-w-7xl mx-auto ">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-12 overflow-clip">
            <ParallaxEffect dis={50} direction="leftonly1">
              <h2
                data-interactive="true"
                className="text-3xl md:text-4xl font-bold"
              >
                Featured Projects
              </h2>
            </ParallaxEffect>

            <ParallaxEffect
              direction="rightonly1" // Default direction for large screens
              className="sm:block hidden" // Hide on small screens
              data-interactive="true"
            >
              <Link
                href="/projects"
                className="flex items-center text-primary hover:underline"
              >
                View All <ChevronRight data-interactive="true" size={16} />
              </Link>
            </ParallaxEffect>

            <Link
              href="/projects"
              className=" items-center sm:hidden flex flex-row text-primary hover:underline"
            >
              <AnimatedAny
                className="flex items-center"
                delay={0.5}
                direction="right"
                staggerDelay={0.2}
              >
                <div>View All</div>

                <ChevronRight size={16} />
              </AnimatedAny>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className=" flex mt-10 w-fit  text-center justify-center items-center text-primary hover:underline"
            >
              <AnimatedAny
                className="flex items-center"
                delay={0.5}
                direction="right"
                staggerDelay={0.2}
                value={50}
              >
                <p className="w-fit" data-interactive="true">
                  View All
                </p>

                <ChevronRight data-interactive="true" size={16} />
              </AnimatedAny>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 max-w-7xl mx-auto ">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ParallaxEffect direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <AnimatedText cusy direction="down" text="About me" />
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm a passionate Full Stack Developer with expertise in
                  building interactive and innovative web applications. Using
                  modern technologies, I create seamless user experiences that
                  are both functional and aesthetically pleasing.
                </p>
                <AnimatedCard
                  direction="down"
                  duration={1}
                  value={30}
                  data-interactive="true"
                >
                  <Link
                    href="/about"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full inline-flex items-center hover:bg-primary/90 transition-colors"
                  >
                    <AnimatedText
                      cusy
                      once
                      delay={0.4}
                      direction="up"
                      text="More About Me"
                    />
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </AnimatedCard>
              </ParallaxEffect>
            </div>

            {/* <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            {/* <ParallaxEffect direction="rightonly1" speed={0.4}>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <p className="text-muted-foreground">
                    Master's in Computer Science from Stanford University,
                    specialized in AI and Machine Learning.
                  </p>
                </div>
              </ParallaxEffect> */}
            <AnimatedCard
              hoverEffect={false}
              value={0}
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatedCard className=" " y={-10} value={70}>
                <div className="bg-card border border-border p-6 rounded-lg ">
                  <h3
                    data-interactive="true"
                    className="text-xl font-semibold mb-3"
                  >
                    Education
                  </h3>
                  <p className="text-muted-foreground">
                    Bachelor of Technology (B.Tech) in Computer Science and
                    Business Systems from Rajalakshmi Engineering College.
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard className="" y={-10} value={70}>
                <div className="bg-card border border-border p-6 rounded-lg ">
                  <h3
                    data-interactive="true"
                    className="text-xl font-semibold mb-3"
                  >
                    Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Built a strong foundation in full-stack development through
                    hands-on experience in numerous real-world projects,
                    hackathons, Tech initiatives.
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard className="" y={-10} value={70}>
                <div className="bg-card border border-border p-6 rounded-lg ">
                  <h3
                    data-interactive="true"
                    className="text-xl font-semibold mb-3"
                  >
                    Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    React, Next.js, Node.js, TypeScript, JavaScript, Java, SQL ,
                    NOSQl and modern web development technologies.
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard className=" rounded-lg" y={-10} value={70}>
                <div className="bg-card border border-border p-6 rounded-lg ">
                  <h3
                    data-interactive="true"
                    className="text-xl font-semibold mb-3"
                  >
                    Interests
                  </h3>
                  <p className="text-muted-foreground">
                    Bringing ideas to life through open-source collaboration,
                    thoughtful UX design, and a passion for exploring the latest
                    in tech.
                  </p>
                </div>
              </AnimatedCard>
            </AnimatedCard>

            {/* <ParallaxEffect speed={0.4} direction="rightonly1">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Experience</h3>
                  <p className="text-muted-foreground">
                    5+ years of experience working with leading tech companies
                    like Google and Microsoft.
                  </p>
                </div>
              </ParallaxEffect> */}

            {/* <ParallaxEffect speed={0.3} direction="rightonly1">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                  <p className="text-muted-foreground">
                    React, Next.js, Node.js, TypeScript, JavaScript, and modern
                    web development technologies.
                  </p>
                </div>
              </ParallaxEffect> */}

            {/* <ParallaxEffect speed={0.3} direction="rightonly1">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Interests</h3>
                  <p className="text-muted-foreground">
                    Open-source contributions, designing user experiences, and
                    exploring emerging technologies.
                  </p>
                </div>
              </ParallaxEffect> */}
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container px-4 mx-auto text-center">
          <ParallaxEffect>
            <h2>
              <AnimatedText
                cusy
                direction="down"
                text=" Let's Work Together"
                className="text-3xl md:text-5xl flex flex-wrap  justify-center gap-1 font-bold mb-6 text-primary-foreground"
              />
            </h2>
            <SlowFadeText
              once
              text=" Have a project in mind or looking to hire? I'm currently available
              for freelance projects and full-time positions."
              className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
            />

            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-full inline-flex items-center font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Get in Touch
            </Link>
          </ParallaxEffect>
        </div>
      </section>
    </div>
  );
}
