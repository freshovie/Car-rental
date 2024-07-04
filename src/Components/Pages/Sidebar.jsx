import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import './style.scss';

const Sidebar = () => {
  const [progress, setProgress] = useState(25); // State to manage the progress of the price slider
  const progressBarRef = useRef(null); // Reference to the progress bar element

  // Function to handle mouse down event on the progress bar
  const handleMouseDown = (e) => {
    const progressBar = progressBarRef.current; // Get the progress bar element
    const progressBarRect = progressBar.getBoundingClientRect(); // Get its bounding rectangle

    // Function to handle mouse move events
    const onMouseMove = (moveEvent) => {
      // Calculate new progress based on mouse position relative to the progress bar width
      const newProgress =
        ((moveEvent.clientX - progressBarRect.left) / progressBarRect.width) *
        100;
      // Ensure the progress is within 0 to 100
      setProgress(Math.min(Math.max(newProgress, 0), 100));
    };

    // Function to handle mouse up event and remove event listeners
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    // Add event listeners for mouse move and mouse up events
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  // Data for types of cars and their counts
  const types = [
    { name: "Sports", count: 10 },
    { name: "SUV", count: 12 },
    { name: "MPV", count: 16 },
    { name: "Sedan", count: 20 },
    { name: "Coupe", count: 14 },
    { name: "Hatchback", count: 14 },
  ];

  // Data for capacities of cars and their counts
  const capacities = [
    { name: "2 Person", count: 10 },
    { name: "4 Person", count: 14 },
    { name: "6 Person", count: 12 },
    { name: "8 or More", count: 16 },
  ];

  // Function to render checkboxes for a list of items
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
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animations in milliseconds
    });
  }, []);

  return (
    <div className="sidebar" data-aos="fade-out"> {/* Main container for the sidebar */}
      <div className="sidebar-first"> {/* First section of the sidebar */}
        <div className="sidebar__header"> {/* Header for types section */}
          <h5>Type</h5>
        </div>
        <ul>{renderCheckboxes(types)}</ul> {/* Render checkboxes for types */}
      </div>
      <div className="sidebar-second"> {/* Second section of the sidebar */}
        <div className="sidebar__header"> {/* Header for capacities section */}
          <h5>Capacity</h5>
        </div>
        <ul>{renderCheckboxes(capacities)}</ul> {/* Render checkboxes for capacities */}
      </div>
      <div className="sidebar-third"> {/* Third section of the sidebar for price filter */}
        <div className="sidebar__header"> {/* Header for price filter */}
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
            {progress.toFixed(0)}$ {/* Display current progress value */}
          </div>
        </div>
        <p>Max. $100.00</p> {/* Text indicating maximum price */}
      </div>
    </div>
  );
};

export default Sidebar;
