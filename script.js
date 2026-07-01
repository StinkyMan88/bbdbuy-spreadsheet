const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTx0FJMWiBJuzWwo6MyxVLvzf8G0fUyhC5_xLZGDhZugFiX2Nav4_Bh4QTEUcO8kRoVxhd8QjNFuyBK/pub?output=csv";

async function loadProducts() {
    const response = await fetch(SHEET_URL);
    const csv = await response.text();

    const rows = csv.trim().split("\n");

    console.log(rows);
}

loadProducts();
