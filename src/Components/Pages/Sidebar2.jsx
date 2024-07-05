import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import "./style.scss";
import AOS from "aos";
import { motion } from "framer-motion";
import { Ad2 } from "../../assets";


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
    AOS.init({
      duration: 1000, // Duration of the animations in milliseconds
    });
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
    // Component to render the link for car details
    const ItemLink = ({ item, children }) => {
      return (
        <a href={`cardetails?id=${item.id}`}>
          {children}
          <motion.img
            src={item.image}
            alt={`${item.carName} car`}
            whileHover={{ scale: 1.1 }} // Scale up on hover effect
          />
        </a>
      );
    };
  
    // Variants for the item elements animations
    const itemVariants = {
      hidden: { y: 20, opacity: 0 }, // Initial hidden state
      visible: { y: 0, opacity: 1 }, // Visible state
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
                 <motion.div
                 className="icard"
                 key={car.id}
                 variants={itemVariants}
                 initial="hidden"
                 animate="visible"
               >
                <div className="item" key={car.id}>
                  <div className="imgB" style={{ backgroundImage: `url(${Ad2})` }}>
                  <ItemLink item={car}></ItemLink>
                  </div>
                  <div className="iteminfo">
                    <h2>{car.carName}</h2>
                    <div className="itemrating">
                      <StarRating
                        totalStars={5}
                        size={16}
                        color="#ff6347"
                        emptyColor="#ccc"
                        initialRating={0}
                      />
                      <p>440+ Reviewers</p>
                    </div>
                  </div>
                  <hr />
                </div>
            </motion.div>
              ))}
              <hr />
              <div className="itemfunds">
                <p>Subtotal</p>
                {combinedCars.reduce((total, car) => total + car.price, 0) >
                  0 && (
                  <p>
                    {combinedCars.reduce((total, car) => total + car.price, 0)}
                  </p>
                )}
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
              <div className="applys">
                <input type="text" placeholder="Apply promo code" />
                <button>Apply now</button>
              </div>
              <div className="itemsprice">
                <div className="total">
                  <h3>Total Rental Price</h3>
                  <p>Overall price and includes rental discount</p>
                </div>
                <h1>
                  $
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
