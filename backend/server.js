const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const cartRoutes = require("./routes/cartRoutes");

const historyRoutes = require("./routes/historyRoutes");

const rewardRoutes = require("./routes/rewardRoutes");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/boxverse").then(() => {
  console.log("MongoDB Connected");
});

app.use("/api/cart", cartRoutes);

app.use("/api/history", historyRoutes);

app.use("/api/rewards", rewardRoutes);

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server Running on port 5000");
});
