import React from "react";

function Nav() {
  return (
    <nav>
      <div class="nav-wrapper cyan lighten-4">
        <a
          href="#!"
          class="navHeader brand-logo center blue-text text-blue darken-2"
        >
          Jeremy's Portfolio
        </a>
        <ul class="left hide-on-med-and-down">
          <li class="active">
            <a href="sass.html" class="blue-text text--blue darken-2 bold">
              About Me
            </a>
          </li>
          <li>
            <a href="sass.html" class="blue-text text--blue darken-2 bold">
              Portfolio
            </a>
          </li>
          <li>
            <a href="badges.html" class="blue-text text--blue darken-2 bold">
              Contact
            </a>
          </li>
          <li>
            <a
              href="collapsible.html"
              class="blue-text text--blue darken-2 bold"
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
