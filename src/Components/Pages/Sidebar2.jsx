import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import "./style.scss";

const Sidebar2 = () => {
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [popularCars, setPopularCars] = useState([]);
  const [combinedCars, setCombinedCars] = useState([]);

  // Fetch car data from the server on component mount
  useEffect(() => {
    const fetchRecommendedCars = async () => {
      try {
        const response = await fetch("http://localhost:8000/RecommendedCars");
        const data = await response.json();
        setRecommendedCars(data);
      } catch (error) {
        console.error("Error fetching recommended cars:", error);
      }
    };

    const fetchPopularCars = async () => {
      try {
        const response = await fetch("http://localhost:8000/cars");
        const data = await response.json();
        setPopularCars(data);
      } catch (error) {
        console.error("Error fetching popular cars:", error);
      }
    };

    fetchRecommendedCars();
    fetchPopularCars();
  }, []);

  useEffect(() => {
    // Combine the two datasets
    if (recommendedCars.length > 0 && popularCars.length > 0) {
      const combined = shuffleArray([...recommendedCars, ...popularCars]).slice(
        0,
        1
      );
      setCombinedCars(combined);
    }
  }, [recommendedCars, popularCars]);

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div className="sidebar2">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="container">
            <h3>Rental Summary</h3>
            <p>
              {" "}
              <span>
                Prices may change depending on the length of the rental and the
                price of your rental car
              </span>
            </p>
            <div className="itemsdetails">
              {combinedCars.map((car, index) => (
                <div className="item" key={car.id}>
                  <div>
                    <img src={car.image} alt={car.name} />
                  </div>
                  <div className="iteminfo">
                    <h2>{car.carName}</h2>
                    <div className="itemrating">
                    <StarRating
                          totalStars={5}
                          size={16}
                          color="#ff6347"
                          emptyColor="#ccc"
                          initialRating={1}
                        />
                      <p>440+ Reviewers</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              <div className="itemfunds">
                <p>Subtotal</p>
                <p>
                  {combinedCars.reduce((total, car) => total + car.price, 0)}
                </p>
              </div>
              <div className="itemfunds">
                <p>Tax</p>
                <p>
                  {(
                    combinedCars.reduce((total, car) => total + car.price, 0) *
                    0.1
                  ).toFixed(2)}
                </p>
              </div>
              <div>
                <p>Apply promo code</p>
                <p>
                  <span>Apply now</span>
                </p>
              </div>
              <div className="itemsprice">
                <div className="total">
                  <h3>Total Rental Price</h3>
                  <p>Overall price and includes rental discount</p>
                </div>
                <h1>
                  {(
                    combinedCars.reduce((total, car) => total + car.price, 0) *
                    1.1
                  ).toFixed(2)}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
