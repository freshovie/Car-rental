import React from "react";
import "./style.scss";
import { Ad1, Ad2, Koenigsegg, Nissan } from "../../assets";

function CarDisplay() {
  return (
    <div className="car-display">
      <div className="row">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
          <div className="car-cards">
            <div className="car1d">
              <img src={Ad1} alt="" className="w-100" />
              <div className="innercar">
                <h1>
                  The Best Platfrom
                  <br /> for Car Rental
                </h1>
                <p>
                  Ease of doing a car rental safely <br /> and reliably. Of
                  course at a low price.
                </p>
                <button className="rentbtn1">Rental Car</button>
              </div>
              <div className="fastcar">
                <img src={Koenigsegg} alt="" className="w-100" />
              </div>
            </div>
            <div className="car1d">
              <img src={Ad2} alt="" className="w-100" />
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
              <div className="fastcar">
                <img src={Nissan} alt="" className="w-100"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
}

export default CarDisplay;
