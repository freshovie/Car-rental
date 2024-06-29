import React from "react";
import CarDetails from "./CarDetails";

const Ddetails = () => {
  // Set the carId to be passed to the CarDetails component
  const carId = 6; // Example carId

  return (
    <div>
      {/* Render the CarDetails component with the specified carId */}
      <CarDetails carId={ carId } />
    </div>
  );
};

export default Ddetails;
