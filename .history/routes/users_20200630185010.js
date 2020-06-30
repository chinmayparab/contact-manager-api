const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route           POST api/users
// @description     Registers our users
// @access          Public
router.post(
  "/",
  [
    check("name", "Name required").not().isEmpty(),
    check("email", "Valid email needed"),
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
