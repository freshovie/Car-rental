import React, { useState }from "react";
import "./style.scss";
import { Koenigsegg } from "../../assets";
import { FaHeart, FaGasPump } from "react-icons/fa6";
import { TbWheel } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";

const PopularCar = () => {
    // Create an array of liked states for each card
  const [liked, setLiked] = useState(Array(4).fill(false));

  // Function to handle like click for each card
  const handleLikeClick = (index) => {
    setLiked((prevLiked) =>
      prevLiked.map((item, idx) => (idx === index ? !item : item))
    );
  };
  return (
    <div className="PopularCar">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="card-tags">
            {Array.from({ length: 4 }, (_, index) => (
              <div className="icard" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="first">
                      <div className="first-sect">
                        <h3>Koenigsegg</h3>
                        <p>Sport</p>
                      </div>
                      <FaHeart
                        style={{ color: liked[index] ? 'red' : 'grey' }}
                        onClick={() => handleLikeClick(index)}
                      />
                    </div>
                    <img src={Koenigsegg} alt="Koenigsegg car" />
                    <div className="first-icons">
                      <div className="icons">
                        <FaGasPump />
                        <p>90L</p>
                      </div>
                      <div className="icons">
                        <TbWheel />
                        <p>Manual</p>
                      </div>
                      <div className="icons">
                        <MdPeopleAlt />
                        <p>2 People</p>
                      </div>
                    </div>
                    <div className="price">
                      <p>
                        <span>$99.00/</span>day
                      </p>
                      <button>Rent Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default PopularCar;
