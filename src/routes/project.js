const express = require("express");
const router = express.Router();
const Circle = require("../models/Circle");
const drawCircle = require("../lib/drawCircle");

// ADD

router.get("/add", async (req, res) => {
  try {
    const data = new Circle({
      x: req.body.x,
      y: req.body.y,
      radius: req.body.radius,
    });

    const result = drawCircle(data);

    console.log(`create project ${result}`);

    res.status(200).json({ message: `create project ${result}` });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
});

module.exports = router;
