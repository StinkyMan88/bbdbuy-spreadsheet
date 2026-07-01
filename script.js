const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTx0FJMWiBJuzWwo6MyxVLvzf8G0fUyhC5_xLZGDhZugFiX2Nav4_Bh4QTEUcO8kRoVxhd8QjNFuyBK/pub?output=csv";

async function loadProducts() {
    try {
        const response = await fetch(SHEET_URL);
        const csv = await response.text();

        console.log(csv);
    } catch (error) {
        console.error(error);
    }
}

loadProducts();
