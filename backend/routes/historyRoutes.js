const express = require("express");

const router = express.Router();

const History = require("../models/History");

/* SAVE HISTORY */

router.post("/add-history", async (req, res) => {
  const newHistory = new History(req.body);

  await newHistory.save();

  res.json({
    message: "History Saved",
  });
});

/* GET HISTORY */

router.get("/", async (req, res) => {
  const historyItems = await History.find();

  res.json(historyItems);
});

module.exports = router;
