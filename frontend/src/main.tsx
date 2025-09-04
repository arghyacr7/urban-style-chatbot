import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";  // Home page
import ShopPage from "./pages/ShopPage"; // ✅ Shop page
import "./index.css"; // Tailwind + custom styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Index />} />

        {/* Shop route */}
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
