"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  const isCartEmpty = cart?.length === 0 ? true : false;

  const totalPrice = cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 px-4 mb-4">
        <h1 className="text-3xl font-bold text-green-700 text-center">
          Items in Cart
        </h1>

        {isCartEmpty ? (
          <p className="text-center text-lg text-gray-600 mt-6">
            Your cart is empty.{" "}
            <Link href="/shop" className="text-green-600 underline">
              Go Shopping
            </Link>
          </p>
        ) : (
          <div className="mt-6">
            {cart?.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-md object-cover"
                    width={800}
                    height={800}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {product.name}
                    </h3>
                    <p className="text-green-700 font-bold">
                      Rs. {product.price.toFixed(2)}/-
                    </p>
                    <p className="text-gray-600">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            ))}
            <div className="flex justify-between mt-6">
              <button
                onClick={clearCart}
                className="bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition"
              >
                Clear Cart
              </button>
              <Link
                href="/checkout"
                className="bg-green-500 text-white py-3 px-6 rounded-md text-lg hover:bg-green-700 transition"
              >
                Checkout {`(Rs. ${totalPrice}/-)`}
              </Link>
            </div>
          </div>
        )}
      </div>
      {isCartEmpty ? (
        <div className="fixed w-full bottom-0">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default CartPage;
