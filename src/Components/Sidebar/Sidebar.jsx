import React, { useState, useEffect } from "react";
import './sidebar.scss';
import ProgressBar from './ProgressBar';

const Sidebar = () => {
  const sideItems = [
    {
      type: ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"],
      capacity: ["2person", "4person", "6person", "8 or More"],
      price: [] // Add price ranges if needed
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <button className="toggle-btn" type="button" onClick={() => setIsOpen(!isOpen)}>
          <span>{isOpen ? "close" : "menu"}</span>
        </button>
        <nav>
          {sideItems.map((item, index) => (
            <div key={index}>
              <div className="sidebar-section">
                <h4>Types</h4>
                {item.type.map((type, i) => (
                  <button key={i} type="button" className="sidebar-item">
                    <span>{type}</span>
                  </button>
                ))}
              </div>
              <div className="sidebar-section">
                <h4>Capacity</h4>
                {item.capacity.map((capacity, i) => (
                  <button key={i} type="button" className="sidebar-item">
                    <span>{capacity}</span>
                  </button>
                ))}
              </div>
              <ProgressBar progress={progress} label={true} />
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
