import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuArrowUpDown } from "react-icons/lu";
import "./style.scss"; // Importing component styles

const Section = ({ title, children }) => (
  <div className="section">
    <p>{title}</p>
    <div className="dropdown">{children}</div>
  </div>
);

const OffUp = () => {
  const [cities, setCities] = useState([]);
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

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

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const renderCard = (type, date, time, handleDateChange, handleTimeChange) => (
    <motion.div className="card">
      <div className="topradio">
        <input type="radio" id="option" name="options" value="option" checked readOnly />
        <h5>{type}</h5>
      </div>
      <div className="card-body">
        <div className="container">
          <Section title="Location">
            <select name="locations">
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
              value={date}
              onChange={handleDateChange}
              placeholder="Select your date"
            />
          </Section>
          <Section title="Time">
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={handleTimeChange}
              placeholder="Select your time"
            />
          </Section>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div className="offup2">
      <div className="row">
        <div className="col-12 col-lg-1"></div> {/* Spacer column for layout */}
        <div className="col-12 col-lg-10">
          <div className="picku">
            {isFlipped
              ? renderCard("Drop-Off", dropOffDate, dropOffTime, handleDropOffDateChange, handleDropOffTimeChange)
              : renderCard("Pick-Up", pickUpDate, pickUpTime, handlePickUpDateChange, handlePickUpTimeChange)}
            <div className="arrows" onClick={handleFlip}>
              <LuArrowUpDown />
            </div>
            {isFlipped
              ? renderCard("Pick-Up", pickUpDate, pickUpTime, handlePickUpDateChange, handlePickUpTimeChange)
              : renderCard("Drop-Off", dropOffDate, dropOffTime, handleDropOffDateChange, handleDropOffTimeChange)}
          </div>
        </div>
        <div className="col-12 col-lg-1"></div> {/* Spacer column for layout */}
      </div>
    </motion.div>
  );
};

export default OffUp;
