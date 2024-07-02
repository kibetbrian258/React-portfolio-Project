import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaBars,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer">
        <div className="footer-icons">
          <ul>
            <li>
              <a href="http://facebook.com" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="http://linkedin.com" target="_blank">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="http://twitter.com" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="http://behance.com" target="_blank">
                <FaBehance />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <p>
            COPYRIGHT &copy; 2024 <span>WEBDEV</span> ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
