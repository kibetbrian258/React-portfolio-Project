import React, { useContext } from "react";
import nav from "../nav.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <section className="nav-section">
      <nav>
        <div className="navbar-logo">
          <Link to="/">
            <img src={nav} alt="navbar-logo" />
          </Link>
          <div className="toggle-bars" onClick={openSidebar}>
            <FaBars />
          </div>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
