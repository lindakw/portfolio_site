import "./App.css";

import profileImg from "./assets/images/profile2.jpg";

import Skills from "./components/sections/skills/Skills";
import Nav from "./components/nav/Nav";
import Projects from "./components/sections/projects/Projects";
import { SiGithub, SiGmail, SiLinkedin, SiMailchimp } from "react-icons/si";

function App() {
  return (
    <div className="main">
      <Nav />

      <section className="intro" id="intro">
        <div className="profileImg">
          <img
            src={profileImg}
            alt="Profile Image"
            style={{
              height: 260,
              width: 200,
              borderRadius: 100,
              border: 3,
            }}
          />
          <h1>Hi, hello, I'm Linda.</h1>
          <h2>Full Stack Software Engineer.</h2>
        </div>
      </section>

      <section className="about" id="about">
        <h3>About Me </h3>
        <p>
          Technology amazes me! I have been fascinated with coding and web
          development for many many years. I have a B.S. in Web Development and
          Design, graduated from Full Sail University in 2014. I am passionate
          about learning and I am always actively trying to learn something new.
          Currently, it is my mission to learn GOLang.
        </p>
        <p>
          Javascript was the first language I learned, aside from HTML/CSS. The
          first snippet of code I wrote was an automation for Photoshop. After I
          saw how much easier it made my work, I was hooked.
        </p>
        <p>
          Technology has the ability to improve our lives in so many ways. I
          want be a part of the tech revolution.
        </p>
      </section>

      <section className="skills" id="skills">
        <Skills />
      </section>

      <Projects />

      <section className="experience" id="experience">
        <h3>Work Experience</h3>
        <h4>Apprentice @AlphaWorks(Bitwise Industries)</h4>
        <p>React Native Team</p>
        <p>October 2021-Present</p>
        <ul>
          <li>
            Work with other engineers and designers to build full stack mobile
            apps using React Native
          </li>
          <li>Communicate with team lead and team members on a daily basis</li>
          <li>
            Contribute to the success of others by co-teaching courses for
            pre-apprentices and actively participating in the slack community
          </li>
        </ul>
      </section>

      <section className="contact" id="contact">
        <h3>Connect With Me</h3>
        <div className="connect-links">
          <a href="https://www.linkedin.com/in/linda-k-westphal-1aba9a1b5/">
            <SiLinkedin />
          </a>
          <a href="https://github.com/lindakw">
            <SiGithub />
          </a>
          <a href="mailto:lindakwestphal@gmail.com">
            <SiGmail />
          </a>
        </div>
      </section>
      <footer>
        <p>Designed & Built by Linda Westphal</p>
      </footer>
    </div>
  );
}

export default App;
