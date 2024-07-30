import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CarDetails from "./pages/CarDetails/CarDetails";
import CarPayment from "./pages/CarPayment/CarPayment";
import CategoryFilter from "./pages/CategoryFilter/CategoryFilter";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardetails" element={<CarDetails />} />
          <Route path="/cardetails" element={<CarPayment />} />
          <Route path="/categoryfilter" element={<CategoryFilter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
