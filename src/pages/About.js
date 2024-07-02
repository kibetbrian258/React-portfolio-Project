import React from "react";
import hero from "../hero.webp";
import hero2 from "../hero.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="main-about-section">
      <section className="about-section">
        <div className="about-img">
          <img src={hero2} alt="hero-image" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at
            nesciunt temporibus quisquam rem magnam odio repudiandae veritatis
            animi voluptas blanditiis fugit quam nostrum provident sit illum
            minus amet, numquam expedita maiores error maxime? Velit rerum aut
            est a repellat voluptates, fugit ut ab ipsam, natus dolorum. Dolor
            sint minima, quae, quas, officiis doloribus dolores nobis nam
            quisquam explicabo quam optio consectetur magni possimus. Ipsam non
            dolores aliquid possimus eveniet exercitationem commodi sapiente,
            beatae tenetur.
          </p>
          <div className="languages-btn">
            <button>HMTL</button>
            <button>CSS</button>
            <button>Tailwind CSS</button>
            <button>JavaScript</button>
            <button>React.js</button>
            <button>Node.js</button>
          </div>
        </div>
      </section>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default About;
