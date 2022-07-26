import "./App.css";

import Skills from "./components/sections/Skills";
import Nav from "./components/nav/Nav";
import Projects from "./components/sections/Projects";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="main">
      <Nav />
      <Intro />
      <About />
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
