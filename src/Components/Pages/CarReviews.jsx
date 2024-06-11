import React from "react";
import "./style.scss";
import { Profile, Profile2 } from "../../assets";
import StarRating from "./StarRating";
import { RiArrowDropDownLine } from "react-icons/ri";

const CarReviews = () => {
  return (
    <div className="carreview">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <h3>
            Reviews <span>13</span>
          </h3>
          <div className="review-box">
            <img src={Profile} alt="" />
            <div className="container">
              <div className="review">
                <div className="identity">
                  <h3>Alex Stanton</h3>
                  <p>CEO at Bukalapak</p>
                </div>
                <div className="date">
                  <p>21 July 2022</p>
                  <StarRating />
                </div>
              </div>
              <p>
                We are very happy with the service from the MORENT App. Morent
                has a low price and also a large variety of cars with good and
                comfortable facilities. In addition, the service provided by the
                officers is also very friendly and very polite.
              </p>
            </div>
          </div>
          <div className="review-box">
            <img src={Profile2} alt="" />
            <div className="container">
              <div className="review">
                <div className="identity">
                  <h3>Skylar Dias</h3>
                  <p>CEO at Amazon</p>
                </div>
                <div className="date">
                  <p>20 July 2022</p>
                  <StarRating />
                </div>
              </div>
              <p>
                We are greatly helped by the services of the MORENT Application.
                Morent has low prices and also a wide variety of cars with good
                and comfortable facilities. In addition, the service provided by
                the officers is also very friendly and very polite.
              </p>
            </div>
          </div>
          <p className="showall" href="#!">
            Show all <RiArrowDropDownLine />
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default CarReviews;
