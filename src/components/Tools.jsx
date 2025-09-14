import React from "react";

const dummyTools = [
  { name: "Python", icon: "/assets/python.svg" },
  { name: "React", icon: "/assets/react.svg" },
  { name: "TensorFlow", icon: "/assets/tensorflow.svg" },
  { name: "GitHub", icon: "/assets/github.svg" }
];

export default function Tools() {
  return (
    <div className="cyberpunk-card cyberpunk-pop-in">
      <h2>Tools & Technologies</h2>
      <div className="tools-list">
        {dummyTools.map((tool, idx) => (
          <div className="tool" key={idx}>
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}