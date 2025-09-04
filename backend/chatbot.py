import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize
from flask import Flask, request, jsonify
from flask_cors import CORS
import json

def download_nltk_data():
    """Downloads the necessary NLTK data if not already present."""
    required_data = [
        ('corpora/stopwords', 'stopwords'),
        ('corpora/wordnet', 'wordnet'),
        ('corpora/omw-1.4', 'omw-1.4'),
        ('tokenizers/punkt', 'punkt')
    ]
    for path, package_id in required_data:
        try:
            nltk.data.find(path)
        except LookupError:
            print(f"Downloading NLTK package: {package_id}...")
            nltk.download(package_id)
            print("Download complete.")

# Ensure NLTK data is downloaded before initializing the chatbot
download_nltk_data()

class NLPChatbot:
    """
    A simple rule-based chatbot using NLTK for preprocessing.
    """
    def __init__(self):
        self.lemmatizer = WordNetLemmatizer()
        self.stop_words = set(stopwords.words('english'))

        # Rules for keyword matching
        # Each rule is a tuple: (list of keywords, response string)
        self.rules = [
            (['hello', 'hi', 'hey'], "Hello! How can I assist you today?"),
            (['bye', 'goodbye', 'thank'], "You're welcome! Have a great day!"),
            (['track', 'order', 'ship', 'delivery', 'where'],
             "Standard shipping usually takes 5-7 business days. You can track your order using the link sent to your email. For expedited options, please check our shipping policy page."),
            (['return', 'refund', 'policy'],
             "We offer a 30-day return policy for most items. Items must be unused and in their original packaging. Please visit our returns page for detailed instructions."),
            (['stock', 'available', 'availability', 'have'],
             "Check the product page for availability. Stock levels are updated in real-time."),
            (['human', 'agent', 'representative', 'talk', 'speak', 'customer', 'service'],
             "I can connect you with a customer service representative. Please provide your order number, email, or contact, and I'll transfer you to the next available agent."),
        ]

        # Regex patterns for contact information (email, phone number)
        self.contact_patterns = [
            re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'),  # email
            re.compile(r'\+?\d[\d\s-]{7,}\d')  # phone number
        ]

        # Fallback response for unrecognized queries
        self.fallback_response = ("I'm sorry, I didn't understand that. "
                                  "Could you please rephrase your question or ask about shipping, returns, or product availability?")

    def preprocess_input(self, user_input):
        """Preprocesses user input for keyword matching."""
        user_input = user_input.lower()
        words = word_tokenize(user_input)
        return [
            self.lemmatizer.lemmatize(word)
            for word in words
            if word.isalpha() and word not in self.stop_words
        ]

    def get_response(self, user_input):
        """Returns the appropriate response based on user input."""
        # 1. Check for contact information first (highest priority)
        for pattern in self.contact_patterns:
            if pattern.search(user_input):
                return "Thanks! Our human agent will get back to you shortly. 🙂"

        # 2. Check for keyword rules
        processed_words = self.preprocess_input(user_input)
        for keywords, response in self.rules:
            if any(word in processed_words for word in keywords):
                return response

        # 3. Return fallback response if no rule matches
        return self.fallback_response

# Initialize the Flask application and the chatbot
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend applications
bot = NLPChatbot()

# ✅ Homepage Route - Provides a simple status check
@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "running",
        "service": "E-Commerce Chatbot API",
        "docs": "Use POST /chat with a JSON body: { 'message': 'your text' }"
    })

# Chat Endpoint - Processes user messages and returns a chatbot response
@app.route("/chat", methods=["POST"])
def chat():
    # Get the message from the request JSON
    user_input = request.json.get("message", "")
    if not user_input:
        return jsonify({"error": "No message provided"}), 400
    
    # Get the response from the chatbot
    bot_response = bot.get_response(user_input)
    
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    # Run the Flask app
    app.run(port=5001, debug=True)
