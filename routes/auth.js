const express = require("express");
const router = express.Router();

// @route           GET api/auth
// @description     Get users who's logged in
// @access          Private
router.get("/", (req, res) => {
  res.send("Get active user");
});

// @route           POST api/auth
// @description     Authorize user and get token
// @access          Public
router.post("/", (req, res) => {
  res.send("login the user");
});

module.exports = router;
