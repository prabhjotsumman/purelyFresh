import Link from "next/link";

const SaleBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-gray-900 text-white text-center py-12 px-6 shadow-lg">
      <p className="text-xl font-semibold">
        🌱 Limited Time Offer: <span className="font-bold">20% Off</span> on
        Your First Order! 🛒
      </p>
      <p className="text-sm mt-1">
        Order fresh organic vegetables today and enjoy doorstep delivery.
      </p>
      <Link href={"/shop"}>
        <button className="mt-3 bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition hover:cursor-pointer">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default SaleBanner;
