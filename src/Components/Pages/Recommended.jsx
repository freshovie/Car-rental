import React, { useEffect, useState } from "react";
import "./style.scss"; // Importing the SCSS stylesheet for styling
import { FaHeart, FaGasPump } from "react-icons/fa";
import { TbWheel } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import Headpage from "./Headpage";
import AOS from "aos";
import { motion } from "framer-motion"; // Ensure you import framer-motion

const Recommended = () => {
  const [cars, setCars] = useState([]); // State to hold the list of cars
  const [liked, setLiked] = useState([]); // State to hold the liked status for each car

  // Fetch car data from the server on component mount
  useEffect(() => {
    fetch("http://localhost:8000/RecommendedCars")
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
        setCars(data); // Set the fetched car data to the state
        setLiked(Array(data.length).fill(false)); // Initialize the liked state with false values
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle any errors during the fetch
  }, []);

  // Function to handle the like button click for each car
  const handleLikeClick = (index) => {
    setLiked((prevLiked) =>
      prevLiked.map((item, idx) => (idx === index ? !item : item))
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animations in milliseconds
    });
  }, []);

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
    <div className="recommend" data-aos="fade-up">
      <Headpage heading="Recommended Cars" />{" "}
      {/* Use Headpage component with custom heading */}
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="card-tag">
            {cars.map((car, index) => (
              <motion.div
                className="icard"
                key={car.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }} // Slightly scale up on hover
              >
                <div className="card">
                  <div className="card-body">
                    <div className="first">
                      <div className="first-sect">
                        <h4>{car.carName}</h4>
                        <p>{car.carType}</p>
                      </div>
                      <FaHeart
                        style={{
                          color: liked[index] ? "red" : "grey",
                          transition: "color 0.3s ease",
                        }} // Change the color based on liked state
                        onClick={() => handleLikeClick(index)} // Handle like button click
                      />
                    </div>
                    <ItemLink item={car}></ItemLink>
                    <div className="first-icons">
                      <div className="icons">
                        <FaGasPump />
                        <p>{car.fuelCapacity}</p>
                      </div>
                      <div className="icons">
                        <TbWheel />
                        <p>{car.transmission}</p>
                      </div>
                      <div className="icons">
                        <MdPeopleAlt />
                        <p>{car.seatingCapacity}</p>
                      </div>
                    </div>
                    <div className="price">
                      <div className="price-info">
                        <p>
                          <span>${car.price}/</span>day
                        </p>
                        {car.isGold && <s>${car.isGold}</s>}{" "}
                        {/* Display the original price if available */}
                      </div>
                      <a href={`cardetails?id=${car.id}`}>
                          <button>Rent Now</button>
                        </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default Recommended;
