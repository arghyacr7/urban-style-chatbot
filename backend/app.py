from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import difflib
import os

app = Flask(__name__)
CORS(app)

# Path to FAQ
FAQ_PATH = os.path.join(os.path.dirname(__file__), "faq.json")

with open(FAQ_PATH, "r", encoding="utf-8") as f:
    faq_data = json.load(f)["questions"]

def get_best_answer(user_query: str):
    user_query = user_query.lower()
    questions = [item["question"] for item in faq_data]

    # Step 1: Try close match
    match = difflib.get_close_matches(user_query, questions, n=1, cutoff=0.6)
    if match:
        for item in faq_data:
            if item["question"] == match[0]:
                return item["answer"]

    # Step 2: Keyword match
    for item in faq_data:
        if any(word in item["question"].lower() for word in user_query.split()):
            return item["answer"]

    # Step 3: Fallback
    return "I'm sorry, I couldn't find an exact answer. Could you rephrase?"

# ✅ Homepage Route
@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "running",
        "service": "My E-Commerce Chatbot API",
        "docs": "Use POST /chat with { 'message': 'your text' }"
    })

# Chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message", "")
    bot_response = get_best_answer(user_input)
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(port=5001, debug=True)
