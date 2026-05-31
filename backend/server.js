const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const cartRoutes = require("./routes/cartRoutes");
const historyRoutes = require("./routes/historyRoutes");
const rewardRoutes = require("./routes/rewardRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   DATABASE CONNECTION FIX
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

/* =========================
   ROUTES
========================= */

app.use("/api/cart", cartRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/rewards", rewardRoutes);
app.use("/api/auth", authRoutes);

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
