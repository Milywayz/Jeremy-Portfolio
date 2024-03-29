import React from "react";

// Resume HTML
export default function Resume() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3 style={{ fontSize: 35 }}>Download My Resume</h3>
      <a
        href={process.env.PUBLIC_URL + "/Jeremy-Resume.pdf"}
        download
        className="waves-light btn pulse"
        type="button"
      >
        Resume
      </a>
      <h3 style={{ fontSize: 35 }}>Languages:</h3>
      <ul>
        <li>JavaScript</li>
      </ul>
      <h3 style={{ fontSize: 35 }}>Frontend:</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Materialize</li>
        <li>React</li>
        <li>jQuery</li>
      </ul>
      <h3 style={{ fontSize: 35 }}>Backend:</h3>
      <ul className="proficiency-wrapper" style={{ marginBottom: "100px" }}>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>Sequelize</li>
        <li>Mongoose</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
