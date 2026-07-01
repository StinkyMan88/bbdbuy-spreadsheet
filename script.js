const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTx0FJMWiBJuzWwo6MyxVLvzf8G0fUyhC5_xLZGDhZugFiX2Nav4_Bh4QTEUcO8kRoVxhd8QjNFuyBK/pub?output=csv";

async function loadProducts() {
    const response = await fetch(SHEET_URL);
    const csv = await response.text();

    const rows = csv.trim().split("\n");

    const productsDiv = document.getElementById("products");

    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].split(",");

        const name = cols[0];
        const price = cols[1];
        const link = cols[2];
        const category = cols[3];

        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Category:</strong> ${category}</p>
            <a href="${link}" target="_blank">Open BBDBuy</a>
            <hr>
        `;

        productsDiv.appendChild(card);
    }
}

loadProducts();
