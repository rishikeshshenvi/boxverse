const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  category: String,
  color: String,
  design: String,
  price: Number,
});

module.exports = mongoose.model("Cart", CartSchema);
