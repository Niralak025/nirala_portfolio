import React from 'react';
import './index.css';
import { projectsContent } from '../../utils/globalConstant';

const Projects = ({ projectRef }) => {
  return (
    <div className="projects-main-container" ref={projectRef}>
      <h1 className="projects-title">{projectsContent.heading}</h1>
      <div className="projects-list">
        {projectsContent.projectsData.map((project, index) => (
          <div key={index} className={`project-item ${project.className}`}>
            <h2 className="project-name">{project.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
