const express = require("express");
const router = express.Router();

const User = require("../models/User");

// @route           POST api/users
// @description     Registers our users
// @access          Public
router.post("/", (req, res) => {
  res.send("Registration");
});

module.exports = router;
