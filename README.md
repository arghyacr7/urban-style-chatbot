🛒 E-Commerce Chatbot API

A Python-based chatbot API for e-commerce platforms. It handles customer queries about shipping, returns, stock availability, and can provide FAQ-based responses. Built with Flask, NLTK, and a simple rule-based NLP system.

Table of Contents

Features

Project Structure

Installation

Running the Project

API Endpoints

Usage Example

Contributing

License

Features

✅ Rule-based chatbot using NLTK: tokenization, lemmatization, stopword removal.
✅ FAQ-based answers using faq.json and keyword matching.
✅ Regex-based detection for emails and phone numbers.
✅ CORS enabled for integration with front-end apps.
✅ Lightweight Flask API.

Project Structure
frontend/                # Frontend (if any)
backend/                 # Flask backend
├─ app.py                # Main Flask application
├─ nlp_chatbot.py        # Rule-based chatbot class with NLTK
├─ faq.json              # FAQ database for keyword matching
├─ requirements.txt      # Python dependencies
└─ README.md             # Project documentation

Installation

Clone the repository:

git clone https://github.com/<your-username>/ecommerce-chatbot.git
cd ecommerce-chatbot/backend


Create a virtual environment (recommended):

python -m venv venv
source venv/bin/activate    # Linux/Mac
venv\Scripts\activate       # Windows


Install dependencies:

pip install -r requirements.txt


Ensure NLTK data is downloaded:

The app automatically downloads necessary NLTK corpora (stopwords, wordnet, punkt, omw-1.4) if not present.

Running the Project
python app.py


The API will run on:

http://localhost:5001/

API Endpoints
1. Status Check

GET /

Response:

{
  "status": "running",
  "service": "E-Commerce Chatbot API",
  "docs": "Use POST /chat with a JSON body: { 'message': 'your text' }"
}

2. Chat Endpoint

POST /chat

Request body:

{
  "message": "Where is my order?"
}


Response:

{
  "response": "Standard shipping usually takes 5-7 business days. You can track your order using the link sent to your email..."
}

Usage Example (Python)
import requests

url = "http://localhost:5001/chat"
data = {"message": "Do you have the Essential Cotton T-Shirt in stock?"}

response = requests.post(url, json=data)
print(response.json()["response"])

Contributing

Fork the repository.

Create a new branch: git checkout -b feature/your-feature

Commit your changes: git commit -m "Add new feature"

Push to branch: git push origin feature/your-feature

Create a Pull Request.




