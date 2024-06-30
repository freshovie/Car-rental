import React, { useEffect, useState } from "react";
import HeadStart from "./HeadStart";

const Rentalnfo = () => {
  const [cities, setCities] = useState("");
  const [time, setTime] = useState("");

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

  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
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
                    <input type="radio" name="selectDelivery" />
                    <label>Pick - Up</label>
                  </div>
                  <div className="rentaldetails">
                    <div className="form-group">
                      <label htmlFor="locs">Locations</label>
                      <select name="locations" id="locs">
                        {cities.map((city, index) => (
                          <option key={index} value={city.city}>
                            {city.city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="rentalDate">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="rentalDate"
                        value={date}
                        onChange={handleDateChange}
                        placeholder="Select your date"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rentalTime">Time</label>
                      <input
                        type="time"
                        className="form-control"
                        id="rentalTime"
                        value={time}
                        onChange={handleTimeChange}
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

export default Rentalnfo;
