// DEPENDENCIES
const express = require("express");
const app = express();
const snackController = ("./controllers/snackController.js")
const cors = require("cors")
// CONFIGURATION

// MIDDLEWARE
app.use(cors());
app.use(express.json());

require("dotenv").config();

// ROUTES
app.get("/", (req, res)=>{
    res.send("<h1>Get Snack'n at Snack-a-log!</h1>");
})

app.use("/snacks", snackController);


app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;