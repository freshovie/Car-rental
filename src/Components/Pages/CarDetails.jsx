import React, { useEffect, useState } from "react";
import "./style.scss";
import { FaHeart } from "react-icons/fa";
import StarRating from "./StarRating";
import { View, View2, View3 } from "../../assets";

const CarDetails = ({ carId }) => {
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [popularCars, setPopularCars] = useState([]);
  const [combinedCars, setCombinedCars] = useState([]);
  const [liked, setLiked] = useState({});
  const [background, setBackground] = useState(View); // Initial background image

  // Fetch recommended cars from the server
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

    // Fetch popular cars from the server
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

  // Combine recommended and popular cars
  useEffect(() => {
    if (recommendedCars.length > 0 || popularCars.length > 0) {
      const combined = [...recommendedCars, ...popularCars];
      setCombinedCars(combined);
    }
  }, [recommendedCars, popularCars]);

  // Handle like button click
  const handleLikeClick = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  // Handle background image change
  const handleImageClick = (newPicture) => {
    setBackground(newPicture);
  };

  // Find the car details based on carId
  const car = combinedCars.find((car) => car.id === carId);

  // Show loading message if car details are not available
  if (!car) {
    return <div>Loading...</div>;
  }

  // List of car images
  const pictures = [
    { id: 0, name: View },
    { id: 1, name: View2 },
    { id: 2, name: View3 },
  ];

  return (
    <div className="cardetails">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="details-card">
            <div className="cata-image">
              <div
                className="theimg"
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h5>
                  Sports car with the best <br /> design and acceleration
                </h5>
                <p>
                  Safety and comfort while driving a <br />
                  futuristic and elegant sports car
                </p>
              </div>
              <div className="changed-image">
                {pictures.map((item) => (
                  <img
                    key={item.id}
                    src={item.name}
                    alt="pictures"
                    onClick={() => handleImageClick(item.name)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="cata-p">
                  <div className="cata-header">
                    <div className="cata-head">
                      <h4>{car.carName}</h4>
                      <div className="starating">
                        <StarRating totalStars={5} />
                        <p>
                          <span>440+ Reviews</span>
                        </p>
                      </div>
                    </div>
                    <FaHeart
                      style={{ color: liked[car.id] ? "red" : "grey" }}
                      onClick={() => handleLikeClick(car.id)}
                    />
                  </div>
                  <p>{car.description}</p>
                  <div className="cata-more">
                    <div className="cata-type">
                      <p>
                        <span>Type Car</span>
                      </p>
                      <p>{car.carType}</p>
                    </div>
                    <div className="cata-type">
                      <p>
                        <span>Capacity</span>
                      </p>
                      <p>{car.seatingCapacity}</p>
                    </div>
                    <div className="cata-type">
                      <p>
                        <span>Steering</span>
                      </p>
                      <p>{car.transmission}</p>
                    </div>
                    <div className="cata-type">
                      <p>
                        <span>Gasoline</span>
                      </p>
                      <p>{car.fuelCapacity}</p>
                    </div>
                  </div>
                  <div className="cata-btn">
                    <div className="cata-price">
                      <p>
                        ${car.price} / <span>day</span>
                      </p>
                      {car.isGold && (
                        <s style={{ color: "#90a3bf" }}>${car.isGold}</s>
                      )}
                    </div>
                    <button>Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default CarDetails;
