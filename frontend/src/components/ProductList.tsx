import { useState } from "react";
import { Heart, ShoppingBag, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productTshirt from "@/assets/product-tshirt.jpg";
import productJeans from "@/assets/product-jeans.jpg";
import productSweater from "@/assets/product-sweater.jpg";
import productShoes from "@/assets/product-shoes.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductListProps {
  searchQuery: string; // 🔎 search text comes from parent
}

const products: Product[] = [
  {
    id: 1,
    name: "Essential Cotton T-Shirt",
    price: 29,
    image: productTshirt,
    category: "tops",
    isNew: true,
  },
  {
    id: 2,
    name: "Classic Straight Jeans",
    price: 89,
    originalPrice: 120,
    image: productJeans,
    category: "bottoms",
    isSale: true,
  },
  {
    id: 3,
    name: "Sage Knit Sweater",
    price: 79,
    image: productSweater,
    category: "tops",
  },
  {
    id: 4,
    name: "Minimalist Sneakers",
    price: 129,
    image: productShoes,
    category: "shoes",
  },
  {
    id: 5,
    name: "Organic Cotton Tee",
    price: 35,
    image: productTshirt,
    category: "tops",
  },
  {
    id: 6,
    name: "High-Waist Denim",
    price: 95,
    image: productJeans,
    category: "bottoms",
  },
];

const ProductList = ({ searchQuery }: ProductListProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All" },
    { id: "tops", name: "Tops" },
    { id: "bottoms", name: "Bottoms" },
    { id: "shoes", name: "Shoes" },
  ];

  // ✅ Category + Search filter combined
const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "all" || product.category === selectedCategory;

  const matchesSearch = product.name
    ? product.name.toLowerCase().includes(searchQuery?.toLowerCase() || "")
    : false;

  return matchesCategory && matchesSearch;
});

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of timeless pieces designed
            for modern living
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="min-w-20"
            >
              {category.name}
            </Button>
          ))}
          <Button variant="outline" size="icon" className="ml-4">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group card-hover border-0 shadow-[var(--shadow-soft)]"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <Badge className="bg-accent text-accent-foreground">
                          New
                        </Badge>
                      )}
                      {product.isSale && (
                        <Badge className="bg-destructive text-destructive-foreground">
                          Sale
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button
                        size="icon"
                        variant={
                          favorites.includes(product.id) ? "default" : "secondary"
                        }
                        className="h-8 w-8"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            favorites.includes(product.id) ? "fill-current" : ""
                          }`}
                        />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-8 w-8">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Quick Add Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button className="w-full btn-primary">Quick Add</Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-medium text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center col-span-full text-muted-foreground">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
