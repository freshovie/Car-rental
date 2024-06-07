import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Label from '../Label/Label';
import Footer from '../Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';
import {
  CarDisplay,
  OffUp,
  PopularCar,
  Headpage,
  Recommended,
  ShowMore,
} from './Pages';
import { Main4041 } from '../assets';

const Display = () => {
  const notFoundStyles = {
    textAlign: 'center',
    margin: '100px 0',
  };

  const imgStyles = {
    maxWidth: '100%',
    height: 'auto',
    width: '100%'
  };

  const buttonStyles = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '1rem',
    borderRadius: '5px',
  };

  const buttonHoverStyles = {
    backgroundColor: '#0056b3',
  };

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
              <div style={notFoundStyles}>
                <img src={Main4041} alt="404" style={imgStyles} />
                <Link to="/">
                  <button
                    type="button"
                    style={buttonStyles}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = buttonHoverStyles.backgroundColor;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = buttonStyles.backgroundColor;
                    }}
                  >
                    Return to Home
                  </button>
                </Link>
              </div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Display;
