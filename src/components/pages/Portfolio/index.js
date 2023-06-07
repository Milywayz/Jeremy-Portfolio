import React from "react";
import PortfolioCss from "./portfolio.module.css";
import data from "./port.json";

export default function Portfolio() {
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        (Click on the images to see the deployed application)
      </p>
      <div className="row" style={{ textAlign: "center" }}>
        {data.map(({ name, image, content, link, github }) => (
          <div className="col s12 m6">
            <div
              className="card teal lighten-2"
              style={{ marginBottom: "100px" }}
            >
              <div className="card-image">
                <a href={link}>
                  <img src={process.env.PUBLIC_URL + image} alt={name} />
                </a>
                <h4>{name}</h4>
              </div>
              <div className="card-content">
                <p>{content}</p>
              </div>
              <div className="card-action">
                <a href={github} className="blue-text text-darken-2">
                  Github Repo Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
