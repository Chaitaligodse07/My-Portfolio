import React from 'react';
// import './Skills.css';

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python", "SQL"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;
