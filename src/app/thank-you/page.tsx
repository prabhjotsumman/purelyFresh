import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-green-700">
          Thank You for Your Order! 🎉
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Your order has been successfully placed.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block bg-green-500 text-white py-3 px-6 rounded-md text-lg hover:bg-green-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
      <div className="fixed w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
}
