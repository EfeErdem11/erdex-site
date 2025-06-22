
async function getCoinData() {
    const coin = document.getElementById('coinInput').value.toLowerCase();
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
            alert("Coin bulunamadı.");
            return;
        }

        const coinData = data[0];
        const price = coinData.current_price;
        const change = coinData.price_change_percentage_24h;

        const signal = change > 0 ? "📈 AL" : "📉 SAT";
        const entry = price.toFixed(2);
        const tp = (price * 1.05).toFixed(2);
        const sl = (price * 0.95).toFixed(2);

        document.getElementById('coinName').innerText = coinData.name.toUpperCase();
        document.getElementById('price').innerText = `Fiyat: $${price}`;
        document.getElementById('change').innerText = `24s Değişim: ${change.toFixed(2)}%`;
        document.getElementById('signal').innerText = `Sinyal: ${signal}`;
        document.getElementById('entry').innerText = `Giriş: $${entry}`;
        document.getElementById('tp').innerText = `TP: $${tp}`;
        document.getElementById('sl').innerText = `SL: $${sl}`;
        document.getElementById('result').classList.remove('hidden');
    } catch (error) {
        alert("Veri alınırken hata oluştu.");
        console.error(error);
    }
}
