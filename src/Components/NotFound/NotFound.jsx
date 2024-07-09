import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Main4042 } from "../../assets"; // Update with your actual path

// Styles for the container
const notFoundStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f8f9fa",
};

// Styles for the image
const imgStyles = {
  width: "100%",
  maxWidth: "1000px",
  marginBottom: "20px",
  borderRadius: "10px"
};

// Styles for the button
const buttonStyles = {
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  padding: "15px 30px",
  fontSize: "18px",
  fontWeight: "bold",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

// Styles for the button on hover
const buttonHoverStyles = {
  backgroundColor: "#0056b3",
};

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Animation variants for the image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Animation variants for the button
const buttonVariants = {
  hover: { scale: 1.1 },
};

// The NotFound component
const NotFound = () => (
  <motion.div
    style={notFoundStyles}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Animated image */}
    <motion.img
      src={Main4042}
      alt="404"
      style={imgStyles}
      variants={imageVariants}
    />
    {/* Header text */}
    <h1>Page Not Found</h1>
    {/* Description text */}
    <p>Oops! The page you are looking for does not exist.</p>
    {/* Link to home page */}
    <Link to="/">
      {/* Animated button */}
      <motion.button
        type="button"
        style={buttonStyles}
        variants={buttonVariants}
        whileHover="hover"
        onMouseOver={(e) => {
          e.target.style.backgroundColor = buttonHoverStyles.backgroundColor;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = buttonStyles.backgroundColor;
        }}
      >
        Return to Home
      </motion.button>
    </Link>
  </motion.div>
);

export default NotFound;
