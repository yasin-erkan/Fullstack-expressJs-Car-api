const fs = require("fs");
const crypto = require("crypto");
const write = require("../utils/write");


/*
console.log(__dirname); => bulundugumuz klasotun yolu
console.log(__filename); => bulundugumuz dosyanin yolu
*/

// Get car data by converting Json to javascript(JSON.parse)
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

// Get all cars
exports.getAllCars = (req, res) => {
  res.status(200).json({
    message: "Car data retrieved",
    results: cars.length,
    cars,
  });
};

// Add a new car
exports.createCar = (req, res) => {
  // Add an ID to the car data
  const newCar = { ...req.body, id: crypto.randomUUID() };

  // Add the new car to the array
  cars.push(newCar);

  // Update the JSON file
  write(cars);

  // Send response to client
  res.status(201).json({
    message: "New car created",
    car: newCar,
  });
};

// Get a single car
exports.getCar = (req, res) => {
  res.status(200).json({
    message: " A car found",
    car: req.car,
  });
};

// Delete a car
exports.deleteCar = (req, res) => {
  // Remove the car with the given ID from the array
  cars = cars.filter((car) => car.id !== req.params.id);

  // Update the JSON file
  write(cars);

  // Send response to client
  res.status(204).json({
    message: "Car deleted",
  });
};

// Update a car
exports.updateCar = (req, res) => {
  // Get updated values from the request body
  const updatedData = req.body;

  // Create a new object with updated values
  const updatedCar = { ...req.car, ...updatedData };

  // Find the index of the car to be updated
  const index = cars.findIndex((car) => car.id === updatedCar.id);

  // Replace the old car with the updated one
  cars.splice(index, 1, updatedCar);

  // Update the JSON file
  write(cars);

  // Send response to client
  res.status(200).json({
    message: "Car updated",
    car: updatedCar,
  });
};
