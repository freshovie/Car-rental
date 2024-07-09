import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Label from "./Label/Label";
import Footer from "./Footer/Footer";
import {
  CarDisplay,
  OffUp,
  PopularCar,
  Recommended,
  ShowMore,
  Sidebar,
  Content,
  OffUp2,
  Ddetails,
  CarReviews,
  RecentCar,
  Recommend,
  Payment,
  PMethod,
  Sidebar2,
  Confirmational,
  Rentalnfo,
} from "./Components/Pages";
import NotFound from "./Components/NotFound/NotFound";

const Display = () => {
  return (
    <Router>
      <div className="display">
        <Label />
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <CarDisplay />
              <OffUp />
              <PopularCar />
              <Recommended />
              <ShowMore />
            </Route>
            <Route path="/category">
              <Sidebar />
              <OffUp2 />
              <Content />
              <ShowMore />
            </Route>
            <Route path="/cardetails">
              <Sidebar />
              <Ddetails />
              <CarReviews />
              <RecentCar />
              <Recommend />
            </Route>
            <Route path="/payment">
              <Sidebar2 />
              <Payment />
              <Rentalnfo />
              <PMethod />
              <Confirmational />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Display;
