import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Label from '../Label/Label';
import Footer from '../Footer/Footer';
import {
  CarDisplay,
  OffUp,
  PopularCar,
  Headpage,
  Recommended,
  ShowMore,
  Sidebar,
  Content
} from './Pages';
import { Main4042 } from '../assets';

const Display = () => {
  const notFoundStyles = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const imgStyles = {
    maxWidth: '100%',
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
              <Content />
              <ShowMore />
            </Route>
            <Route path="*">
              <div style={notFoundStyles}>
                <img src={Main4042} alt="404" style={imgStyles} />
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
