const express = require("express");
const router = express.Router();

// @route           GET api/contacts
// @description     Get specific users contacts
// @access          Private
router.get("/", (req, res) => {
  res.send("Get users contacts");
});

// @route           POST api/contacts
// @description     add new contact
// @access          Private
router.post("/", (req, res) => {
  res.send("add contact");
});

// @route           POST api/contacts/:id
// @description     update contact
// @access          Private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @route           DELETE api/contacts/:id
// @description     delete contact
// @access          Private
router.delete("/", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
