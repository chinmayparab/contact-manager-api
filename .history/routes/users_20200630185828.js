const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route           POST api/users
// @description     Registers our users
// @access          Public
router.post(
  "/",
  [
    check("name", "Name required").not().isEmpty(),
    check("email", "Valid email needed"),
    check("password", "Enter a password w 6 or more chars").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
