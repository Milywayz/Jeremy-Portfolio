import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper cyan lighten-4">
        <a
          href="#!"
          className="navHeader brand-logo center blue-text text-blue darken-2"
        >
          Jeremy's Portfolio
        </a>
        <ul className="left hide-on-med-and-down">
          <li className="active">
            <a href="sass.html" className="blue-text text--blue darken-2 bold">
              About Me
            </a>
          </li>
          <li>
            <a href="sass.html" className="blue-text text--blue darken-2 bold">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="badges.html"
              className="blue-text text--blue darken-2 bold"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="collapsible.html"
              className="blue-text text--blue darken-2 bold"
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
