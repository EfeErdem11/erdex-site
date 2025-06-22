
async function searchCoin() {
    const coin = document.getElementById("coinInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Yükleniyor...";

    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`);
        const data = await res.json();
        if (data[coin]) {
            resultDiv.innerHTML = `<h2>${coin.toUpperCase()}: $${data[coin].usd}</h2>`;
        } else {
            resultDiv.innerHTML = "Coin bulunamadı.";
        }
    } catch (error) {
        resultDiv.innerHTML = "Hata oluştu.";
    }
}
