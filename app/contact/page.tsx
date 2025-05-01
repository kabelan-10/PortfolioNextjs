import AnimatedText from "@/components/AnimatedText";
import ParallaxEffect from "@/components/ParallaxEffect";
import ContactForm from "@/components/ui/ContactForm";
import AnimatedAny from "@/components/AnimatedAny";
import Link from "next/link";
import SlowFadeText from "@/components/SlowFadeText";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { MailIcon } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

export default function ContactPage() {
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
              text="Get  In Touch"
              className="text-4xl w-fit md:text-6xl font-bold mb-6"
            />

            <AnimatedText
              cusy
              once={true}
              text="Have a question or want to work together? I'd love to hear from you."
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto ">
        <div className="container px-4 mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-5 space-y-10 gap-12 ">
            {/* Contact Form */}
            <div className="lg:col-span-3 ">
              <ParallaxEffect className="transition-all p-6  rounded-3xl duration-1000 shadow-bottom-right hover:-translate-y-10 hover:shadow-bottom-right-0.5">
                <h2 className="text-3xl font-bold mb-6">
                  <AnimatedText cusy direction="up" text="Send Me a Message" />
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below, and I'll get back to you as soon as
                  possible.
                </p>

                <ContactForm />
              </ParallaxEffect>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 ">
              <ParallaxEffect direction="down" className="overflow-hidden">
                <div className="flex flex-col items-center lg:items-start">
                  <h2 className="text-3xl font-bold mb-6">
                    <AnimatedText
                      cusy
                      text="Contact Information"
                      direction="down"
                    />
                  </h2>
                  <p className="text-muted-foreground mb-8 text-center lg:text-left ">
                    Feel free to reach out through any of the following
                    channels. I'm always open to discussing new projects,
                    opportunities, or just having a chat.
                  </p>
                  <div className="space-y-6 mb-10">
                    <AnimatedAny
                      direction="right"
                      staggerDelay={0.3}
                      value={30}
                      className="space-y-6"
                    >
                      <div className="flex items-start">
                        <div className="p-3 bg-primary/10 rounded-full mr-4">
                          <Mail size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Email</h3>
                          <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {personalInfo.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-3 bg-primary/10 rounded-full mr-4">
                          <Phone size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Phone</h3>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-3 bg-primary/10 rounded-full mr-4">
                          <MapPin size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Location</h3>
                          <p className="text-muted-foreground">
                            {personalInfo.location}
                          </p>
                        </div>
                      </div>
                    </AnimatedAny>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-xl font-semibold mb-4">
                    <AnimatedText
                      cusy
                      text="Connect With Me"
                      className="p-2"
                      direction="right"
                    />
                  </h3>
                  <div data-interative="true" className="flex space-x-4">
                    <a
                      href={
                        socialLinks.find((s) => s.platform === "GitHub")?.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-full hover:bg-accent/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github data-interative="true" size={20} />
                    </a>

                    <a
                      href={
                        socialLinks.find((s) => s.platform === "LinkedIn")?.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-full hover:bg-accent/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin data-interative="true" size={20} />
                    </a>
                    <a
                      href={`mailto:${
                        socialLinks.find((s) => s.platform === "Gmail")?.url
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-full hover:bg-accent/10 transition-colors"
                      aria-label="Email"
                    >
                      <MailIcon data-interactive="true" size={20} />
                    </a>

                    {/* <a
                      href={
                        socialLinks.find((s) => s.platform === "Twitter")?.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-full hover:bg-accent/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter data-interative="true" size={20} />
                    </a>

                    <a
                      href={
                        socialLinks.find((s) => s.platform === "Instagram")?.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-full hover:bg-accent/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram data-interative="true" size={20} />
                    </a> */}
                  </div>
                </div>
              </ParallaxEffect>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-accent/5 max-w-7xl mx-auto ">
        <div className="container px-4 mx-auto flex flex-col justify-center items-center">
          <div className="text-center mb-12 ">
            <h2 className="text-3xl font-bold mb-4">
              <AnimatedText
                cusy
                text=" Frequently Asked Questions"
                direction="up"
              />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are answers to some common questions about my services and
              work process.
            </p>
          </div>

          <div className="max-w-3xl space-y-8 overflow-hidden p-4">
            {" "}
            <AnimatedAny>
              <ParallaxEffect direction="up" className="overflow-hidden ">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    What services do you offer?
                  </h3>
                  <p className="text-muted-foreground">
                    I specialize in full-stack web development, responsive
                    design, UI/UX design, and application development. Whether
                    you need a complete website, a specific feature, or
                    consultation, I can help bring your digital ideas to life.
                  </p>
                </div>
              </ParallaxEffect>{" "}
            </AnimatedAny>
            <AnimatedAny>
              <ParallaxEffect direction="up" className="overflow-hidden">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    What is your typical project process?
                  </h3>
                  <p className="text-muted-foreground">
                    My process typically includes initial consultation,
                    requirement gathering, design mockups, development, testing,
                    and deployment. I emphasize clear communication throughout
                    to ensure the final product aligns perfectly with your
                    vision.
                  </p>
                </div>
              </ParallaxEffect>{" "}
            </AnimatedAny>
            <AnimatedAny>
              <ParallaxEffect direction="up" className="overflow-hidden">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    How long does it take to complete a project?
                  </h3>
                  <p className="text-muted-foreground">
                    Project timelines vary based on complexity and scope. A
                    simple website might take 2-4 weeks, while more complex
                    applications can take 2-3 months. I'll provide a detailed
                    timeline during our initial consultation.
                  </p>
                </div>
              </ParallaxEffect>{" "}
            </AnimatedAny>
            {/* <AnimatedAny>
              <ParallaxEffect direction="up" className="overflow-hidden">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Do you offer maintenance services?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, I offer ongoing maintenance and support services to
                    keep your website or application running smoothly. This
                    includes updates, security patches, performance
                    optimization, and feature additions as needed.
                  </p>
                </div>
              </ParallaxEffect>
            </AnimatedAny> */}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary">
        <div className="container px-4 mx-auto flex justify-center flex-col items-center text-center">
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
            <ScrollToTop text="Contact Me"></ScrollToTop>
            {/* <Link
              href="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-full inline-flex items-center font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Contact Me
            </Link> */}
          </ParallaxEffect>
        </div>
      </section>
    </div>
  );
}
