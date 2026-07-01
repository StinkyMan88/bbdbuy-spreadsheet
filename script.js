const container = document.getElementById("products");

async function loadProducts() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbws9-UFKiodBc6IQm4J9ThzaiSU6zokjIyiW6sinPeb2A4nngqnNQAYoV_Ev0nXKy8V/exec"
    );

    const data = await response.json();

    console.log("BBDBuy data:", data);

    container.innerHTML = "";

    data.forEach(product => {
      const card = document.createElement("div");

      card.style.border = "1px solid #ddd";
      card.style.padding = "12px";
      card.style.margin = "10px 0";
      card.style.borderRadius = "8px";

      card.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>${product.price}</strong></p>
        <p>${product.category || ""}</p>
        <a href="${product.link}" target="_blank">View item</a>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading products:", error);
    container.innerHTML = "Error loading products";
  }
}

loadProducts();
