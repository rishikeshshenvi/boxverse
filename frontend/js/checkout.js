const paymentInputs = document.querySelectorAll('input[name="payment"]');

const upiBox = document.getElementById("upiBox");

/* PAYMENT METHOD */

paymentInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.value === "upi" && input.checked) {
      upiBox.style.display = "block";
    } else {
      upiBox.style.display = "none";
    }
  });
});

/*  PAYMENT  */

const params = new URLSearchParams(window.location.search);

const cartId = params.get("id");

const payBtn = document.getElementById("payBtn");

const popupBox = document.getElementById("popupBox");

const popupText = document.getElementById("popupText");

const popupLoader = document.getElementById("popupLoader");

payBtn.addEventListener("click", () => {
  /* SHOW POPUP */

  popupBox.style.display = "flex";

  payBtn.disabled = true;

  /* SUCCESS */

  setTimeout(() => {
    popupLoader.style.display = "none";

    popupText.innerText = "✅ Payment Successful";

    popupText.style.color = "green";

    /* GET SELECTED CART ITEM */

    fetch(`http://localhost:5000/api/cart/${cartId}`)
      .then((response) => response.json())
      .then((cartData) => {
        /* SAVE HISTORY */

        fetch("http://localhost:5000/api/history/add-history", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            category: cartData.category,

            color: cartData.color,

            design: cartData.design,

            price: cartData.price,

            status: "Order Placed",
          }),
        });

        /* SAVE CATEGORY FOR REVEAL PAGE */

        localStorage.setItem("lastPurchasedCategory", cartData.category);

        /* REMOVE ITEM FROM CART */

        fetch(`http://localhost:5000/api/cart/${cartId}`, {
          method: "DELETE",
        });
      });
  }, 2500);

  /* REDIRECT */

  setTimeout(() => {
    window.location.href = "reveal.html";
  }, 4500);
});
