import React, { useEffect, useState } from "react";
import "./index.css";
import niralaImage from "../../assets/images/nirala_new.jpg";
import { introductionContent } from "../../utils/globalConstant";

const Introduction = ({ introRef, onHireMeClick }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % introductionContent.roles.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleResumeClick = () => {
    if (introductionContent.resumeLink) {
      window.open(introductionContent.resumeLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="main_container fade-in" ref={introRef}>
      <div id="menuIconStyle" />

      <div className="main_container_2">
        <div className="intro-text-wrapper">
          <div className="textSection slide-up">
            <h1 className="headerTextStyle">{introductionContent.greeting}</h1>
            <h1 className="headerTextStyle">{introductionContent.authorName}</h1>

            {/* Rotating Job Titles */}
            <p key={index} className="rotatingText smooth-rotate">
              {introductionContent.roles[index]}
            </p>

            {/* Impactful Description */}
            <p className="introDescription">{introductionContent.description}</p>
          </div>

          <div className="button-container">
            <button onClick={handleResumeClick}>{introductionContent.resumeBtnLabel}</button>
            <button onClick={onHireMeClick}>{introductionContent.hireMeBtnLabel}</button>
          </div>
        </div>
        <img

          src={niralaImage}
          alt={introductionContent.profileImageAlt}
          className="profile-image float-animation"
          width="320"
          height="400"
          style={{
            borderRadius: 30,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "white",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;
