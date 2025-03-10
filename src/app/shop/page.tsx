"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
// import Image from "next/image";
import { useEffect, useState } from "react";

import { categories, products } from "@/store";
import ProductCard from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { quantity, totalPrice } = useCart();

  const [clientQuantity, setClientQuantity] = useState<number | null>(null);

  // ✅ Fix: Ensure quantity is set only on the client
  useEffect(() => {
    setClientQuantity(quantity);
  }, [quantity]);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 p-6 h-vh bg-white shadow-lg hidden md:block">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={`p-2 cursor-pointer rounded-md transition text-black ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product List */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products
              .filter(
                (p) =>
                  selectedCategory === "All" || p.category === selectedCategory
              )
              .map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
          </div>
        </main>
        {clientQuantity !== null && clientQuantity > 0 && (
          <div className="text-center fixed bottom-0 w-full shadow-2xl bg-green-600 py-3">
            <Link
              href="/cart"
              className="text-xl font-semibold w-full"
            >
              Checkout {`(Rs. ${totalPrice}/-)`}
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
