import React, { useEffect } from "react";
import PortfolioCss from "./portfolio.module.css";
import data from "./port.json";
import M from "materialize-css";

export default function Portfolio() {
  useEffect(() => {
    const initializeMaterialbox = () => {
      const elems = document.querySelectorAll(".materialboxed");
      const options = {}; // Add any desired options here

      M.Materialbox.init(elems, options);
    };

    initializeMaterialbox();
  }, []);
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        (Click on the images to see the deployed application)
      </p>
      <div className={PortfolioCss.grid}>
        {data.map(({ name, image, content, link, github }) => (
          <div key={name} style={{ width: "100%" }}>
            <div
              className="card teal lighten-2"
              style={{ marginBottom: "100px", marginTop: "50px" }}
            >
              <div className="card-image">
                <a>
                  <img
                    className="materialboxed"
                    width="650"
                    src={process.env.PUBLIC_URL + image}
                    alt={name}
                  />
                </a>
                <h4>{name}</h4>
              </div>
              <div className="card-content">
                <p>{content}</p>
              </div>
              <div
                className="card-action"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <a
                  href={link}
                  className="cyan lighten-4 waves-effect waves-light btn blue-text text-darken-4"
                >
                  Application
                </a>
                <a
                  href={github}
                  className="cyan lighten-4 waves-effect waves-light btn blue-text text-darken-4"
                >
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
