import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.scss'; // Optional: Create a SCSS file for styling if needed

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0); // State to hold the current rating
  const [hover, setHover] = useState(null); // State to track hovered star

  return (
    <div className="star-rating"> {/* Container for the star rating component */}
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1; // Calculate the rating value (1-based index)

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)} // Update rating on click
              style={{ display: 'none' }} // Hide the actual radio input
            />
            <FaStar
              className="star" // Class for styling the star icon
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} // Color based on hover or current rating
              size={18} // Size of the star icon
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
