const url = "https://raw.githubusercontent.com/StinkyMan88/bbdbuy-spreadsheet/refs/heads/main/products.json";

async function loadProducts() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    document.getElementById("products").innerHTML = data.map(p => `
      <div style="border:1px solid #ddd; padding:10px; margin:10px;">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <p>${p.category}</p>
        <a href="${p.link}" target="_blank">View item</a>
      </div>
    `).join("");

  } catch (err) {
    console.error(err);
    document.getElementById("products").innerHTML = "Error loading products";
  }
}

loadProducts();
