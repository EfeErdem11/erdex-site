
from flask import Flask, request, render_template_string

app = Flask(__name__)

HTML = """
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>ErdeX App</title>
    <link rel="stylesheet" href="/static/style.css">
</head>
<body>
    <h1>🚀 ErdeX Coin Arama</h1>
    <form method="get">
        <input type="text" name="coin" placeholder="Örn: BTC" required>
        <button type="submit">Ara</button>
    </form>
    {% if coin %}
        <h2>📊 {{ coin.upper() }} bilgileri</h2>
        <p>Bu bölümde {{ coin.upper() }} için haberler ve al-sat sinyalleri olacak.</p>
    {% endif %}
</body>
</html>
"""

@app.route("/", methods=["GET"])
def index():
    coin = request.args.get("coin")
    return render_template_string(HTML, coin=coin)

if __name__ == "__main__":
    app.run(debug=True)
