import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Gajjela Keerthi</h1>
        <p>123 Main Street, Seattle, USA, 98122 | (123) 456-7890 | studentname@email.com</p>
      </header>
      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>Siddhartha College, Hyderabad | May 2023</p>
          <p>GPA: 3.9/4.0</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;

