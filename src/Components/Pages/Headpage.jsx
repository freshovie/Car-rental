import React from "react";
import "./style.scss"; // Importing local stylesheet
import { Link } from "react-router-dom";

const Headpage = ({ heading }) => {
  return (
    <div className="popularHead">
      {/* Bootstrap row */}
      <div className="row">
        {/* Empty column for spacing (Bootstrap grid system) */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        {/* Main content column */}
        <div className="col-sm-12 col-md-12 col-lg-10">
          {/* Container for heading and "View all" link */}
          <div className="dhead">
            {/* Display the heading passed as prop */}
            <h5>{heading}</h5>
            {/* Link to view all (currently static text) */}
            <Link to="/category" style={{ textDecoration: "none" }}>
              View all
            </Link>
          </div>
        </div>

        {/* Empty column for spacing (Bootstrap grid system) */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default Headpage;
