import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Services from "../components/services";
import FeaturedProjects from "../components/featuredProjects";
import Experience from "../components/experience";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <section className="main-landing-section">
      <div className="landing-page">
        <Hero />
        <Services />
        <Experience />
        <FeaturedProjects />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
