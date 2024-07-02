import React from "react";
import nav from "../nav.svg";
import {
  FaTimes,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  faUser,
  FaUser,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const handleLinkClick = () => {
    closeSidebar();
  };

  return (
    <section
      className={`${
        isSidebarOpen ? "sidebar-component show-sidebar" : "sidebar-component"
      } `}
    >
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={nav} alt="Sidebar Logo" />
        </div>
        <div className="fa-times" onClick={closeSidebar}>
          <FaTimes />
        </div>
      </div>
      <div className="sidebar-links">
        <ul>
          <Link to="/" onClick={handleLinkClick}>
            <li>
              <div className="link-icon">
                <FaHome />
              </div>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            <li>
              <div className="link-icon">
                <FaUser />
              </div>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
          </Link>
          <Link to="/projects" onClick={handleLinkClick}>
            <li>
              <div className="link-icon">
                <FaFolderOpen />
              </div>
              <Link to="/projects" onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            <li>
              <div className="link-icon">
                <FaPhoneAlt />
              </div>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
