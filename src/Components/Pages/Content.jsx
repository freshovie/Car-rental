import React, { useEffect, useState } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "./style.scss";
import { FaHeart, FaGasPump } from "react-icons/fa"; // Importing icons from react-icons
import { TbWheel } from "react-icons/tb"; // Importing icons from react-icons
import { MdPeopleAlt } from "react-icons/md"; // Importing icons from react-icons

const Content = () => {
  // State to hold the liked status for each car
  const [liked, setLiked] = useState([]);
  // State to hold the recommended cars data
  const [recommendedCars, setRecommendedCars] = useState([]);
  // State to hold the popular cars data
  const [Cars, setCars] = useState([]);
  // State to hold the combined data of recommended and popular cars
  const [combinedCars, setCombinedCars] = useState([]);

  // Fetch recommended cars from the API when the component mounts
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

    // Fetch popular cars from the API when the component mounts
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:8000/cars");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching popular cars:", error);
      }
    };

    fetchRecommendedCars();
    fetchCars();
  }, []);

  // Combine the recommended and popular cars data when they are both fetched
  useEffect(() => {
    if (recommendedCars.length > 0 && Cars.length > 0) {
      const combined = [...recommendedCars, ...Cars];
      setCombinedCars(combined);
      setLiked(Array(combined.length).fill(false)); // Initialize the liked state
    }
  }, [recommendedCars, Cars]);

  // Function to handle the like button click for each car
  const handleLikeClick = (index) => {
    setLiked(
      (prevLiked) =>
        prevLiked.map((item, idx) => (idx === index ? !item : item)) // Toggle the liked state for the clicked car
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
    <div className="content" data-aos="fade-up">
      <div className="row">
        {/* Empty column for spacing on the left side */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

        {/* Main content column */}
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="card-tags">
            {/* Mapping over combinedCars to display each car */}
            {combinedCars.map((car, index) => (
              <motion.div
                className="icard"
                key={car.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }} // Slightly scale up on hover
              >
                <div className="icard" key={car.id}>
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
                      <ItemLink item={car}>
                        {/* Display the car image */}
                      </ItemLink>
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
                        <button>Rent Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Empty column for spacing on the right side */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default Content;
