import React, {useEffect} from "react";
import AOS from"aos";
import "./style.scss";
import { Profile, Profile2 } from "../../assets";
import StarRating from "./StarRating";
import { RiArrowDropDownLine } from "react-icons/ri";

const CarReviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animations in milliseconds
    });
  }, []);

  return (
    <div className="carreview">
      <div className="row">
        {/* Empty column for spacing on the left side */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        {/* Main content column */}
        <div className="col-sm-12 col-md-12 col-lg-10">
         <div className="container">
           {/* Reviews header */}
           <h3>
            Reviews <span>13</span>
          </h3>

          {/* First review box */}
          <div className="review-box" data-aos="flip-down">
            {/* Reviewer profile image */}
            <img src={Profile} alt="Profile"  className="profile-img"/>

            {/* Container for the review content */}
            <div className="container1">
              <div className="review">
                {/* Reviewer's identity */}
                <div className="identity">
                  <h3>Alex Stanton</h3>
                  <p>CEO at Bukalapak</p>
                </div>
                {/* Review date and star rating */}
                <div className="date">
                  <p>21 July 2022</p>
                  <StarRating
                    totalStars={5}
                    size={24}
                    color="#ff6347"
                    emptyColor="#ccc"
                    initialRating={0}
                  />
                </div>
              </div>
              {/* Review text */}
              <p>
                We are very happy with the service from the MORENT App. Morent
                has a low price and also a large variety of cars with good and
                comfortable facilities. In addition, the service provided by the
                officers is also very friendly and very polite.
              </p>
            </div>
          </div>

          {/* Second review box */}
          <div className="review-box" data-aos="flip-down">
            {/* Reviewer profile image */}
            <img src={Profile2} alt="Profile2" className="profile-img"/>

            {/* Container for the review content */}
            <div className="container1">
              <div className="review">
                {/* Reviewer's identity */}
                <div className="identity">
                  <h3>Skylar Dias</h3>
                  <p>CEO at Amazon</p>
                </div>
                {/* Review date and star rating */}
                <div className="date">
                  <p>20 July 2022</p>
                  <StarRating
                    totalStars={5}
                    size={24}
                    color="#ff6347"
                    emptyColor="#ccc"
                    initialRating={0}
                  />
                </div>
              </div>
              {/* Review text */}
              <p>
                We are greatly helped by the services of the MORENT Application.
                Morent has low prices and also a wide variety of cars with good
                and comfortable facilities. In addition, the service provided by
                the officers is also very friendly and very polite.
              </p>
            </div>
          </div>

          {/* Show all reviews link */}
          <p className="showall" href="#!">
            Show all <RiArrowDropDownLine />
          </p>
         </div>
        </div>

        {/* Empty column for spacing on the right side */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default CarReviews;
