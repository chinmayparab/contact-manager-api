const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const { genSalt } = require("bcryptjs");

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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send("User saved");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("serverr errrror");
    }
  }
);

module.exports = router;
