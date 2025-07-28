import React from "react";
import Index from "./Index";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-gray-900">
      <section id="home">
        <Index />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
