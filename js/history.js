const historyContainer = document.getElementById("historyContainer");

/* FETCH HISTORY */

async function loadHistory() {
  const response = await fetch(`${API_BASE_URL}/api/history`);

  const data = await response.json();

  /* EMPTY */

  if (data.length === 0) {
    historyContainer.innerHTML = `

      <div class="empty-history">
        No Purchase History
      </div>

    `;

    return;
  }

  /* SHOW HISTORY */

  data.forEach((item) => {
    historyContainer.innerHTML += `

      <div class="history-item">

        <div class="history-info">

          <h4>${item.category}</h4>

          <p>Price : ₹${item.price}</p>

          <p>Color : ${item.color}</p>

          <p>Design : ${item.design}</p>

          <p>
            Status :
            <span class="order-status">
              ${item.status}
            </span>
          </p>

        </div>

      </div>

    `;
  });
}

loadHistory();
