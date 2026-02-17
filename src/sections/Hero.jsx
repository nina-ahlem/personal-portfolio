import React from "react";
import Button from "@/components/Button";
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";

const skills = [
  "React",
  "TailwindCSS",
  "JavaScript",
  "Figma",
  "Git",
  "GithubActions",
  "Node.js",
  "MongoDB",
   "React",
  "TailwindCSS",
  "JavaScript",
  "Figma",
  "Git",
  "GithubActions",
  "Node.js",
  "MongoDB",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 ">
        <img
          src="/hero13.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* blue dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#5bc5fa",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/*Content*/}
      <div className="container mx-auto px-10 md:px-30 pt-30 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left side*/}
          <div className="space-y-8">
            {/** badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineering Student - UI/UX Designer
              </span>
            </div>
            {/** Headline */}
            <div className="space-y-4 ">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Web<span className="text-primary glow-text"> + </span> Design
                <br />
                is<span className="text-primary glow-text"> Powerful. </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm Ahlem Tebbakh, a software engineering student at USTHB. I
                blend web development with UI/UX design to create beautiful,
                functional digital experiences.
              </p>
            </div>
            {/** buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            {/** Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "https://www.instagram.com/ah__llem/" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/*Right side*/}
          <div className="relative animate-fade-in animation-delay-300 flex items-center justify-center lg:justify-end">
            {/*Profile img*/}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/me6.jpeg"
                  alt="Ahlem Tebbakh"
                  className="w-[25rem] h-[30rem] object-cover rounded-2xl"
                />
                {/*floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for internship
                    </span>
                  </div>
                </div>
                {/*stats badge*/}
                <div className="absolute glass rounded-xl px-4 py-2 -top-4 -left-4 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">4th</div>
                  <div className="text-xs text-muted-foreground">
                    year Engineering student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;