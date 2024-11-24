const express = require("express");
const routes = require("./routes");

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api", routes);

module.exports = app;
