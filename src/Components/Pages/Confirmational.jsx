import React, { useEffect } from "react";
import { Security } from "../../assets"; // Import the security image asset
import "./style.scss"; // Import SCSS file for styling
import HeadStart from "./HeadStart"; // Import the HeadStart component
import AOS from "aos"; // Import AOS for animations on scroll

const Confirmation = () => {
  // Initialize AOS for animations on scroll with a duration of 1200 milliseconds
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <React.Fragment>
      {/* Main container with AOS fade-up animation */}
      <div className="confirmation" data-aos="fade-up">
        <div className="row">
          {/* Empty column for spacing on the left side */}
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          
          {/* Main content column */}
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="container">
              {/* HeadStart component with heading, description, and step number */}
              <HeadStart
                headH3="Confirmation"
                headP="We are getting to the end. Just few clicks and your rental is ready!"
                headStep="Step 4 of 4"
              />
              
              {/* Card containing the terms and conditions checkboxes */}
              <div className="card">
                <div className="card-body">
                  <div className="first-div">
                    <input type="checkbox" className="tick" id="marketing" />
                    <p>
                      I agree with sending Marketing and newsletter emails.
                      No spam, promised!
                    </p>
                  </div>
                  <div className="second-div">
                    <input type="checkbox" className="tick" id="terms" />
                    <p>
                      I agree with our terms and conditions and privacy policy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rent Now button */}
              <button>Rent Now</button>

              {/* Security image and text */}
              <img src={Security} alt="Security" />
              <h4>All your data are safe</h4>
              <p>
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
          
          {/* Empty column for spacing on the right side */}
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirmation;
