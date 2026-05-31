const mongoose = require("mongoose");

const RewardSchema = new mongoose.Schema({
  category: String,

  title: String,

  image: String,
});

module.exports = mongoose.model("Reward", RewardSchema);
