import React from "react";
import { DiGithubBadge } from "react-icons/di";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <i className="Icons">
              <DiGithubBadge />
            </i>
          </div>
          <div className="col l6 s12">
            <i className="Icons">
              <DiGithubBadge />
            </i>
            <div className="col l6 s12">
              <i className="Icons">
                <DiGithubBadge />
              </i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
