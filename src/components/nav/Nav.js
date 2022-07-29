import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="top_nav">
      <h1 className="brand">LW</h1>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger />
      </div>

      <nav className="nav-link">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </nav>

      <style jsx>{`

        @media screen and (max-width: 767px) {
          .nav-link {
            display: ${hamburgerOpen ? "block" : "none"};
            text-align: center;
          `}</style>
    </div>
  );
};

export default NavBar;
