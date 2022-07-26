import React from "react";

import newsWeather_app from "../../assets/images/news-weather_app.png";
import doozit_app from "../../assets/images/doozit_app.jpg";
import birlog_app from "../../assets/images/birlog_login.png";
import random_quote from "../../assets/images/random_quote.png";
import event_countdown from "../../assets/images/event_countdown.png";

const Projects = () => {
  return (
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
              <p>
                Built using React Native and REST with Open Weather Map and News
                API's
              </p>
              <p>
                User inputs search terms for news stories and city for weather
                forecast
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block" src={doozit_app} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Doozit-Gamified To Do App</h5>
              <p>Built using React Native, REST and Firebase</p>
              <p>
                Incorporates multi-users, Firebase User Auth and CRUD
                functionality
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block" src={birlog_app} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Birlog-Full Stack Blog App</h5>
              <p>Built using React Native, REST and MongoDB</p>
              <p>
                Incorporates user auth, password encryption and CRUD
                functionality
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block" src={random_quote} alt="Forth slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Random Quote Generator</h5>
              <p>Built using HTML, CSS and Javascript with quote API</p>
              <p>
                Generates random quotes when button is clicked and has ability
                to connect and share to Twitter
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block" src={event_countdown} alt="Fifth slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Event Countdown Clock</h5>
              <p>Built using HTML, CSS and Javascript.</p>
              <p>Creates a real-time countdown for user generated inputs</p>
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
  );
};

export default Projects;
