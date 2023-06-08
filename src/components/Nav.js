import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function Nav({ currentPage, handlePageChange }) {
  useEffect(() => {
    // Initialize Materialize mobile menu
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);

  return (
    <nav>
      <div className="nav-wrapper cyan lighten-4">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={
            currentPage === "About"
              ? "nav-link right active navHeader center blue-text text-blue darken-2"
              : "nav-link right navHeader center blue-text text-blue darken-2"
          }
        >
          Jeremy's Portfolio
        </a>
        <ul className="left hide-on-med-and-down">
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "nav-link active indigo-text text--blue darken-2 bold"
                  : "nav-link blue-text text-blue lighten-1 bold"
              }
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active indigo-text text--blue darken-2 bold"
                  : "nav-link blue-text text-blue lighten-1 bold"
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active indigo-text text--blue darken-2 bold"
                  : "nav-link blue-text text-blue lighten-1 bold"
              }
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-link active indigo-text text--blue darken-2 bold"
                  : "nav-link blue-text text-blue lighten-1 bold"
              }
            >
              Resume
            </a>
          </li>
        </ul>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About"
                ? "nav-link active indigo-text text--blue darken-2 bold"
                : "nav-link blue-text text-blue lighten-1 bold"
            }
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio"
                ? "nav-link active indigo-text text--blue darken-2 bold"
                : "nav-link blue-text text-blue lighten-1 bold"
            }
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact"
                ? "nav-link active indigo-text text--blue darken-2 bold"
                : "nav-link blue-text text-blue lighten-1 bold"
            }
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume"
                ? "nav-link active indigo-text text--blue darken-2 bold"
                : "nav-link blue-text text-blue lighten-1 bold"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
