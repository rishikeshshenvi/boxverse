const revealBtn = document.getElementById("revealBtn");

const boxArea = document.getElementById("boxArea");

revealBtn.addEventListener("click", async () => {
  const category = localStorage.getItem("lastPurchasedCategory");

  const response = await fetch(`${API_BASE_URL}/api/rewards/${category}`);

  const rewards = await response.json();

  let html = `<div class="reward-grid">`;

  rewards.forEach((item) => {
    html += `

      <div class="reward-card">

        <img src="${item.image}">

        <h4>${item.title}</h4>

      </div>

    `;
  });

  html += `</div>`;

  boxArea.innerHTML = html;

  revealBtn.innerText = "Home";

  revealBtn.onclick = () => {
    window.location.href = "home.html";
  };
});
