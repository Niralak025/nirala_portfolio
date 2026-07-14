import React from 'react';
import './index.css';

const ExperienceCard = ({ role, company, duration, location, description, skills }) => {
    return (
        <div className="experience-card">
            <div className="experience-card-header">
                <div>
                    <h3 className="experience-role">{role}</h3>
                    <h4 className="experience-company">{company}</h4>
                </div>
                <div className="experience-meta">
                    <span className="experience-duration">{duration}</span>
                    <span className="experience-location">{location}</span>
                </div>
            </div>
            <div className="experience-card-body">
                <ul className="experience-description">
                    {description && description.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                    ))}
                </ul>
                {skills && skills.length > 0 && (
                    <div className="experience-skills">
                        {skills.map((skill, idx) => (
                            <span key={idx} className="experience-skill-badge">{skill}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;
