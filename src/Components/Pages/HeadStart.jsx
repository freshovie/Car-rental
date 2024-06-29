import React from "react";
import "./style.scss";

const HeadStart = ({ headH3, headP, headStep }) => {
  return (
    <div className="HeadStart">
      <div className="heading">
        <div className="pheader">
          <h3>{headH3}</h3>
          <p>{headP}</p>
        </div>
        <p>{headStep}</p>
      </div>
    </div>
  );
};

export default HeadStart;
