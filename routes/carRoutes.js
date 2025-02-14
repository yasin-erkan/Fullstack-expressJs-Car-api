const express = require("express");
const {
  getAllCars,
  getCar,
  deleteCar,
  updateCar,
  createCar,
} = require("../controllers");
const idControl = require("../middleware/idControl");

// Router allows us to define routes outside the server.js file
const router = express.Router();

// Define endpoints and their corresponding functions for the router
router
  .route("/api/v1/cars")
  .get(getAllCars) //
  .post(createCar);

router
  .route("/api/v1/cars/:id")
  .get(idControl, getCar)
  .patch(idControl, updateCar)
  .delete(idControl, deleteCar);

// Export the router to be used in server.js
module.exports = router;
