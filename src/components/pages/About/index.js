import React from "react";
import AboutCss from "./about.module.css";
import profilePic from "../../../Images/profileImage.png";

export default function About() {
  return (
    <div className={AboutCss.font}>
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <h4 className="cyan-text">About Me</h4>
            <img src={profilePic} />
            <p>
              Hello there, my name is Jeremy Jenkins and I am a student at SMU
              Coding Bootcamp. My hobbies are ice skating, playing hockey, video
              games, and more recently knee boarding.
            </p>
            <br></br>
            <p>
              I am currently working towards becoming a Full-Stack Developer
              from SMU Web Development Bootcamp. As a problem solver at heart, I
              thrive on tackling complex challenges and finding innovative
              solutions. Whether it's debugging code, optimizing user
              experiences, or designing efficient systems, I enjoy the process
              of dissecting problems and piecing together creative solutions.
              With a passion for continuous learning and a strong foundation in
              web development, I am committed to honing my skills and staying
              up-to-date with the latest technologies. My journey as a
              Full-Stack Developer is not just about building applications; it's
              about using my problem-solving skills to make a positive impact on
              the digital world and create meaningful experiences for users.
            </p>
          </div>
          <div className="card-action"></div>
        </div>
      </div>
    </div>
  );
}
