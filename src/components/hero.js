import React from "react";
import { Link } from "react-router-dom";

import hero2 from "../hero.svg";
import hero from "../hero.webp";
import Navbar from "../components/Navbar.js";
import Services from "./services";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaBars,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section>
      {/* <div className="overlay"></div> */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-container">
          <div className="hero-img">
            <img src={hero} alt="" />
          </div>
          <div className="hero-content">
            <div className="underline"></div>
            <div className="hero-text">
              <h2>I'm Brian</h2>
              <p>freelance Web Developer and Designer</p>
            </div>
            <div className="contact-btn">
              <Link to="/contact">Contact Me</Link>
            </div>

            <div className="social-icons">
              <ul>
                <li>
                  <a href="http://www.twitter.com">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="http://www.facebook.com">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="http://www.Linkedin.com">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="http://www.behance.com">
                    <FaBehance />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
