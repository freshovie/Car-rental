import React, { useState } from "react";
import './style.scss';
import Dropdown from "./Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Offup3 = () => {
  const [filter, setFilter] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffDate, setDropoffDate] = useState(new Date());
  const [dropoffTime, setDropoffTime] = useState("10:00");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="offup3">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="picku">
            <div className="card picku-card">
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
                <div className="sections">
                  <Dropdown
                    label="Location"
                    options={[
                      { value: "all", label: "All" },
                      { value: "city1", label: "City 1" },
                      { value: "city2", label: "City 2" },
                      { value: "city3", label: "City 3" },
                    ]}
                    value={filter}
                    onChange={handleFilterChange}
                  />
                </div>
                <div className="vertical-line"></div>
                <div className="sections">
                  <p>Date</p>
                  <DatePicker
                    selected={pickupDate}
                    onChange={(date) => setPickupDate(date)}
                  />
                </div>
                <div className="vertical-line"></div>
                <div className="sections">
                  <p>Time</p>
                  <TimePicker
                    onChange={setPickupTime}
                    value={pickupTime}
                  />
                </div>
              </div>
            </div>
            <div className="card">
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
                <div className="sections">
                  <Dropdown
                    label="Location"
                    options={[
                      { value: "all", label: "All" },
                      { value: "city1", label: "City 1" },
                      { value: "city2", label: "City 2" },
                      { value: "city3", label: "City 3" },
                    ]}
                    value={filter}
                    onChange={handleFilterChange}
                  />
                </div>
                <div className="vertical-line"></div>
                <div className="sections">
                  <p>Date</p>
                  <DatePicker
                    selected={dropoffDate}
                    onChange={(date) => setDropoffDate(date)}
                  />
                </div>
                <div className="vertical-line"></div>
                <div className="sections">
                  <p>Time</p>
                  <TimePicker
                    onChange={setDropoffTime}
                    value={dropoffTime}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offup3;
