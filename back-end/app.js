// DEPENDENCIES
const express = require("express");
const app = express();
const snackController = require("./controllers/snackController.js")
const cors = require("cors");
// CONFIGURATION

// MIDDLEWARE
app.use(express.json());
app.use(cors());

require("dotenv").config();

// ROUTES
app.get("/", (req, res)=>{
    res.send("Get Snack'n at Snack-a-log!");
});

app.use("/snacks", snackController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;