import React, { useEffect, useState } from "react";
import HeadStart from "./HeadStart";
import "./style.scss";

const RentalInfo = () => {
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

  const handlePickUpDateChange = (e) => {
    setPickUpDate(e.target.value);
  };

  const handlePickUpTimeChange = (e) => {
    setPickUpTime(e.target.value);
  };

  const handleDropOffDateChange = (e) => {
    setDropOffDate(e.target.value);
  };

  const handleDropOffTimeChange = (e) => {
    setDropOffTime(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="rentalinfo">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="container">
              <HeadStart
                headH3="Rental Info"
                headP="Please select your rental date"
                headStep="Step 2 of 4"
              />
              <div className="card">
                <div className="card-body">
                  <div className="radioItem">
                    <input type="radio" name="selectDelivery" id="pickUp" />
                    <label htmlFor="pickUp">Pick - Up</label>
                  </div>
                  <div className="rentaldetails">
                    <div className="form-group">
                      <label htmlFor="pickUpLocs">Locations</label>
                      <select name="locations" id="pickUpLocs">
                        {cities.map((city) => (
                          <option key={city.city} value={city.city}>
                            {city.city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="pickUpDate">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="pickUpDate"
                        value={pickUpDate}
                        onChange={handlePickUpDateChange}
                        placeholder="Select your date"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pickUpTime">Time</label>
                      <input
                        type="time"
                        className="form-control"
                        id="pickUpTime"
                        value={pickUpTime}
                        onChange={handlePickUpTimeChange}
                        placeholder="Select your time"
                      />
                    </div>
                  </div>

                  <div className="radioItem">
                    <input type="radio" name="selectDelivery" id="dropOff" />
                    <label htmlFor="dropOff">Drop - Off</label>
                  </div>
                  <div className="rentaldetails">
                    <div className="form-group">
                      <label htmlFor="dropOffLocs">Locations</label>
                      <select name="locations" id="dropOffLocs">
                        {cities.map((city) => (
                          <option key={city.city} value={city.city}>
                            {city.city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="dropOffDate">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="dropOffDate"
                        value={dropOffDate}
                        onChange={handleDropOffDateChange}
                        placeholder="Select your date"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dropOffTime">Time</label>
                      <input
                        type="time"
                        className="form-control"
                        id="dropOffTime"
                        value={dropOffTime}
                        onChange={handleDropOffTimeChange}
                        placeholder="Select your time"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RentalInfo;
