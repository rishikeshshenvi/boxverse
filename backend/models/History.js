const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  category: String,
  color: String,
  design: String,
  price: Number,
  status: String,
});

module.exports = mongoose.model("History", HistorySchema);
