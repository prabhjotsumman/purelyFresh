"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect, useState, memo, useCallback } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  const { cart, setCart, addToCart } = useCart(); // Get cart context

  const [clientQuantity, setClientQuantity] = useState<number>(0);

  // ✅ Fix: Ensure quantity updates only on the client
  useEffect(() => {
    const item = cart.find((item) => item.id === product.id);
    setClientQuantity(item?.quantity || 0);
  }, [cart, product.id]);

  const handleQuantityChange = useCallback(
    (productId: number, action: "increase" | "decrease") => {
      const existingProductIndex = cart.findIndex(
        (item) => Number(item.id) === productId
      );

      if (existingProductIndex !== -1) {
        // Product already in cart
        const updatedCart = [...cart];
        let newQuantity = updatedCart[existingProductIndex].quantity;

        if (action === "increase") {
          newQuantity += 1;
        } else if (action === "decrease") {
          newQuantity = Math.max(0, newQuantity - 1);
        }

        if (newQuantity === 0) {
          // Remove product from cart if quantity becomes 0
          updatedCart.splice(existingProductIndex, 1);
        } else {
          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity: newQuantity,
          };
        }

        setCart(updatedCart);
      } else if (action === "increase") {
        // Add new product to cart
        const newProduct = { ...product, quantity: 1 };
        setCart([...cart, newProduct]);
        addToCart(newProduct);
      }
    },
    [cart, addToCart, setCart, product]
  );

  return (
    <div className="bg-white shadow-lg rounded-lg transform transition hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-t-md"
        width={300}
        height={500}
      />
      <div className="px-3 py-3.5">
        <div className="flex flex-row text-center align-middle justify-between">
          <p className="font-semibold text-gray-800">{product.name}</p>
          <p className="text-green-600 font-semibold">Rs. {product.price}/kg</p>
        </div>

        {/* Quantity Selector */}
        {clientQuantity != null && clientQuantity > 0 ? (
          <div className="flex items-center justify-center mt-4 space-x-3">
            <button
              onClick={() => handleQuantityChange(product.id, "decrease")}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-semibold text-black">
              {clientQuantity}
            </span>
            <button
              onClick={() => handleQuantityChange(product.id, "increase")}
              className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleQuantityChange(product.id, "increase")}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(ProductCard);
