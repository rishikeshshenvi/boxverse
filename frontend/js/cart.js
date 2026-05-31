const cartContainer = document.getElementById("cartContainer");

async function loadCart() {
  const response = await fetch("http://localhost:5000/api/cart");

  const data = await response.json();

  if (data.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        Cart is Empty
      </div>
    `;

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
}

loadCart();
