import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CarCard.scss";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const CarCard = ({ car }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (car && car.id) {
      const likedCars = JSON.parse(localStorage.getItem("likedCars")) || {};
      setLiked(!!likedCars[car.id]);
    }
  }, [car]);

  const toggleLike = () => {
    if (!car || !car.id) return;

    const likedCars = JSON.parse(localStorage.getItem("likedCars")) || {};
    if (liked) {
      delete likedCars[car.id];
    } else {
      likedCars[car.id] = true;
    }
    localStorage.setItem("likedCars", JSON.stringify(likedCars));
    setLiked(!liked);
  };

  if (!car) {
    return null; // or return some placeholder
  }

  return (
    <div className="car_card">
      <div>
        <h3>{car.carName}</h3>
        <div className="car_card_icon" onClick={toggleLike}>
          {liked ? <IoMdHeart className="liked" /> : <IoMdHeartEmpty />}
        </div>
      </div>
      <img src={car.image} alt={car.carName} />
      <p>Type: {car.carType}</p>
      <p>Price: ${car.price}/day</p>
      <p>Fuel Capacity: {car.fuelCapacity}</p>
      <p>Transmission: {car.transmission}</p>
      <p>Seating: {car.seatingCapacity}</p>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    carName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    carType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    fuelCapacity: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    seatingCapacity: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarCard;
