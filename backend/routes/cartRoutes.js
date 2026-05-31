const express = require("express");

const router = express.Router();

const Cart = require("../models/Cart");

/* SAVE CART */

router.post("/add-cart", async (req, res) => {
  const newCart = new Cart(req.body);

  await newCart.save();

  res.json({
    message: "Added To Cart",
  });
});

/* GET CART */

router.get("/", async (req, res) => {
  const cartItems = await Cart.find();

  res.json(cartItems);
});

/* GET SINGLE CART ITEM */

router.get("/:id", async (req, res) => {
  const item = await Cart.findById(req.params.id);

  res.json(item);
});

/* DELETE CART ITEM */

router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
});

module.exports = router;
