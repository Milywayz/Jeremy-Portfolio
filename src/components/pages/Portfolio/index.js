import React from "react";
import PortfolioCss from "./portfolio.module.css";
import StarWars from "../../../Images/starWars.png";

export default function Portfolio() {
  return (
    <div className={PortfolioCss.grid}>
      <div className="row">
        <div>
          <div className="card">
            <div className="card-image">
              <img src={StarWars} />
              <span className="card-title">Star Wars Generator</span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
