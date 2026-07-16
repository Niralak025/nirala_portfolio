import React from 'react';
import './index.css';
import { skillsContent } from '../../utils/globalConstant';
import { 
  FaReact, FaJs, FaJava, FaGithub, FaHtml5, FaCss3Alt, 
  FaNodeJs, FaGitlab, FaGitAlt, FaApple, FaTerminal, 
  FaBell, FaLink, FaInfinity 
} from 'react-icons/fa';
import { 
  SiRedux, SiTypescript, SiFirebase, SiGraphql, SiJenkins, 
  SiAndroidstudio, SiVisualstudiocode, SiPostman, SiStripe, 
  SiMaterialdesign 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Skills = ({ skillsRef }) => {
  const getSkillIcon = (iconKey) => {
    switch (iconKey) {
      case 'react-native':
        return <FaReact className="skill-icon-vector react-native-icon" />;
      case 'redux':
        return <SiRedux className="skill-icon-vector redux-icon" />;
      case 'javascript':
        return <FaJs className="skill-icon-vector js-icon" />;
      case 'java':
        return <FaJava className="skill-icon-vector java-icon" />;
      case 'github':
        return <FaGithub className="skill-icon-vector github-icon" />;
      case 'html':
        return <FaHtml5 className="skill-icon-vector html-icon" />;
      case 'css':
        return <FaCss3Alt className="skill-icon-vector css-icon" />;
      case 'typescript':
        return <SiTypescript className="skill-icon-vector typescript-icon" />;
      case 'nodejs':
        return <FaNodeJs className="skill-icon-vector nodejs-icon" />;
      case 'react':
        return <FaReact className="skill-icon-vector react-icon" />;
      case 'gitlab':
        return <FaGitlab className="skill-icon-vector gitlab-icon" />;
      case 'firebase':
        return <SiFirebase className="skill-icon-vector firebase-icon" />;
      case 'rest-api':
        return <TbApi className="skill-icon-vector api-icon" />;
      case 'graphql':
        return <SiGraphql className="skill-icon-vector graphql-icon" />;
      case 'cicd':
        return <FaInfinity className="skill-icon-vector cicd-icon" />;
      case 'jenkins':
        return <SiJenkins className="skill-icon-vector jenkins-icon" />;
      case 'push-notifications':
        return <FaBell className="skill-icon-vector push-notifications-icon" />;
      case 'state-management':
        return <SiRedux className="skill-icon-vector state-management-icon" />;
      case 'git':
        return <FaGitAlt className="skill-icon-vector git-icon" />;
      case 'android-studio':
        return <SiAndroidstudio className="skill-icon-vector android-studio-icon" />;
      case 'xcode':
        return <FaApple className="skill-icon-vector xcode-icon" />;
      case 'vscode':
        return <SiVisualstudiocode className="skill-icon-vector vscode-icon" />;
      case 'postman':
        return <SiPostman className="skill-icon-vector postman-icon" />;
      case 'stripe':
        return <SiStripe className="skill-icon-vector stripe-icon" />;
      case 'react-native-paper':
        return <SiMaterialdesign className="skill-icon-vector react-native-paper-icon" />;
      case 'deep-linking':
        return <FaLink className="skill-icon-vector deep-linking-icon" />;
      case 'react-native-cli':
        return <FaTerminal className="skill-icon-vector react-native-cli-icon" />;
      default:
        return <FaReact className="skill-icon-vector" />;
    }
  };

  return (
    <div className="skills-main-container" ref={skillsRef}>
      <h1 className="fs-1">{skillsContent.heading}</h1>
      <div className="skills-grid-layout">
        {skillsContent.skillsData.map((skill, index) => (
          <div key={index} className="skill-card-item">
            <div className="skill-card-top">
              <div className="skill-icon-wrapper">
                {getSkillIcon(skill.iconKey)}
              </div>
              <div className="skill-info-group">
                <h3 className="skill-card-name">{skill.name}</h3>
                <span className="skill-card-level">{skill.level}</span>
              </div>
            </div>
            <div className="skill-progress-container">
              <div className="skill-progress-header">
                <span className="progress-label">Proficiency</span>
                <span className="progress-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar-track">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;