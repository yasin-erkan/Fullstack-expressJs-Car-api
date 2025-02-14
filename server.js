const express = require("express");
const { logger } = require("./middleware");
const carRoutes = require("./routes/carRoutes");

// 1- Setup
const app = express();
const PORT = 3000;

// Middleware
app.use(logger);

// Middleware to process request body/header/params
app.use(express.json());

// 3- Define routes/endpoints
app.use(carRoutes);  // Fixed: Removed parentheses here

// 2- Start listening on the specified port (port=3000)
app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
