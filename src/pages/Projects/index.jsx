import React, { useState, useEffect } from 'react';
import './index.css';
import { projectsContent, experienceData } from '../../utils/globalConstant';
import ExperienceCard from '../../components/core/ExperienceCard';
import { FaComments, FaBullhorn, FaCoins, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ projectRef }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getProjectIcon = (category) => {
    switch (category) {
      case 'chat':
        return <FaComments className="project-icon-svg chat-icon" />;
      case 'analytics':
        return <FaBullhorn className="project-icon-svg analytics-icon" />;
      case 'finance':
        return <FaCoins className="project-icon-svg finance-icon" />;
      default:
        return <FaComments className="project-icon-svg" />;
    }
  };

  return (
    <div className="projects-main-container" ref={projectRef}>
      <h1 className="projects-title">{projectsContent.heading}</h1>
      
      <div className="projects-section-container">
        <div className="section-divider">
          <h2 className="sub-section-title">Projects</h2>
          <div className="projects-grid-layout">
            {projectsContent.projectsData.map((project, index) => (
              <div
                key={index}
                className={`project-card-item ${project.className}`}
              >
                <div className="project-card-header">
                  <div className="project-icon-container">
                    {getProjectIcon(project.category)}
                  </div>
                  <div className="project-card-title-group">
                    <h3 className="project-card-name">{project.name}</h3>
                    <span className="project-card-role">{project.role}</span>
                  </div>
                </div>

                <p className="project-card-short-desc">{project.shortDesc}</p>

                <div className="project-card-tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="project-tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-card-actions">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn-details"
                  >
                    View Details
                  </button>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <FaExternalLinkAlt size={12} /> Visit Link
                    </a>
                  )}
                </div>
              </div>
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

      {/* Modern Glassmorphic Modal for Project Details */}
      {selectedProject && (
        <div 
          className="modal-backdrop active"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="modal-content-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <div className="modal-header">
              <div className="modal-title-wrapper">
                <div className="modal-project-icon">
                  {getProjectIcon(selectedProject.category)}
                </div>
                <div>
                  <h2 className="modal-project-name">{selectedProject.name}</h2>
                  <p className="modal-project-subtitle">{selectedProject.role}</p>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4 className="modal-section-title">Overview</h4>
                <p className="modal-overview-text">{selectedProject.shortDesc}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Key Contributions & Features</h4>
                <ul className="modal-bullet-list">
                  {selectedProject.detailedDesc.map((bullet, idx) => (
                    <li key={idx} className="modal-bullet-item">{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Technologies Used</h4>
                <div className="modal-tech-stack">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="modal-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn primary-btn"
                >
                  <FaExternalLinkAlt style={{ marginRight: '8px' }} /> Visit Live Project
                </a>
              )}
              <button 
                className="modal-action-btn secondary-btn"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

