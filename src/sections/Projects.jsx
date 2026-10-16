import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Car Price Predictor using AI",
    description:
      "A machine learning web application that predicts used car prices based on multiple factors including make, model, year, mileage, and condition. Built using Python and scikit-learn for the ML model, with a React frontend for seamless user interaction. The model was trained on a dataset of 10,000+ car listings, achieving 85% prediction accuracy",
    image: "/Projects/car.png",
    tags: ["html", "css", "Javascript", "Python"],
    link: "#",
    github: "#https://github.com/ahlem-belbel/AI-ML-PROJECT",
  },
  {
    title: "MiniSoft Compiler",
    description:
      "A custom compiler built from scratch using Flex for lexical analysis and Bison for parsing. Implements key compilation phases including tokenization, syntax analysis, semantic analysis, and code generation. Supports variable declarations, arithmetic operations, control flow statements, and error handling with meaningful diagnostics",
    image: "/Projects/Compiler.jpg",
    tags: ["flex", "bison", "C"],
    link: "#",
    github: "#https://github.com/ahlem-belbel/AI-ML-PROJECT",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden md:mx-20 ">
      {/**background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/** section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            My Projects{" "}
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            a selection of my recent work on Web development and Design{" "}
          </p>
        </div>
        {/** Projects Grid */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in  md:row-span-1 "
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/** image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/** overlay icons links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity-300 ">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all "
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/** Content*/}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors ">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary  group-hover:translate-x-1 group-hover:translate-y-1 transition-all " />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagindex) => (
                    <span
                      key={tagindex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton> View all projects</AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
