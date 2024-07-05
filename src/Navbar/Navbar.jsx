import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import { Profile, Like, Notification, Settings } from "../assets";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import "./navbar.scss";

const Navbar = () => {
  // Initialize AOS (Animate On Scroll) library when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animations in milliseconds
    });
  }, []);

  // Animation variants for the navbar text
  const textAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-aos="fade-down">
      <div className="container-fluid">
        {/* Brand link with animation */}
        <Link className="navbar-brand" to="/">
          <motion.div
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >
            MORENT
          </motion.div>
        </Link>
        {/* Navbar toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navbar content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Search form */}
          <form className="d-flex search-form mx-auto" role="search">
            <div className="search-container">
              <CiSearch className="search-icon" />
              <input
                className="form-control"
                type="search"
                placeholder="Search something here..."
                aria-label="Search"
              />
              <VscSettings className="filter-icon" />
            </div>
          </form>
          {/* Navbar icons */}
          <div className="icons ms-auto d-flex">
            <img src={Like} alt="Like" className="icon" />
            <img src={Notification} alt="Notification" className="icon" />
            <img src={Settings} alt="Settings" className="icon" />
            <img src={Profile} alt="Profile" className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
