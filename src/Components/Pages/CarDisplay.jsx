import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import AOS from "aos"; // Import AOS for animations on scroll
import "./style.scss"; // Import SCSS file for styling
import { Ad1, Ad2, Koenigsegg, Nissan } from "../../assets"; // Import image assets

const CarDisplay = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animations in milliseconds
    });
  }, []);

  // Variants for the container element animations
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Initial hidden state
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3, // Delay before child elements start animating
        staggerChildren: 0.2, // Delay between each child element's animation
      },
    },
  };

  // Variants for the item elements animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Initial hidden state
    visible: { y: 0, opacity: 1 }, // Visible state
    hover: { scale: 1.2 }, // Scale up on hover
  };

  return (
    <div className="car-display">
      <div className="row">
        {/* Empty column for spacing on the left side */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        
        {/* Main content column */}
        <div className="col-sm-12 col-md-12 col-lg-10">
          <motion.div
            className="car-cards"
            variants={containerVariants} // Apply container variants
            initial="hidden" // Initial state
            animate="visible" // Animation state
            data-aos="fade-up" // Apply AOS animation
          >
            {/* First car display card */}
            <motion.div className="car1d" variants={itemVariants}>
              {/* Background image for the first card */}
              <img src={Ad1} alt="Ad1" className="w-100" />
              
              {/* Inner content of the first card */}
              <div className="innercar">
                <motion.h1 variants={itemVariants}>
                  The Best Platform
                  <br /> for Car Rental
                </motion.h1>
                <motion.p variants={itemVariants}>
                  Ease of doing a car rental safely <br /> and reliably. Of
                  course at a low price.
                </motion.p>
                <motion.button className="rentbtn1" variants={itemVariants}>
                  Rental Car
                </motion.button>
              </div>
              
              {/* Foreground car image with hover effect */}
              <motion.div className="fastcar" whileHover="hover" variants={itemVariants}>
                <img src={Koenigsegg} alt="Koenigsegg" className="w-100" />
              </motion.div>
            </motion.div>

            {/* Second car display card */}
            <motion.div className="car1d" variants={itemVariants}>
              {/* Background image for the second card */}
              <img src={Ad2} alt="Ad2" className="w-100" />
              
              {/* Inner content of the second card */}
              <div className="innercar">
                <motion.h1 variants={itemVariants}>
                  Easy way to rent a <br /> car at a low price
                </motion.h1>
                <motion.p variants={itemVariants}>
                  Providing cheap car rental services <br /> and safe and
                  comfortable facilities.
                </motion.p>
                <motion.button className="rentbtn2" variants={itemVariants}>
                  Rental Car
                </motion.button>
              </div>
              
              {/* Foreground car image with hover effect */}
              <motion.div className="fastcar" whileHover="hover" variants={itemVariants}>
                <img src={Nissan} alt="Nissan" className="w-100" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Empty column for spacing on the right side */}
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default CarDisplay;
