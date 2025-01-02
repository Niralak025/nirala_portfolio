import React from 'react';
import './index.css';

const Projects = ({ projectRef }) => {
  const projectData = [
    { name: 'WeChat', className: 'inner-container' },
    { name: 'Advertisement Management', className: 'inner-container-2' },
    { name: 'DemoApp', className: 'inner-container-3' },
  ];

  return (
    <div className="projects-main-container" ref={projectRef}>
      <h1 className="projects-title">Projects and Experience</h1>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className={`project-item ${project.className}`}>
            <h2 className="project-name">{project.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
