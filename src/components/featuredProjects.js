import React from "react";
import image1 from "../image1.webp";
import image4 from "../image4.webp";
import image2 from "../image2.webp";
import image3 from "../image3.webp";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaBars,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  return (
    <section>
      <div className="featured-projects">
        <div className="header">
          <h2>Featured Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects-container">
          <div className="project-card first-project">
            <div className="image-container">
              <img src={image1} alt="" />
            </div>

            <div className="project-content">
              <h5 className="content-number">01.</h5>
              <h3 className="content-title">HTML &amp; CSS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                culpa sequi deserunt, ea officiis ab, provident voluptas vel
                ipsam quis optio placeat dicta, excepturi distinctio ipsa.
                Tempore nam beatae, aliquam nisi id facere! Magnam porro nisi
                soluta vitae voluptatibus libero, nulla explicabo rerum odit
                repellendus ipsum eligendi a iure. Obcaecati dolorum nobis autem
                fuga officiis voluptates similique dignissimos fugiat? Corrupti.
              </p>
              <div className="projects-btn">
                <button>HTML</button>
                <button>CSS</button>
                <button>JAVASCRIPT</button>
              </div>
              <div className="project-icons">
                <ul>
                  <li>
                    <a href="https://github.com" target="_blank">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://behance.com" target="_blank">
                      <FaBehance />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-card second-project">
            <div className="image-container">
              <img src={image4} alt="" />
            </div>

            <div className="project-content">
              <h5 className="content-number">02.</h5>
              <h3 className="content-title">REACT PROJECT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                culpa sequi deserunt, ea officiis ab, provident voluptas vel
                ipsam quis optio placeat dicta, excepturi distinctio ipsa.
                Tempore nam beatae, aliquam nisi id facere! Magnam porro nisi
                soluta vitae voluptatibus libero.
              </p>
              <div className="projects-btn">
                <button>REACT</button>
                <button>CSS</button>
                <button>NODE JS</button>
              </div>
              <div className="project-icons">
                <ul>
                  <li>
                    <a href="https://github.com" target="_blank">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://behance.com" target="_blank">
                      <FaBehance />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="more-btn">
          <Link to="/projects">PROJECTS</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
