import { RiArrowDropDownLine } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import "./style.scss"; // Importing component styles

const OffUp = () => {
  return (
    <div className="offup">
      <div className="row">
        <div className="col-12 col-lg-1"></div> {/* Spacer column for layout */}
        <div className="col-12 col-lg-10">
          <div className="picku">
            {/* Pickup card */}
            <div className="card">
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
                <div className="sections">
                  <p>Location</p>
                  <p className="pwords">
                    Select your city <RiArrowDropDownLine />
                  </p>
                </div>
                <div className="vertical-line"></div> {/* Vertical line separator */}
                <div className="sections">
                  <p>Date</p>
                  <p className="pwords">
                    Select your date <RiArrowDropDownLine />
                  </p>
                </div>
                <div className="vertical-line"></div> {/* Vertical line separator */}
                <div className="sections">
                  <p>Time</p>
                  <p className="pwords">
                    Select your time <RiArrowDropDownLine />
                  </p>
                </div>
              </div>
            </div>
            {/* Arrow icon */}
            <div className="arrows">
              <LuArrowUpDown />
            </div>
            {/* Drop-off card */}
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
                {/* Sections for location, date, and time */}
                <div className="sections">
                  <p>Location</p>
                  <p className="pwords">
                    Select your city <RiArrowDropDownLine />
                  </p>
                </div>
                <div className="vertical-line"></div> {/* Vertical line separator */}
                <div className="sections">
                  <p>Date</p>
                  <p className="pwords">
                    Select your date <RiArrowDropDownLine />
                  </p>
                </div>
                <div className="vertical-line"></div> {/* Vertical line separator */}
                <div className="sections">
                  <p>Time</p>
                  <p className="pwords">
                    Select your time <RiArrowDropDownLine />
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

export default OffUp;
