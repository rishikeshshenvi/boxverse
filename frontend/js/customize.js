const params = new URLSearchParams(window.location.search);

const boxId = params.get("id");

/*  CATEGORY  */

const categoryNames = {
  1: "Snacks Box",

  2: "Gaming Box",

  3: "Beauty Box",

  4: "Stationery Box",

  5: "Collection Box",

  6: "Anime Box",
};

const currentCategory = categoryNames[boxId];

document.getElementById("categoryText").innerText = currentCategory;

document.getElementById("boxTag").innerText = currentCategory;

/*  ELEMENTS  */

const liveBox = document.getElementById("liveBox");

const designLayer = document.getElementById("designLayer");

const popup = document.getElementById("popup");

/*  COLOR  */

const colorInputs = document.querySelectorAll('input[name="color"]');

colorInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const color = input.value;

    if (color === "purple") {
      liveBox.style.background = "#5B2A86";
    }

    if (color === "blue") {
      liveBox.style.background = "#2563eb";
    }

    if (color === "random") {
      liveBox.style.background = "#111111";
    }
  });
});

/*  DESIGN  */

const designInputs = document.querySelectorAll('input[name="design"]');

designInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const design = input.value;

    if (design === "stripes") {
      designLayer.style.background =
        "repeating-linear-gradient(45deg, white, white 10px, transparent 10px, transparent 20px)";
    }

    if (design === "dots") {
      designLayer.style.background =
        "radial-gradient(white 2px, transparent 2px)";

      designLayer.style.backgroundSize = "30px 30px";
    }

    if (design === "random") {
      designLayer.style.background = "none";
    }
  });
});

/*  ADD TO CART  */

document.getElementById("cartBtn").addEventListener("click", async () => {
  const color = document.querySelector('input[name="color"]:checked').value;

  const design = document.querySelector('input[name="design"]:checked').value;

  const price = document.querySelector('input[name="price"]:checked').value;

  const cartData = {
    category: currentCategory,

    color: color,

    design: design,

    price: price,
  };

  /* SAVE TEMPORARY FRONTEND */

  localStorage.setItem("cartBox", JSON.stringify(cartData));

  /* SAVE TO BACKEND */

  try {
    await fetch("http://localhost:5000/api/cart/add-cart", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(cartData),
    });
  } catch (error) {
    console.log(error);
  }

  popup.style.display = "flex";
});
