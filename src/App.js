import "./App.css";
import { useEffect, useState } from "react";

import Skills from "./components/sections/Skills";
import NavBar from "./components/nav/Nav";
import Projects from "./components/sections/Projects";
import Intro from "./components/sections/Intro";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="main">
      <NavBar />
      <Intro />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      <footer>
        <p>Designed & Built by Linda Westphal</p>
      </footer>
    </div>
  );
}

export default App;
