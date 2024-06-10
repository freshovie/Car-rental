import React, { useEffect, useState } from "react";
import "./style.scss";
import { FaHeart, FaGasPump } from "react-icons/fa6";
import { TbWheel } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";

const Content = () => {
  const [liked, setLiked] = useState([]); // State to hold the liked status for each car
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [popularCars, setPopularCars] = useState([]);
  const [combinedCars, setCombinedCars] = useState([]);

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
      const combined = [...recommendedCars, ...popularCars];
      setCombinedCars(combined);
      setLiked(Array(combined.length).fill(false)); // Initialize the liked state
    }
  }, [recommendedCars, popularCars]);

  // Function to handle the like button click for each car
  const handleLikeClick = (index) => {
    setLiked((prevLiked) =>
      prevLiked.map((item, idx) => (idx === index ? !item : item)) // Toggle the liked state for the clicked car
    );
  };

  return (
    <div className="content">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="card-tags">
            {combinedCars.map((car, index) => (
              <div className="icard" key={car.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="first">
                      <div className="first-sect">
                        <h4>{car.carName}</h4>
                        <p>{car.carType}</p>
                      </div>
                      <FaHeart
                        style={{ color: liked[index] ? "red" : "grey" }} // Change the color based on liked state
                        onClick={() => handleLikeClick(index)} // Handle like button click
                      />
                    </div>
                    <img src={car.image} alt={`${car.carName} car`} />{" "}
                    {/* Display the car image */}
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
                      </div>
                      <button>Rent Now</button>
                    </div>
                    {car.isGold && <s>${car.isGold}</s>}{" "}
                    {/* Display the original price if available */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default Content;
