import React from "react";

const dummyProjects = [
  {
    title: "Encode Tonk",
    description: "A fun project to encode and decode messages using custom algorithms.",
    link: "#",
    img: "/assets/project1.png"
  },
  {
    title: "Protein Expression Classification",
    description: "Classified mice based on protein expression levels using ML techniques.",
    link: "#",
    img: "/assets/project2.png"
  },
  {
    title: "Prototype SEPP",
    description: "A prototype for SEPP system built for collaborative research.",
    link: "#",
    img: "/assets/project3.png"
  }
];

export default function Projects() {
  return (
    <div className="cyberpunk-card cyberpunk-slide-in">
      <h2>Projects</h2>
      <div className="project-list">
        {dummyProjects.map((project, idx) => (
          <div className="project cyberpunk-glow" key={idx}>
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="cyberpunk-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}