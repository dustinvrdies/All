
from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route("/api/ping")
def ping():
    return jsonify({"message": "pong"})

@app.route("/api/balance")
def balance():
    return jsonify({"dah_balance": 1234.56})

@app.route("/api/run-bot", methods=["POST"])
def run_bot():
    bot_name = request.json.get("bot_name", "AutoRead")
    return jsonify({"status": f"Bot '{bot_name}' executed."})
