const mongoose = require("mongoose");

const Reward = require("./models/Reward");

mongoose.connect("mongodb://127.0.0.1:27017/boxverse").then(async () => {
  await Reward.deleteMany();

  await Reward.insertMany([
    {
      category: "Gaming Box",
      title: "Gaming Sticker",
      image: "./assets/gamingsticker.png",
    },
    {
      category: "Gaming Box",
      title: "Mini Mouse Pad",
      image: "./assets/MiniMouse.png",
    },

    {
      category: "Anime Box",
      title: "Anime Poster",
      image: "./assets/AnimePoster.png",
    },
    {
      category: "Anime Box",
      title: "Anime Keychain",
      image: "./assets/AnimeKeychain.png",
    },

    {
      category: "Snacks Box",
      title: "Chocolate",
      image: "./assets/Chocolate.png",
    },
    {
      category: "Snacks Box",
      title: "Candy",
      image: "./assets/Candy.png",
    },

    {
      category: "Beauty Box",
      title: "Lip Balm",
      image: "./assets/LipBalm.png",
    },
    {
      category: "Beauty Box",
      title: "Face Mask",
      image: "./assets/FaceMask.png",
    },

    {
      category: "Stationery Box",
      title: "Notebook",
      image: "./assets/Notebook.png",
    },
    {
      category: "Stationery Box",
      title: "Pen",
      image: "./assets/Pen.png",
    },

    {
      category: "Collection Box",
      title: "Rare Card",
      image: "./assets/RareCard.png",
    },
    {
      category: "Collection Box",
      title: "Collector Badge",
      image: "./assets/CollectorBadge.png",
    },
  ]);

  console.log("Rewards Added");

  process.exit();
});
