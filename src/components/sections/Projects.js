import React from "react";

import air_o_meter from "../../assets/images/air_o_meter.jpeg";
import doozit_app from "../../assets/images/doozit_app.jpg";
import sbdf_main from "../../assets/images/sbdf_main.png";
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
            <a href="https://youtube.com/shorts/Eyhfuo8131s?feature=share">
              <p class="demo">Click for Video Demo</p>
              <img class="d-block" src={air_o_meter} alt="First slide" />
            </a>
            <div class="carousel-caption d-none d-md-block">
              <h5>AirOMeter App</h5>
              <p>
                Built using React Native and REST using Aqicn.org
                API and also incorporates geolocation
              </p>
              <p>
                User inputs city in search bar or uses geolocator icon to get the air quality information
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
            <a href="https://play.google.com/store/apps/details?id=com.lindakw.sabaidee_fest_app&pcampaignid=web_share">
            <p class="demo">Downdload from Play Store</p>
              <img class="d-block" src={sbdf_main} alt="Third slide" />
            </a>
            <div class="carousel-caption d-none d-md-block">
              <h5>Sabaidee Fest App</h5>
              <p>Built using React Native</p>
              <p>
                Built to provide festival goers with a user friendly way to navigate through schedules, artist lineups, site map and food vendors. Launched on the Google Play Store.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <a href="https://lindakw.github.io/RandomQuoteGenerator">
            <p class="demo">Click for Demo</p>
              <img class="d-block" src={random_quote} alt="Forth slide" /></a>
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
            <a href="https://lindakw.github.io/Event-Countdown/">
              <p class="demo">Click for Demo</p>
              <img class="d-block" src={event_countdown} alt="Fifth slide" /></a>
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
