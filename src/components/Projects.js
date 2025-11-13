import React from 'react';
// import './Projects.css';

function Projects() {
  const projects = [
    { name: "Portfolio Website", description: "Personal portfolio using React" },
    { name: "Wheather App using React & Js", description: "Developed a Weather Application using React.js and JavaScript, integrating real-time weather data to provide users with current weather conditions, forecasts, and additional meteorological details." },
    { name: "E-commerce using HTML, CSS, Bootstrap, SQL, Python & Django", description: "An e-commerce platform for purchasing our products featuring product browsing, cart management, payment integrations with Rozarpay, admin panel operations, user authentication, sorting and filtering functionalities." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
