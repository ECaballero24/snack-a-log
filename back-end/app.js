// DEPENDENCIES
const express = require("express");
const snackController = require('./controllers/snackController.js')
const cors = require('cors');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());

// ROUTES
app.use(express.json());
app.get("/",(req, res) => {
    res.send('Welcome to Snack-a-log')
});

app.use("/snacks", snackController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;