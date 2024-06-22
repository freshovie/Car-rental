import React, { useEffect, useState } from "react";
import "./style.scss"; // Importing the SCSS stylesheet for styling
import { FaHeart, FaGasPump } from "react-icons/fa6"; // Importing FontAwesome icons
import { TbWheel } from "react-icons/tb"; // Importing Tabler icons
import { MdPeopleAlt } from "react-icons/md"; // Importing Material Design icons
import Headpage from "./Headpage";

const Recommend = () => {
  const [cars, setCars] = useState([]); // State to hold the list of cars
  const [liked, setLiked] = useState([]); // State to hold the liked status for each car
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [combinedCars, setCombinedCars] = useState([]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

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

  useEffect(() => {
    // Combine the two datasets
    if (recommendedCars.length > 0 && cars.length > 0) {
      const combined = shuffleArray([...recommendedCars, ...cars]).slice(0, 3);
      setCombinedCars(combined);
      setLiked(Array(combined.length).fill(false)); // Initialize the liked state
    }
  }, [recommendedCars, cars]);

  // Function to handle the like button click for each car
  const handleLikeClick = (index) => {
    setLiked(
      (prevLiked) =>
        prevLiked.map((item, idx) => (idx === index ? !item : item)) // Toggle the liked state for the clicked car
    );
  };

    // Component to render the link for car details
    const ItemLink = ({ item, children }) => {
      return (
        <a href={`cardetails?id=${item.id}`}>
          {children}
        </a>
      );
    };

  return (
    <div className="recentCar">
      <Headpage heading="Recommended Cars" />{" "}
      {/* Use Headpage component with custom heading */}
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="card-tagss">
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
                    <ItemLink item={car}>
                      <img src={car.image} alt={`${car.carName} car`} /> {/* Display the car image */}
                    </ItemLink>
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

export default Recommend;
