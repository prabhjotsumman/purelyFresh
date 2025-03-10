"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { quantity } = useCart();

  const [clientQuantity, setClientQuantity] = useState<number | null>(null);

  // ✅ Fix: Ensure quantity is set only on the client
  useEffect(() => {
    setClientQuantity(quantity);
  }, [quantity]);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white shadow-md w-full z-10">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}

        {/* <Link href="/"> */}
        {/* </Link> */}

        <Link href="/" className="text-2xl font-bold flex flex-row items-center">
          <Image
            src="/logo.png" // Path to logo in 'public/' folder
            alt="Logo"
            width={40} // Adjust size as needed
            height={40}
            className="cursor-pointer"
          />
          Purely Fresh
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 justify-center items-center">
          <Link href="/shop" className="hover:text-gray-300">
            Shop
          </Link>

          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          {clientQuantity != null && clientQuantity > 0 ? (
            <Link
              href="/cart"
              className="flex flex-row text-green-400 font-semibold hover:text-black hover:cursor-pointer hover:bg-green-500 border-green-400 border-2 p-2"
            >
              <div className=" pr-2">🛒</div>{" "}
              {clientQuantity > 0 ? `${clientQuantity} items in Cart` : "Cart"}
            </Link>
          ) : (
            <Link href="/cart" className="hover:text-gray-300">
              Cart
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 text-white text-center">
          <Link href="/shop" className="block py-2 hover:bg-green-800">
            Shop
          </Link>
          <Link href="/about" className="block py-2 hover:bg-green-800">
            About Us
          </Link>
          <Link href="/contact" className="block py-2 hover:bg-green-800">
            Contact
          </Link>
          <Link href="/cart" className="block py-2 hover:bg-green-800">
            🛒 Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
