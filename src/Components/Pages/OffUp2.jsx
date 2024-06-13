import { RiArrowDropDownLine } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import "./style.scss"; // Importing component styles

const Offup2 = () => {
  return (
    <div className="offup2"> {/* Container for the component */}
      <div className="row"> {/* Bootstrap row for layout */}
        <div className="col-12 col-lg-1"></div> {/* Spacer column for layout */}
        <div className="col-12 col-lg-10">
          <div className="picku"> {/* Container for pick-up and drop-off options */}
            {/* Pick-Up card */}
            <div className="card">
              <div className="topradio">
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="option1"
                  checked={true} // Example of being checked, can be dynamic based on state
                  readOnly
                />
                <h5>Pick-Up</h5>
              </div>
              <div className="card-body">
                {/* Sections for pick-up location, date, and time */}
                <div className="sections">
                  <p>Location</p>
                  <p className="pwords">
                    Select your city <RiArrowDropDownLine /> {/* Dropdown arrow icon */}
                  </p>
                </div>
                <div className="vertical-line"></div> {/* Vertical line separator */}
                <div className="sections">
                  <p>Date</p>
                  <p className="pwords">
                    Select your date <RiArrowDropDownLine /> {/* Dropdown arrow icon */}
                  </p>
                </div>
                <div className="vertical-line"></div> {/* Vertical line separator */}
                <div className="sections">
                  <p>Time</p>
                  <p className="pwords">
                    Select your time <RiArrowDropDownLine /> {/* Dropdown arrow icon */}
                  </p>
                </div>
              </div>
            </div>
            <div className="arrows">
              <LuArrowUpDown /> {/* Arrow icon for visual separation */}
            </div>
            {/* Drop-Off card */}
            <div className="card">
              <div className="topradio">
                <input
                  type="radio"
                  id="option2"
                  name="options2"
                  value="option2"
                  checked={true} // Example of being checked, can be dynamic based on state
                  readOnly
                />
                <h5>Drop-Off</h5>
              </div>
              <div className="card-body">
                {/* Sections for drop-off location, date, and time */}
                <div className="sections">
                  <p>Location</p>
                  <p className="pwords">
                    Select your city <RiArrowDropDownLine /> {/* Dropdown arrow icon */}
                  </p>
                </div>
                <div className="vertical-line"></div> {/* Vertical line separator */}
                <div className="sections">
                  <p>Date</p>
                  <p className="pwords">
                    Select your date <RiArrowDropDownLine /> {/* Dropdown arrow icon */}
                  </p>
                </div>
                <div className="vertical-line"></div> {/* Vertical line separator */}
                <div className="sections">
                  <p>Time</p>
                  <p className="pwords">
                    Select your time <RiArrowDropDownLine /> {/* Dropdown arrow icon */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-1"></div> {/* Spacer column for layout */}
      </div>
    </div>
  );
};

export default Offup2;
