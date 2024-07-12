import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./style.scss";
import { FaHeart } from "react-icons/fa";
import StarRating from "./StarRating";
import { View, View2, View3 } from "../../assets";

const CarDetails = () => {
  const handleRatingChange = (newRating) => {
    console.log("New rating:", newRating);
  };

  // const [popularCars, setPopularCars] = useState([]);
  const [liked, setLiked] = useState({});
  const [background, setBackground] = useState(View);

  // useEffect(() => {
  //   const fetchPopularCars = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/cars");
  //       const data = await response.json();
  //       setPopularCars(data);
  //     } catch (error) {
  //       console.error("Error fetching popular cars:", error);
  //     }
  //   };

  //   fetchPopularCars();
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const handleLikeClick = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  const handleImageClick = (newPicture) => {
    setBackground(newPicture);
  };

  // const pictures = popularCars.find((car) => car.id === carId);

  // if (!car) {
  //   console.log("Car details not found:", carId);
  //   return <div>Please wait...</div>;
  // }

  const pictures = [
    { id: 0, name: View },
    { id: 1, name: View2 },
    { id: 2, name: View3 },
  ];

  return (
    <div className="cardetails" data-aos="fade-out">
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
                {pictures.map((picture) => (
                  <img
                    key={picture.id}
                    src={picture.name}
                    alt="car"
                    onClick={() => handleImageClick(picture.name)}
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
                      <h4>{pictures.carName}</h4>
                      <div className="starating">
                        <StarRating
                          totalStars={5}
                          size={24}
                          color="#ff6347"
                          emptyColor="#ccc"
                          initialRating={1}
                          onRatingChange={handleRatingChange}
                        />
                        <p>
                          <span>440+ Reviews</span>
                        </p>
                      </div>
                    </div>
                    <FaHeart
                      style={{ color: liked[pictures.id] ? "red" : "grey" }}
                      onClick={() => handleLikeClick(pictures.id)}
                    />
                  </div>
                  <p>{pictures.description}</p>
                  <div className="cata-more">
                    <div className="cata-type">
                      <p>
                        <span>Type Car</span>
                      </p>
                      <p>{pictures.carType}</p>
                    </div>
                    <div className="cata-type">
                      <p>
                        <span>Capacity</span>
                      </p>
                      <p>{pictures.seatingCapacity}</p>
                    </div>
                    <div className="cata-type">
                      <p>
                        <span>Steering</span>
                      </p>
                      <p>{pictures.transmission}</p>
                    </div>
                    <div className="cata-type">
                      <p>
                        <span>Gasoline</span>
                      </p>
                      <p>{pictures.fuelCapacity}</p>
                    </div>
                  </div>
                  <div className="cata-btn">
                    <div className="cata-price">
                      <p>
                        ${pictures.price} / <span>day</span>
                      </p>
                      {pictures.isGold && (
                        <s style={{ color: "#90a3bf" }}>${pictures.isGold}</s>
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
