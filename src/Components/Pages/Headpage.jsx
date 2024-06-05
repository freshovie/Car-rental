import React from "react";
import "./style.scss";

const Headpage = () => {
  return (
    <div className="popularHead">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="dhead">
          <h5>Popular</h5>
          <p>View all</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default Headpage;
