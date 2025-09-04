import React from 'react';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-12 flex flex-col items-center">
        <h1 className="text-6xl font-extrabold gradient-hero mb-4">
          Timeless Style Redefined
        </h1>
        <p className="text-lg text-muted mb-8 max-w-2xl text-center">
          Discover our carefully curated collection of sustainable fashion that transcends seasons and trends.
        </p>
        <div className="flex space-x-4">
          <button className="btn-primary">Shop Collection</button>
          <button className="btn-secondary opacity-50 cursor-not-allowed">
            Watch Story
          </button>
        </div>
      </header>

      {/* Example card layout */}
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        <div className="card-hover p-6 bg-card rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Featured Product</h2>
          <p className="text-muted-foreground">Elegant and sustainable.</p>
        </div>
        {/* Add more cards as needed */}
      </section>

      {/* Floating chatbot component */}
      <Chatbot />
    </div>
  );
}
