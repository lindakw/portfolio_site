import "./App.css";

import profileImg from "./assets/images/profile2.jpg";
import newsWeather_app from "./assets/images/news-weather_app.png";
import doozit_app from "./assets/images/doozit_app.jpg";
import birlog_app from "./assets/images/birlog_login.png";
import Skills from "./components/sections/skills/Skills";
import Nav from "./components/nav/Nav";
import { SiLinkedin } from "react-icons/si";

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
        <p></p>
      </section>

      <section className="skills" id="skills">
        <Skills />
      </section>

      <section className="projects" id="projects">
        <h3>Projects</h3>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block" src={newsWeather_app} alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Full Stack News-Weather App</h5>
                <p></p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block" src={doozit_app} alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Doozit-Gamified To Do App</h5>
                <p></p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block" src={birlog_app} alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Birlog-Full Stack Blog App</h5>
                <p></p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="experience" id="experience">
        <h3>Work Experience</h3>
        <h4>Apprentice @AlphaWorks(Bitwise Industries)</h4>
        <p>React Native Team</p>
        <p>October 2021-Present</p>
        <ul>
          <li>
            Work with other engineers and designers to build full stack mobile
            apps in React Native
          </li>
          <li>Communicate with team lead and team on a daily basis</li>
        </ul>
      </section>

      <section className="contact" id="contact">
        <h3>Connect With Me</h3>
        <a href="https://www.linkedin.com/in/linda-k-westphal-1aba9a1b5/">
          <SiLinkedin />
        </a>
      </section>
      <footer>
        <p>Designed & Built by Linda Westphal</p>
      </footer>
    </div>
  );
}

export default App;
