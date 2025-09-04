import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductList searchQuery={searchQuery} />
    </>
  );
};

export default ShopPage;
