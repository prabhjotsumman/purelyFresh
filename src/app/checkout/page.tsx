"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [mounted, setMounted] = useState(false);

  const isCartEmpty = !cart || cart.length === 0;
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  // AIzaSyA8nqKVSnFa34chg0s0FP5JmtDcsfs-C8U
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.phone
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const dataToSend = {
        ...formData,
        cart,
      }

      console.log("dataToSend", dataToSend);

      const response = await fetch("/api/addOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          cart, // Send cart details along with form data
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Order placed successfully!");
        clearCart();
        router.push("/thank-you");
      } else {
        alert("Failed to place order: " + data.error);
      }
    } catch (error) {
      alert("Error placing order. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 px-6 text-black">
        <h1 className="text-3xl font-bold text-green-700 text-center">
          Checkout
        </h1>

        {isCartEmpty ? (
          <p className="text-center text-lg text-black mt-6">
            Your cart is empty.{" "}
            <a href="/shop" className="text-green-600 underline">
              Go Shopping
            </a>
          </p>
        ) : (
          <div className="mt-6 grid md:grid-cols-2 gap-10">
            {/* Order Summary */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {cart &&
                cart?.map((product) => (
                  <div key={product.id} className="flex justify-between mb-4">
                    <span>
                      {product.name} (x{product.quantity})
                    </span>
                    <span className="font-bold">
                      Rs. {(product.price * product.quantity).toFixed(2)}/-
                    </span>
                  </div>
                ))}
              <hr className="my-4" />
              <div className="text-lg font-semibold flex flex-row justify-between">
                <p>Total:</p>
                <p>
                  Rs.{" "}
                  {cart
                    ?.reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )
                    .toFixed(2)}
                  /-
                </p>
              </div>
            </div>

            {/* Checkout Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 shadow-md rounded-md"
            >
              <h2 className="text-xl font-semibold mb-4">
                Shipping Information
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-md text-lg hover:bg-green-700 transition"
              >
                Place Order
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
