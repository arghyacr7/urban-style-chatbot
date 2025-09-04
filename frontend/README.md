🛒 Urban Style E-Commerce Chatbot

A full-stack E-Commerce Chatbot for customer support and product queries.
Built with React, Tailwind CSS, Vite, Flask, and Python NLP.

The chatbot can handle questions about orders, shipping, returns, product availability, and FAQ-based queries.

Tech Stack

Frontend: React 18 + Vite

Styling: Tailwind CSS

Backend: Python 3 + Flask

NLP: NLTK (tokenization, lemmatization, stopword removal)

API: Flask REST endpoints for chat

Other Tools: Flask-CORS, JSON FAQ storage

Project Structure
frontend/                  # React frontend
├─ src/
│  ├─ assets/              # Product images and favicon
│  ├─ components/          # Navbar, ProductList, etc.
│  ├─ pages/               # Index, ShopPage
│  └─ main.tsx             # React entry point
├─ index.html              # Main HTML
├─ package.json
└─ tailwind.config.js      # Tailwind CSS config

backend/                   # Flask backend
├─ app.py                  # Main Flask application
├─ nlp_chatbot.py          # NLP chatbot logic
├─ faq.json                # FAQ database
├─ requirements.txt        # Python dependencies
└─ README.md               # Backend documentation

Installation
Frontend

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Run the dev server:

npm run dev


Frontend will be available at:

http://localhost:5173/

Backend

Navigate to the backend folder:

cd backend


Create a virtual environment:

python -m venv venv
# Activate it:
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate


Install dependencies:

pip install -r requirements.txt


Run the Flask server:

python app.py


Backend will run on:

http://localhost:5001/

API Endpoints
1. Health Check

GET /

Response:

{
  "status": "running",
  "service": "E-Commerce Chatbot API",
  "docs": "Use POST /chat with a JSON body: { 'message': 'your text' }"
}

2. Chat Endpoint

POST /chat

Request:

{
  "message": "Where is my order?"
}


Response:

{
  "response": "Standard shipping usually takes 5-7 business days..."
}

Usage Example
import requests

url = "http://localhost:5001/chat"
data = {"message": "Do you have the Essential Cotton T-Shirt in stock?"}

response = requests.post(url, json=data)
print(response.json()["response"])

Features

Live search and category filtering for products (React + Tailwind)

Product display with images, tags (New/Sale), prices, and Quick Add buttons

NLP-based chatbot with keyword matching and lemmatization

FAQ-based question answering with JSON database

Regex detection for emails and phone numbers

Responsive and mobile-friendly UI

Contributing

Fork the repository

Create a branch: git checkout -b feature/your-feature

Commit changes: git commit -m "Add new feature"

Push branch: git push origin feature/your-feature

Open a Pull Request

License

Arghyadeep © 2025