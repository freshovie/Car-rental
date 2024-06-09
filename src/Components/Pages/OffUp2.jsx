import { RiArrowDropDownLine } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import "./style.scss";

const Offup2 = () => {
  return (
    <div className="offup2">
      <div className="row">
        <div className="col-12 col-lg-1"></div>
        <div className="col-12 col-lg-10">
          <div className="picku">
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
                <div className="sections">
                  <p>Location</p>
                  <p className="pwords">
                    Select your city <RiArrowDropDownLine />
                  </p>
                </div>
                <div className="vertical-line"></div>
                <div className="sections">
                  <p>Date</p>
                  <p className="pwords">
                    Select your date <RiArrowDropDownLine />
                  </p>
                </div>
                <div className="vertical-line"></div>
                <div className="sections">
                  <p>Time</p>
                  <p className="pwords">
                    Select your time <RiArrowDropDownLine />
                  </p>
                </div>
              </div>
            </div>
            <div className="arrows">
              <LuArrowUpDown />
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
                  <p>Location</p>
                  <p className="pwords">
                    Select your city <RiArrowDropDownLine />
                  </p>
                </div>
                <div className="vertical-line"></div>
                <div className="sections">
                  <p>Date</p>
                  <p className="pwords">
                    Select your date <RiArrowDropDownLine />
                  </p>
                </div>
                <div className="vertical-line"></div>
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
        <div className="col-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default Offup2;
