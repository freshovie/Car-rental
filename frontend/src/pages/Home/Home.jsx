import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import {
  Koenigsegg,
  NissanGT,
  ellipse,
  arrowsgroup,
} from "../../assets/assets";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <main>
        <div className="main_container">
          <div className="jumbotron">
            <Jumbotron
              headText="The Best Platform for Car Rental"
              desc="Providing cheap car rental services and safe and comfortable facilities."
              img={Koenigsegg}
              buttonStyle="button_dark_blue"
              className="jumb_one"
              backdropImg={ellipse}
              backdropPos="jumb_backdrop_position"
            />
            <Jumbotron
              headText="Easy way to rent a car at a low price"
              desc="Providing cheap car rental services and safe and comfortable facilities."
              img={NissanGT}
              buttonStyle="button_light_blue"
              backdropImg={arrowsgroup}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
