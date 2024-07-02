import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../data";

const Experience = () => {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="experience-container">
      <h2>Experience</h2>
      <div className="underline"></div>
      <div className="experience-section">
        <div className="name-section">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className="content-section">
          <div className="header-section">
            <h3>{title}</h3>
            <button>{company}</button>
            <p>{dates}</p>
          </div>
          {duties.map((duty, index) => {
            return (
              <div className="body-section" key={index}>
                <div className="angle-right">
                  <FaAngleDoubleRight />
                </div>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="more-btn">
        <Link to="/about">MORE INFO</Link>
      </div>
    </section>
  );
};

export default Experience;
