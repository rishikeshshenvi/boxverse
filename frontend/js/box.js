const params = new URLSearchParams(window.location.search);

const boxId = params.get("id");

const boxes = {
  1: {
    name: "Snacks Box",
    category: "Snacks",
    items: 2,
    possibleItems: ["Chips", "Chocolate", "Candy"],
    price: 149,
    rating: "⭐⭐⭐⭐",
    reviews: [
      "The snacks were fresh and surprisingly tasty!",
      "Got flavors I never tried before. Really fun experience.",
      "Packaging looked premium and items were well packed.",
    ],
  },

  2: {
    name: "Gaming Box",
    category: "Gaming",
    items: 3,
    possibleItems: ["Gaming Sticker", "Mini Mouse Pad", "Keychain"],
    price: 279,
    rating: "⭐⭐⭐⭐⭐",
    reviews: [
      "The gaming accessories were actually useful and good quality.",
      "Loved the mystery feeling while opening the box.",
      "Perfect gift for gamers who enjoy collectibles.",
    ],
  },

  3: {
    name: "Beauty Box",
    category: "Beauty",
    items: 3,
    possibleItems: ["Lip Balm", "Face Mask", "Mini Cream"],
    price: 279,
    rating: "⭐⭐⭐⭐⭐",
    reviews: [
      "The beauty products smelled amazing and felt premium.",
      "Really liked the skincare items inside the box.",
      "Everything was packed neatly and looked aesthetic.",
    ],
  },

  4: {
    name: "Stationery Box",
    category: "Stationery",
    items: 3,
    possibleItems: ["Notebook", "Cute Pen", "Sticker Pack"],
    price: 279,
    rating: "⭐⭐⭐⭐",
    reviews: [
      "The notebook and stickers were super cute.",
      "Quality of the stationery items was better than expected.",
      "Perfect for journaling and study setups.",
    ],
  },

  5: {
    name: "Collection Box",
    category: "Collection",
    items: 3,
    possibleItems: ["Rare Card", "Collector Badge", "Limited Item"],
    price: 279,
    rating: "⭐⭐⭐⭐",
    reviews: [
      "Loved the limited edition collectible item inside.",
      "This box felt more premium compared to normal mystery boxes.",
      "The surprise item made the unboxing experience exciting.",
    ],
  },

  6: {
    name: "Anime Box",
    category: "Anime",
    items: 3,
    possibleItems: ["Anime Keychain", "Poster", "Mini Figure"],
    price: 279,
    rating: "⭐⭐⭐⭐⭐",
    reviews: [
      "The anime merchandise looked authentic and detailed.",
      "Got a really cool keychain and mini poster inside.",
      "Definitely worth it for anime fans and collectors.",
    ],
  },
};

const data = boxes[boxId];

document.getElementById("boxName").innerText = data.name;

document.getElementById("boxCategory").innerText = data.category;

document.getElementById("boxItems").innerText = data.items;

document.getElementById("boxPossible").innerText =
  data.possibleItems.join(", ");

document.getElementById("boxPrice").innerText = data.price;

document.getElementById("boxRating").innerText = data.rating;

document.getElementById("customizeBtn").href = `customize.html?id=${boxId}`;

let reviewsHTML = "";

data.reviews.forEach((review) => {
  reviewsHTML += `
    
    <div class="review-card">

        <div class="review-stars">
            ⭐⭐⭐⭐⭐
        </div>

        <p>${review}</p>

    </div>
    
    `;
});

document.getElementById("reviewContainer").innerHTML = reviewsHTML;
