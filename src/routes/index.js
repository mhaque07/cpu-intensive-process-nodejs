const express = require("express");
const router = express.Router();
const { Worker } = require("worker_threads");

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express API!" });
});

router.get("/sum", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 100000; i++) {
    console.log("number of iterations: " + i);
    sum = sum + i;
  }
  res.send("services is up and running!!! " + sum);
});

router.get("/compute", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    let number = Math.cos(i);
    sum = sum + number;
  }
  res.send("total compute cos value!!! " + sum);
});

router.get("/worker", (req, res) => {
  console.log(req.headers["user-agent"]);
  const worker = new Worker("./src/routes/computeIntensive.js");
  worker.on("message", (sum) => {
    res.send("services is up and running!!! " + sum);
  });
  worker.postMessage("start");
});

module.exports = router;
