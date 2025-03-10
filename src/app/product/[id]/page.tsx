"use client";

import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { products } from "@/store";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-md"
            width={800}
            height={800}
          />
          <div>
            <h1 className="text-3xl font-bold text-green-700">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-gray-700">{product.description}</p>
            <p className="mt-4 text-2xl font-bold text-green-700">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="mt-6 bg-green-500 text-white py-3 px-6 rounded-md text-lg hover:bg-green-700 transition"
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
