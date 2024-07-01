import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.scss";

const StarRating = ({
  totalStars = 3,
  size = 18,
  color = "#ffc107",
  emptyColor = "#e4e5e9",
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating); // State to hold the current rating
  const [hover, setHover] = useState(null); // State to track hovered star

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    if (onRatingChange) {
      onRatingChange(ratingValue); // Call the callback function if provided
    }
  };

  return (
    <div className="star-rating">
      {" "}
      {/* Container for the star rating component */}
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1; // Calculate the rating value (1-based index)

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)} // Update rating on click
              style={{ display: "none" }} // Hide the actual radio input
            />
            <FaStar
              className="star" // Class for styling the star icon
              color={ratingValue <= (hover || rating) ? color : emptyColor} // Color based on hover or current rating
              size={size} // Size of the star icon
              onMouseEnter={() => setHover(ratingValue)} // Set hover state on mouse enter
              onMouseLeave={() => setHover(null)} // Clear hover state on mouse leave
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
