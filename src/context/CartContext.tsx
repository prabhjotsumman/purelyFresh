"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  quantity: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Initialize cart state from localStorage if available
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage?.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      const newCart = existingItem
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: product.quantity }
              : item
          )
        : [...prevCart, product];

      localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;
    });
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const quantity = cart?.length;
  const totalPrice = cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        quantity,
        totalPrice,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
