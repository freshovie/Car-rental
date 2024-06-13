import React from "react";
import "./style.scss";
import { Ad1, Ad2, Koenigsegg, Nissan } from "../../assets";

function CarDisplay() {
  return (
    <div className="car-display">
      <div className="row">
        {/* Empty column for spacing on the left side */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        
        {/* Main content column */}
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="car-cards">
            
            {/* First car display card */}
            <div className="car1d">
              {/* Background image for the first card */}
              <img src={Ad1} alt="Ad1" className="w-100" />
              
              {/* Inner content of the first card */}
              <div className="innercar">
                <h1>
                  The Best Platform
                  <br /> for Car Rental
                </h1>
                <p>
                  Ease of doing a car rental safely <br /> and reliably. Of
                  course at a low price.
                </p>
                <button className="rentbtn1">Rental Car</button>
              </div>
              
              {/* Foreground car image */}
              <div className="fastcar">
                <img src={Koenigsegg} alt="Koenigsegg" className="w-100" />
              </div>
            </div>
            
            {/* Second car display card */}
            <div className="car1d">
              {/* Background image for the second card */}
              <img src={Ad2} alt="Ad2" className="w-100" />
              
              {/* Inner content of the second card */}
              <div className="innercar">
                <h1>
                  Easy way to rent a <br /> car at a low price
                </h1>
                <p>
                  Providing cheap car rental services <br /> and safe and
                  comfortable facilities.
                </p>
                <button className="rentbtn2">Rental Car</button>
              </div>
              
              {/* Foreground car image */}
              <div className="fastcar">
                <img src={Nissan} alt="Nissan" className="w-100" />
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Empty column for spacing on the right side */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
}

export default CarDisplay;
