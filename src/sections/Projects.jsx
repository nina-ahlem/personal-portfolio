import React from 'react'

const projects=[
  {
    title:"Car Price Predictor using AI",
    description:"A machine learning web application that predicts used car prices based on multiple factors including make, model, year, mileage, and condition. Built using Python and scikit-learn for the ML model, with a React frontend for seamless user interaction. The model was trained on a dataset of 10,000+ car listings, achieving 85% prediction accuracy",
    image:"/projects/car.png",
    tags:["html","css","Javascript","Python"],
    link:"#",
    github:"#https://github.com/ahlem-belbel/AI-ML-PROJECT"
  },
    {
    title:"MiniSoft Compiler",
    description:"A custom compiler built from scratch using Flex for lexical analysis and Bison for parsing. Implements key compilation phases including tokenization, syntax analysis, semantic analysis, and code generation. Supports variable declarations, arithmetic operations, control flow statements, and error handling with meaningful diagnostics",
    image:"/projects/compiler.jpg",
    tags:["html","css","Javascript","Python"],
    link:"#",
    github:"#https://github.com/ahlem-belbel/AI-ML-PROJECT"
  },
]


const Projects = () => {
  return (
  <section id="projects" className="py-32 relative overflow-hidden md:mx-20">
    {/**background glows */}
    <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
    <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'></div>
     <div className="container mx-auto px-6 relative z-10">
      
      {/** section header */}
      <div className='text-center mx-auto max-w-3xl mb-16'>
        <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
        <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground'>My Projects </h2>
        <p className='text-muted-foreground animate-fade-in animation-delay-200'>a selection of my recent work on Web development and Design </p>
      </div>
      {/** Projects Grid */}




      </div> 
     </section>
  )
}

export default Projects