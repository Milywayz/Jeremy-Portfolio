import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";

function Footer() {
  return (
    <footer className="page-footer icons cyan lighten-3">
      <div className="col l6 s12">
        <a href="https://github.com/Milywayz">
          <i className="icons">
            <DiGithubBadge />
          </i>
        </a>
      </div>
      <div className="col l6 s12">
        <a href="https://www.linkedin.com/in/jeremy-jenkins-360a2b172/">
          <i className="icons">
            <TbBrandLinkedin />
          </i>
        </a>
      </div>
      <div className="col l6 s12">
        <a href="https://twitter.com/Mily_Ways">
          <i className="icons">
            <TbBrandTwitter />
          </i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
