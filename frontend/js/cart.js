const cartContainer = document.getElementById("cartContainer");

async function loadCart() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cart`);
    const data = await response.json();

    if (data.length === 0) {
      cartContainer.innerHTML = `<div class="empty-cart">Cart is Empty</div>`;
      return;
    }

    data.forEach((item) => {
      cartContainer.innerHTML += `
        <div class="cart-item">
          <div class="cart-info">
            <h4>${item.category}</h4>
            <p>₹${item.price}</p>
          </div>

          <a href="checkout.html?id=${item._id}" class="checkout-btn">
            Checkout
          </a>
        </div>
      `;
    });
  } catch (err) {
    console.log("Cart Error:", err);
    cartContainer.innerHTML = "Failed to load cart";
  }
}

loadCart();
