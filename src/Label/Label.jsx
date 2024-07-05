import React from 'react'; // Import React
import { Command } from '../assets'; // Import the Command image from the assets folder
import './label.scss'; // Import the SCSS file for styling

// Define the Label functional component
function Label() {
  return (
    <div className="label">
      {/* Image element displaying the Command image */}
      <img src={Command} alt="Command icon" />
      {/* Heading element displaying the text */}
      <h3>High Fidelity Dashboard - Home Rent</h3>
    </div>
  );
}

// Export the Label component as the default export
export default Label;
