import React, { useEffect, useState } from "react";
import "./style.scss";
import { FaHeart } from "react-icons/fa6"; // Importing FontAwesome icons
import StarRating from "./StarRating";
import { BigView, View, View2, View3 } from "../../assets";

const CarDetails = ({ carId }) => {
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [popularCars, setPopularCars] = useState([]);
  const [combinedCars, setCombinedCars] = useState([]);
  const [liked, setLiked] = useState({});
  const [currentImages, setCurrentImages] = useState({});

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
    if (recommendedCars.length > 0 || popularCars.length > 0) {
      const combined = [...recommendedCars, ...popularCars];
      setCombinedCars(combined);
    }
  }, [recommendedCars, popularCars]);

  const handleLikeClick = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id]
    }));
  };

  const handleImageClick = (carId, image) => {
    setCurrentImages((prevImages) => ({
      ...prevImages,
      [carId]: image
    }));
  };

  const car = combinedCars.find((car) => car.id === carId);

  if (!car) {
    return <div>Loading...</div>;
  }

  const images = car.images || [BigView, View, View2, View3];
  const currentImage = currentImages[car.id] || images[0];

  return (
    <div className="cardetails">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="details-card">
              <div className="cata-image">
                <div className="theimg">
                  <h5>
                    Sports car with the best <br /> design and acceleration
                  </h5>
                  <p>
                    Safety and comfort while driving a <br />
                    futuristic and elegant sports car
                  </p>
                  <img src={currentImage} alt="Main car view" />
                </div>
                <div className="changed-image">
                  {images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`View ${index + 1}`}
                      onClick={() => handleImageClick(car.id, image)}
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
                          <p><span>440+ Reviews</span></p>
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
                        <p><span>Type Car</span></p>
                        <p>{car.carType}</p>
                      </div>
                      <div className="cata-type">
                        <p><span>Capacity</span></p>
                        <p>{car.seatingCapacity}</p>
                      </div>
                      <div className="cata-type">
                        <p><span>Steering</span></p>
                        <p>{car.transmission}</p>
                      </div>
                      <div className="cata-type">
                        <p><span>Gasoline</span></p>
                        <p>{car.fuelCapacity}</p>
                      </div>
                    </div>
                    <div className="cata-btn">
                      <div className="cata-price">
                        <p>${car.price} / <span>day</span></p>
                        {car.isGold && <s style={{color: '#90a3bf' }} >${car.isGold}</s>}
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
