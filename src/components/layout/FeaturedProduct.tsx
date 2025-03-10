import Image from "next/image";

const featuredProducts = [
    {
      id: 1,
      name: "Fresh Organic Tomatoes",
      price: "₹120/kg",
      image: "/tomatoes.jpg",
    },
    {
      id: 2,
      name: "Farm Fresh Carrots",
      price: "₹80/kg",
      image: "/carrots.jpg",
    },
    {
      id: 3,
      name: "Green Spinach",
      price: "₹60/kg",
      image: "/spinach.jpg",
    },
    {
      id: 4,
      name: "Organic Potatoes",
      price: "₹50/kg",
      image: "/potatoes.jpg",
    },
  ];
  
  const FeaturedProducts = () => {
    return (
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
                width={500}
                height={500}
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-green-600 font-bold mt-2">{product.price}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedProducts;
  