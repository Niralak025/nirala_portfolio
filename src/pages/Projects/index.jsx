import React from 'react';
import './index.css';
import { projectsContent, experienceData } from '../../utils/globalConstant';
import ExperienceCard from '../../components/core/ExperienceCard';

const Projects = ({ projectRef }) => {
  return (
    <div className="projects-main-container" ref={projectRef}>
      <h1 className="projects-title">{projectsContent.heading}</h1>
      
      <div className="projects-section-container">
        <div className="section-divider">
          <h2 className="sub-section-title">Projects</h2>
          <div className="projects-list">
            {projectsContent.projectsData.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-item ${project.className}`}
              >
                <h2 className="project-name">{project.name}</h2>
              </a>
            ))}
          </div>
        </div>

        <div className="section-divider">
          <h2 className="sub-section-title">Work Experience</h2>
          <div className="experience-list">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={index}
                role={exp.role}
                company={exp.company}
                duration={exp.duration}
                location={exp.location}
                description={exp.description}
                skills={exp.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

