import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <div className="nav-wrapper cyan lighten-4">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          // className="navHeader brand-logo center blue-text text-blue darken-2"
        >
          Jeremy's Portfolio
        </a>
        <ul className="left hide-on-med-and-down">
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              //  className="blue-text text--blue darken-2 bold"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
              //  className="blue-text text--blue darken-2 bold"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              // className="blue-text text--blue darken-2 bold"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              // className="blue-text text--blue darken-2 bold"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
