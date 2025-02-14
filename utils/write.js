const fs = require("fs");

// Writes the provided car data to the JSON file

module.exports = (cars) => {
  fs.writeFile(
    `${__dirname}/../data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      if (err) {
        console.log("An error occurred while updating the file", err);
      }
      return;
    }
  );
};
