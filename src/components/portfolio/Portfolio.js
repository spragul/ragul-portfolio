import React from "react";
import "./Portfolio.css";

import { Player } from "@lottiefiles/react-lottie-player";
import rentalapp from "../../lotties/3.json";
import mobileapp from "../../lotties/Online shopping.json"
import zoomApp from "../../lotties/Zoom.json";
import urlApp from "../../lotties/url.json";
import { BiLinkExternal } from "react-icons/bi";
import { GoAlertFill } from "react-icons/go";

const projects = [
  {
    id: 1,
    image: rentalapp,
    title: "Equipment Rental Portal",

    description:
      "Users of the equipment rental platform may rent a product by using the test Razorpay mode. This application offers user and administrator authentication.",
    site: "https://github.com/spragul/guvi-hackathon2-frontend",
    source: "Frontend Code",
    backsite: "https://github.com/spragul/guvi-hackathon2-backend",
    backsource: "Backend Code",
    live: "https://nimble-babka-3e85ad.netlify.app",
    livename: "Live",
  },
  {
    id: 2,
    image: mobileapp,
    title: "Mobile shop",

    description:"In this app, we need to implement authentication and perform CRUD operations",
    site: "https://github.com/kumaresan2001/Capston-Forntend",
    source: "Frontend Code",
    backsite: "https://github.com/kumaresan2001/day-42-Backend",
    backsource: "Backend Code",
    live: "	https://gleaming-macaron-192bb7.netlify.app",
    livename: "Live",
  },
  {
    id: 3,
    image: zoomApp,
    title: "Zoom Metting",

    description:"The Zoom Meeting app allows you to create a video call, chat, and screen share with login credentials." ,
    site: "https://github.com/spragul/zmfrontend",
    source: "Frontend Code",
    backsite: "https://github.com/spragul/zmbackend",
    backsource: "Backend Code",
    live: "https://main--unrivaled-froyo-c6cf87.netlify.app",
    livename: "Live",
  },

  {
    id: 4,
    image: urlApp,
    title: "Url Shortener",

    description:
      " URL shortener ,user can redirects the shorter URL to the original webpage",
    site: "https://github.com/spragul/urlshortener-front",
    source: "Frontend Code",
    backsite: "https://github.com/spragul/urlshortener-back",
    backsource: "Backend Code",
    live: "https://dancing-nasturtium-c70247.netlify.app",
    livename: "Live",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <Player
                  className="name"
                  autoplay
                  loop
                  src={project.image}
                  alt={project.title}
                  style={{ height: "20rem" }}
                ></Player>
              </div>
              <h3>{project.title}</h3>

              <small className="portfolio__desc">{project.description}</small>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a
                  href={project.site}
                  target="_blank"
                  style={{ marginTop: "1rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <GoAlertFill />
                  </span>
                  &nbsp;{project.source}
                </a>
                <a
                  href={project.backsite}
                  target="_blank"
                  style={{ marginTop: "1rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <GoAlertFill />
                  </span>
                  &nbsp;{project.backsource}
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  style={{ marginTop: "1rem", marginRight: "2rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <BiLinkExternal />
                  </span>
                  {project.livename}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
