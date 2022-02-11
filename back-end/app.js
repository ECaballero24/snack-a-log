// DEPENDENCIES

const express = require("express");
// const cors = require("cors")
const snackController = ("./controllers/snackController.js")
// CONFIGURATION
const app = express();

// MIDDLEWARE
// app.use(cors());
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
