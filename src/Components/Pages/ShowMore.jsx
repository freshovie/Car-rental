import React, {useEffect} from "react";
import AOS from "aos";

const Showmore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animations in milliseconds
    });
  }, []);

  return (
    <div className="showmore" data-aos="fade-out">
      {" "}
      {/* Container for the Showmore component */}
      <div className="row">
        {" "}
        {/* Row within the container */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>{" "}
        {/* Empty column for spacing */}
        <div className="col-sm-12 col-md-12 col-lg-10">
          {" "}
          {/* Column containing the button and car count */}
          <button className="showmore-btn">Show more car</button>{" "}
          {/* Button to load more cars */}
          <p style={{ textAlign: "end", color: "#90a3bf" }}>120 Car</p>{" "}
          {/* Text indicating total number of cars */}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>{" "}
        {/* Empty column for spacing */}
      </div>
    </div>
  );
};

export default Showmore;
