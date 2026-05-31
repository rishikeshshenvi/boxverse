const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Reward = require("./models/Reward");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Reward.deleteMany();

  await Reward.insertMany([
    {
      category: "Gaming Box",
      title: "Gaming Sticker",
      image: "gamingsticker.png",
    },
    {
      category: "Gaming Box",
      title: "Mini Mouse Pad",
      image: "MiniMouse.png",
    },

    {
      category: "Anime Box",
      title: "Anime Poster",
      image: "AnimePoster.png",
    },
    {
      category: "Anime Box",
      title: "Anime Keychain",
      image: "AnimeKeychain.png",
    },

    {
      category: "Snacks Box",
      title: "Chocolate",
      image: "Chocolate.png",
    },
    {
      category: "Snacks Box",
      title: "Candy",
      image: "Candy.png",
    },

    {
      category: "Beauty Box",
      title: "Lip Balm",
      image: "LipBalm.png",
    },
    {
      category: "Beauty Box",
      title: "Face Mask",
      image: "FaceMask.png",
    },

    {
      category: "Stationery Box",
      title: "Notebook",
      image: "Notebook.png",
    },
    {
      category: "Stationery Box",
      title: "Pen",
      image: "Pen.png",
    },

    {
      category: "Collection Box",
      title: "Rare Card",
      image: "RareCard.png",
    },
    {
      category: "Collection Box",
      title: "Collector Badge",
      image: "CollectorBadge.png",
    },
  ]);

  console.log("Rewards Added");

  process.exit();
});
