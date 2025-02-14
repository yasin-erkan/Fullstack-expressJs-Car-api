const fs = require("fs");

// Get car data
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

module.exports = (req, res, next) => {
  // Find the element in the array with the ID from the request parameters
  const found = cars.find((car) => car.id === req.params.id);

  // If the element is not found, send an error response
  if (!found)
    return res
      .status(404)
      .json({ message: "No car found with the provided ID" });

  // Add the found car to the request object for the next middleware or controller
  req.car = found;

  // If the ID is valid, proceed to the next controller function
  next();
};
