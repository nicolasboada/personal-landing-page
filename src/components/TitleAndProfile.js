import React from "react";
import { ContactIcons } from "./ContactIcons";

const TitleAndProfile = ({ handleCLick }) => {
  return (
    <>
      <div className="mb112 title">
        <div className="titleLeft">
          <h1>Nicolas Boada</h1>
          <h3 className="title">Fullstack Software Developer</h3>
          <div className="titleBottom">
            <button className="titleButton" onClick={handleCLick}>
              Get in Touch
            </button>
            <ContactIcons className={"titleContactIcons"} />
          </div>
        </div>
        <div className="titleRight">
          <img
            src="https://avatars.githubusercontent.com/u/69942905?v=4"
            alt="profile"
          />
        </div>
      </div>

      <div className="mb56">
        <h2>
          <span id={"aboutme"}></span>About Me
        </h2>
        <p>
          Software developer based on Buenos Aires. I specialize in building web
          applications.
          <br /> Previously worked as Supply Chain Engineer in different
          industries.
          <br />I enjoy learning, solving problems and working on projects.
        </p>
      </div>

      <div className="mb56">
        <h2>
          <span id={"skills"}></span>Skills
        </h2>
        <ul>
          <li>
            <span>Frontend</span>
            <span>|</span>
            <span>
              JavaScript, React, Redux, Sass, Styled Components, MaterialUI.
            </span>
          </li>
          <li>
            <span>Backend</span>
            <span>|</span>
            <span>Node.js, Express.js, MongoDB.</span>
          </li>
          <li>
            <span>Data</span>
            <span>|</span>
            <span>Python, SQL, NumPy, Pandas, Scikit-learn, Keras.</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TitleAndProfile;
