// SAMPLE DATA (replace with your parsed data)
const offers = [
  { card: "Amex Gold", vendor: "Uber", value: "$10 Credit", expiry: "5d left" },
  { card: "Chase Sapphire", vendor: "DoorDash", value: "15% Off", expiry: "12d left" },
];

// RENDER
function renderOffers(data) {
  const container = document.getElementById("offers-list");
  container.innerHTML = "";

  data.forEach(o => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <div class="title">${o.vendor}</div>
      <div class="value">${o.value}</div>
      <div class="meta">${o.card} • ${o.expiry}</div>
    `;

    container.appendChild(div);
  });
}

renderOffers(offers);

// SEARCH
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();

  const filtered = offers.filter(o =>
    o.vendor.toLowerCase().includes(val) ||
    o.card.toLowerCase().includes(val)
  );

  renderOffers(filtered);
});

// TABS
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById(tab.dataset.tab + "-view").classList.add("active");
  });
});