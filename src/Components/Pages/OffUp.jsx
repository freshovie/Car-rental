import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuArrowUpDown } from "react-icons/lu";
import "./style.scss"; // Importing component styles

const Section = ({ title, children }) => (
  <div className="section">
    <p>{title}</p>
    <div className="dropdown">
      {children}
    </div>
  </div>
);

const OffUp = () => {
  const [cities, setCities] = useState([]);
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/population/cities"
        );
        const data = await response.json();
        setCities(data.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handlePickUpDateChange = (e) => setPickUpDate(e.target.value);
  const handlePickUpTimeChange = (e) => setPickUpTime(e.target.value);
  const handleDropOffDateChange = (e) => setDropOffDate(e.target.value);
  const handleDropOffTimeChange = (e) => setDropOffTime(e.target.value);

  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="offup"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        <div className="col-12 col-lg-1"></div> {/* Spacer column for layout */}
        <div className="col-12 col-lg-10">
          <div className="picku">
            {/* Pickup card */}
            <motion.div className="card" variants={itemVariants}>
              <div className="topradio">
                <input
                  type="radio"
                  id="option"
                  name="options"
                  value="option"
                  checked={true}
                  readOnly
                />
                <h5>Pick-Up</h5>
              </div>
              <div className="card-body">
                <div className="container">
                  <Section title="Location">
                    <select name="locations" id="pickUpLocs">
                      {cities.map((city) => (
                        <option key={city.city} value={city.city}>
                          {city.city}
                        </option>
                      ))}
                    </select>
                  </Section>
                  <Section title="Date">
                    <input
                      type="date"
                      className="form-control"
                      id="pickUpDate"
                      value={pickUpDate}
                      onChange={handlePickUpDateChange}
                      placeholder="Select your date"
                    />
                  </Section>
                  <Section title="Time">
                    <input
                      type="time"
                      className="form-control"
                      id="pickUpTime"
                      value={pickUpTime}
                      onChange={handlePickUpTimeChange}
                      placeholder="Select your time"
                    />
                  </Section>
                </div>
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
                  id="option"
                  name="options"
                  value="option"
                  checked={true}
                  readOnly
                />
                <h5>Drop-Off</h5>
              </div>
              <div className="card-body">
                <div className="container">
                  <Section title="Location">
                    <select name="locations" id="dropOffLocs">
                      {cities.map((city) => (
                        <option key={city.city} value={city.city}>
                          {city.city}
                        </option>
                      ))}
                    </select>
                  </Section>
                  <Section title="Date">
                    <input
                      type="date"
                      className="form-control"
                      id="dropOffDate"
                      value={dropOffDate}
                      onChange={handleDropOffDateChange}
                      placeholder="Select your date"
                    />
                  </Section>
                  <Section title="Time">
                    <input
                      type="time"
                      className="form-control"
                      id="dropOffTime"
                      value={dropOffTime}
                      onChange={handleDropOffTimeChange}
                      placeholder="Select your time"
                    />
                  </Section>
                </div>
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
