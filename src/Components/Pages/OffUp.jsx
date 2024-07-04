import React from "react";
import { motion } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import "./style.scss"; // Importing component styles

const OffUp = () => {
  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
    
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div className="offup" variants={containerVariants} initial="hidden" animate="visible">
      <div className="row">
        <div className="col-12 col-lg-1"></div> {/* Spacer column for layout */}
        <div className="col-12 col-lg-10">
          <div className="picku">
            {/* Pickup card */}
            <motion.div className="card" variants={itemVariants}>
              <div className="topradio">
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="option1"
                  checked={true}
                  readOnly
                />
                <h5>Pick-Up</h5>
              </div>
              <div className="card-body">
                {/* Sections for location, date, and time */}
                {["Location", "Date", "Time"].map((title, index) => (
                  <React.Fragment key={index}>
                    <div className="sections">
                      <p>{title}</p>
                      <p className="pwords">
                        Select your {title.toLowerCase()} <RiArrowDropDownLine />
                      </p>
                    </div>
                    {index < 1 && <div className="vertical-line"></div>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
            {/* Arrow icon */}
            <div className="arrows">
              <LuArrowUpDown />
            </div>
            {/* Drop-off card */}
            <motion.div className="card" variants={itemVariants}>
              <div className="topradio">
                <input
                  type="radio"
                  id="option2"
                  name="options2"
                  value="option2"
                  checked={true}
                  readOnly
                />
                <h5>Drop-Off</h5>
              </div>
              <div className="card-body">
                {/* Sections for location, date, and time */}
                {["Location", "Date", "Time"].map((title, index) => (
                  <React.Fragment key={index}>
                    <div className="sections">
                      <p>{title}</p>
                      <p className="pwords">
                        Select your {title.toLowerCase()} <RiArrowDropDownLine />
                      </p>
                    </div>
                    {index < 1 && <div className="vertical-line"></div>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="col-12 col-lg-1"></div> {/* Spacer column for layout */}
      </div>
    </motion.div>
  );
};

export default OffUp;
