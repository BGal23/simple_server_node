const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET ALL USERS

router.get("/", async (req, res) => {
  console.log("Get data");

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
});

//GET USER

router.get("/:userId", async (req, res) => {
  console.log("Get user", req.params.userId);

  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: err.message });
  }
});

//ADD USER

router.post("/", async (req, res) => {
  console.log("Received data:", req.body);

  try {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    });

    await user.save();
    res.status(201).send({ message: "User added successfully" });
  } catch (err) {
    res.status(400).send({ message: "Error adding user", error: err });
  }
});

//DELETE USER

router.delete("/:userId", async (req, res) => {
  console.log("Delete user", req.params.userId);

  const { userId } = req.params;

  try {
    await User.deleteOne({ _id: userId });
    res.status(200).send({ message: "User deleting successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: err.message });
  }
});

module.exports = router;
