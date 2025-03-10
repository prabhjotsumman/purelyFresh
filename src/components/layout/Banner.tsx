export default function Banner() {
    return (
      <div className="relative w-full h-[640px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/banner.jpg')` }}
      >
        <div className="bg-blac p-8 text-center text-white rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold">
            Fresh Organic Vegetables
          </h1>
          <p className="mt-4 text-lg">
            100% natural and chemical-free, delivered to your doorstep.
          </p>
          <a href="/shop" className="mt-6 inline-block bg-green-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition">
            Shop Now
          </a>
        </div>
      </div>
    );
  }
  