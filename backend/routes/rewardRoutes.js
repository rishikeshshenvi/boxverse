const express = require("express");

const router = express.Router();

const Reward = require("../models/Reward");

router.get("/:category", async (req, res) => {
  const rewards = await Reward.find({
    category: req.params.category,
  });

  res.json(rewards);
});

module.exports = router;
