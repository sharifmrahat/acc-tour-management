const express = require("express");
const app = express();
const cors = require("cors");

//routes
const toursRoute= require('./routes/tours.route')

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.use('/api/v1/tours',toursRoute)



module.exports = app;