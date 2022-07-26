import React from "react";

const Nav = () => {
  return (
    <nav className="top_nav">
      <ul className="top_nav">
        <li>
          <a className="nav_link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav_link" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="nav_link" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav_link" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="nav_link" href="#contact">
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
