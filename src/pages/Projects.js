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
import Footer from "../components/footer";

const Projects = () => {
  return (
    <div className="main-projects-section">
      <section className="projects-section">
        <h2>All projects</h2>
        <div className="underline"></div>
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
          <div className="project-card third-project">
            <div className="image-container">
              <img src={image2} alt="" />
            </div>

            <div className="project-content">
              <h5 className="content-number">03.</h5>
              <h3 className="content-title">ANGULAR PROJECT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                culpa sequi deserunt, ea officiis ab, provident voluptas vel
                ipsam quis optio placeat dicta, excepturi distinctio ipsa.
                Tempore nam beatae, aliquam nisi id facere! Magnam porro nisi
                soluta vitae voluptatibus libero, nulla explicabo rerum odit
                repellendus ipsum eligendi a iure. Obcaecati dolorum nobis autem
                fuga officiis voluptates similique dignissimos fugiat? Corrupti.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                porro odit, tenetur quos minima quae. Nam est harum omnis
                accusamus.
              </p>
              <div className="projects-btn">
                <button>ANGULAR</button>
                <button>FIREBASE</button>
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
          <div className="project-card fourth-project">
            <div className="image-container">
              <img src={image3} alt="" />
            </div>

            <div className="project-content">
              <h5 className="content-number">04.</h5>
              <h3 className="content-title">GATSBY PROJECT</h3>
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
                <button>GATSBY</button>
                <button>STRAPY</button>
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
      </section>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
