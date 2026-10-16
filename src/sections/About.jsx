import { Lightbulb, Code2, Users, Target } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "maintainable, scalable code that follows best practices and industry standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "maintainable, scalable code that follows best practices and industry standards.",
  },
  {
    icon: Target,
    title: "User-Centered Design",
    description:
      "Creating intuitive interfaces that prioritize user experience and accessibility.",
  }, 
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with teams to bring ideas to life.",
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden md:mx-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-4xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-white">
              Why do some websites feel{" "}
              <span className="text-secondary-foreground font-serif font-normal italic">
                {" "}
                effortless{" "}
              </span>{" "}
              while others don't?
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                That curiosity led me to explore both design and development. My
                studies in software engineering at USTHB gave me the technical
                foundation I needed from algorithms to system design while my
                passion for UI/UX taught me the art of creating experiences.
              </p>
            
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                Now, I create web experiences that don't just look good they
                work flawlessly, load fast, and put users first.
              </p>
            </div>
          </div>
          {/** right column -highligts */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item,index)=>(
              <div key={index} className="glass p-6 rounded-2xl animate-fade-in" style={{
                animationDelay:`${(index + 1) * 100}ms`
              }}>  
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
        
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
