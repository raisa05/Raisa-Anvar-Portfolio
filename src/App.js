import React from "react";
import "./App.css";

function App() {
  return (
    <div className="cyberpunk">
      <header>
        <h1>Raisa Anvar Portfolio</h1>
        <p>Cyberpunk Developer & Creator</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hi, I'm Raisa Anvar, passionate about building futuristic web experiences.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>Project 1: Description</li>
            <li>Project 2: Description</li>
            <li>Project 3: Description</li>
          </ul>
        </section>
        <section>
          <h2>Tools</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>GitHub Pages</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;