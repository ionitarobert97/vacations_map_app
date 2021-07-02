const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const Vacation = require("../models/Vacations");

// @route   GET api/vacation
// @desc    Get all vacation location
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const vacations = await Vacation.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(vacations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/vacation
// @desc    Add new vacation location
// @access  Private
router.post(
  "/",
  [auth, [body("country", "Country is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { country, city, photos, location, checkInDate, checkOutDate } = req.body;

    try {
      const newVacation = new Vacation({
        country,
        city,
        photos,
        location,
        checkInDate,
        checkOutDate,
        user: req.user.id,
      });

      const vacation = await newVacation.save();

      res.json(vacation);
    } catch (err) {
      console.error(er.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/vacation/:id
// @desc    Update vacation location
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { country, city, photos, location, date } = req.body;

  // Build vacation object
  const vacationFields = {};
  if (country) vacationFields.country = country;
  if (city) vacationFields.city = city;
  if (photos) vacationFields.photos = photos;
  if (location) vacationFields.location = location;
  if (date) vacationFields.date = date;

  try {
    let vacation = await Vacation.findById(req.params.id);

    if (!vacation) return res.status(404).json({ msg: "Vacation not found" });

    // Make sure user owns vacations
    if (vacation.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    vacation = await Vacation.findByIdAndUpdate(
      req.params.id,
      { $set: vacationFields },
      { new: true }
    );

    res.json(vacation);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/vacation/:id
// @desc    DELETE vacation location
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let vacation = await Vacation.findById(req.params.id);

    if (!vacation) return res.status(404).json({ msg: "Vacation not found" });

    // Make sure user owns vacations
    if (vacation.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Vacation.findByIdAndRemove(req.params.id);

    res.json({ msg: "Vacation removed" });
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
