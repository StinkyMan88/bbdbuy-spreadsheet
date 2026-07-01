const container = document.getElementById("products");

async function loadProducts() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbws9-UFKiodBc6IQm4J9ThzaiSU6zokjIyiW6sinPeb2A4nngqnNQAYoV_Ev0nXKy8V/exec"
    );

    const text = await response.text(); // primero como texto (más seguro)
    const data = JSON.parse(text);

    console.log("API DATA:", data);

    container.innerHTML = "";

    data.forEach(product => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px 0";

      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" target="_blank">View item</a>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error:", error);
    container.innerHTML = "Error loading products";
  }
}

loadProducts();
