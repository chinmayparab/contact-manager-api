const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route           GET api/contacts
// @description     Get specific users contacts
// @access          Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Errrror");
  }
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
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
