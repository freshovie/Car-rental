import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Profile, Like, Notification, Settings } from "../assets";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MORENT
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
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
          <div className="icons ms-auto d-flex align-items-center">
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
