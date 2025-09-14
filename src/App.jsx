import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

export default function App() {
  return (
    <div className="cyberpunk-bg">
      <header className="cyberpunk-header">
        <h1>Raisa Anvar Raseena</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#tools">Tools</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="tools">
          <Tools />
        </section>
      </main>
      <footer className="cyberpunk-footer">
        <p>© {new Date().getFullYear()} Raisa Anvar Raseena</p>
      </footer>
    </div>
  );
}