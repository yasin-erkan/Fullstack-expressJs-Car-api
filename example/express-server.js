const express = require("express");

// Create app
const app = express();

// Response to requests
app.get("/", (req, res) => {
    res.json({message:"Hello from express-server!"});
});



// Response to "/new"
app.post("/new", (req, res) => {
   res.json({message:"This is the new page!"});
});

// Define port
const port = 3002;
app.listen(port, () => {
    console.log(`Express-Server ${port} is on mode!!!!`);
});
