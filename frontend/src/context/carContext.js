// CarContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import carData from "./db.json"; // Import your local db.json file
import * as assetImages from "../assets/assets"; // Import all images from your assets file

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [recommendedCars, setRecommendedCars] = useState([]);

  useEffect(() => {
    const processedCars = processCarData(carData.cars);
    const processedRecommendedCars = processCarData(carData.RecommendedCars);
    setCars(processedCars);
    setRecommendedCars(processedRecommendedCars);
  }, []);

  const processCarData = (carArray) => {
    return carArray.map((car) => ({
      ...car,
      price: Number(car.price), // Ensure price is a number
      image: assetImages[car.image.split("/").pop().split(".")[0]] || car.image,
    }));
  };

  return (
    <CarContext.Provider value={{ cars, recommendedCars }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCars = () => useContext(CarContext);
