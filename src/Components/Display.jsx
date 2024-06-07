import Navbar from "../Navbar/Navbar";
import Label from "../Label/Label";
import Footer from "../Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import {
  CarDisplay,
  OffUp,
  PopularCar,
  Headpage,
  Recommended,
  ShowMore,
} from "./Pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Display = () => {
  return (
    <div>
      <Router>
        <div className="display">
          <Label />
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <CarDisplay />
                <OffUp />
                <Headpage />
                <PopularCar />
                <Recommended />
                <ShowMore />
              </Route>
              <Route path="/sidebar">
                <Sidebar />
                <PopularCar />
              </Route>
              <Route path="*">
              <div>404 Not Found</div>
            </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default Display;
