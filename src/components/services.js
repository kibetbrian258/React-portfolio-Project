import React from "react";
import {
    FaAndroid,
    FaCode,
    FaGem,
    FaBehance,
    FaBars,
    FaCog,
  } from "react-icons/fa";

const Services = () => {
  return (
    <section>
      <div className="service-section">
        <div className="header">
          <h2>Services</h2>
          <div className="underline"></div>
        </div>
        <div className="service-card">
            <div className="card first-card">
                <FaCode/>
                <h4>Web Development</h4>
                <div className="service-line"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab itaque dicta sed sapiente magni neque repellat excepturi aperiam dignissimos?</p>
            </div>
            <div className="card second-card">
                <FaGem/>
                <h4>Web Design</h4>
                <div className="service-line"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab itaque dicta sed sapiente magni neque repellat excepturi aperiam dignissimos.</p>
            </div>
            <div className="card third-card">
                <FaCog/>
                <h4>Web Maintenance</h4>
                <div className="service-line"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
