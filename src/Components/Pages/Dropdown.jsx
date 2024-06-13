import React from "react";

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="dropdown">
      {/* Display the label for the dropdown */}
      <label>{label}</label>
      {/* Dropdown/select element */}
      <select value={value} onChange={onChange}>
        {/* Map through options array to render each option */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
