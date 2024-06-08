import React, { useState, useRef } from "react";
import './style.scss';

const Sidebar = () => {
  const [progress, setProgress] = useState(25);
  const progressBarRef = useRef(null);

  const handleMouseDown = (e) => {
    const progressBar = progressBarRef.current;
    const progressBarRect = progressBar.getBoundingClientRect();

    const onMouseMove = (moveEvent) => {
      const newProgress =
        ((moveEvent.clientX - progressBarRect.left) / progressBarRect.width) *
        100;
      setProgress(Math.min(Math.max(newProgress, 0), 100));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const types = [
    { name: "Sports", count: 10 },
    { name: "SUV", count: 12 },
    { name: "MPV", count: 16 },
    { name: "Sedan", count: 20 },
    { name: "Coupe", count: 14 },
    { name: "Hatchback", count: 14 },
  ];

  const capacities = [
    { name: "2 Person", count: 10 },
    { name: "4 Person", count: 14 },
    { name: "6 Person", count: 12 },
    { name: "8 or More", count: 16 },
  ];

  const renderCheckboxes = (items) => {
    return items.map((item, index) => (
      <div key={index}>
        <input type="checkbox" name={item.name.toLowerCase().replace(" ", "")} />
        <label>
          {item.name} <span>({item.count})</span>
        </label>
      </div>
    ));
  };
  return (
    <div className="sidebar">
      <div className="sidebar-first">
        <div className="sidebar__header">
          <h5>Type</h5>
        </div>
        <ul>{renderCheckboxes(types)}</ul>
      </div>
      <div className="sidebar-second">
        <div className="sidebar__header">
          <h5>Capacity</h5>
        </div>
        <ul>{renderCheckboxes(capacities)}</ul>
      </div>
      <div className="sidebar-third">
        <div className="sidebar__header">
          <h5>Price</h5>
        </div>
        <div
          className="progress"
          ref={progressBarRef}
          onMouseDown={handleMouseDown}
          style={{
            position: "relative",
            height: "30px",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#007bff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress.toFixed(0)}$
          </div>
        </div>
        <p>Max. $100.00</p>
      </div>
    </div>
  );
};

export default Sidebar;
