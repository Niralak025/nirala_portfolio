import React from 'react';
import './index.css';

const Skills = ({ skillsRef }) => {
  const skillsData = [
    {
      name: 'React Native',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
    {
      name: 'JavaScript',
      logo: 'https://pngset.com/images/javascript-logo-number-symbol-text-label-transparent-png-560960.png',
    },
    {
      name: 'Java',
      logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png',
    },
    {
      name: 'GitHub',
      logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    },
    {
      name: 'HTML',
      logo: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-html-file-document-icon-png-image_4187497.jpg',
    },
    {
      name: 'CSS',
      logo: 'https://logospng.org/download/css-3/logo-css-3-2048.png',
    },
  ];

  return (
    <div className="skills-main-container" ref={skillsRef}>
      <h1 className="fs-1">Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
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