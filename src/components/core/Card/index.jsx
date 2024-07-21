import React from 'react';
import './index.css';

const EducationCardCell = ({ imageSrc, title, subTitle, description }) => {
    return (
        <div className="education-card">
            <img src={imageSrc} alt={title} className="education-card-img" />
            <div className="education-card-content">
                <h2 className="education-card-title">{title}</h2>
                <h4 className="education-card-title">{subTitle}</h4>
                <p className="education-card-description">{description}</p>
            </div>
        </div>
    );
};

export default EducationCardCell;
