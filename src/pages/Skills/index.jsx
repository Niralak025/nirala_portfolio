import React from 'react';
import './index.css';
import { skillsContent } from '../../utils/globalConstant';

const Skills = ({ skillsRef }) => {
  return (
    <div className="skills-main-container" ref={skillsRef}>
      <h1 className="fs-1">{skillsContent.heading}</h1>
      <div className="skills-grid">
        {skillsContent.skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <img
              src={skill.logo}
              width={50}
              height={40}
              alt={`${skill.name} Logo`}
              className="skill-logo"
            />
            <h2 className="skill-name">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;