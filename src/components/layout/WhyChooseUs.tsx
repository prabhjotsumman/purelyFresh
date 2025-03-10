"use client"

import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    { title: "100% Organic", desc: "No chemicals or pesticides, just natural goodness.", img: "/organic.jpg" },
    { title: "Fresh Daily", desc: "Vegetables are picked and delivered the same day.", img: "/fresh.jpg" },
    { title: "Local Farmers", desc: "Supporting small farms and sustainable agriculture.", img: "/farmers.jpg" },
    { title: "Fast Delivery", desc: "Get your fresh vegetables delivered in just a few hours.", img: "/delivery.jpg" },
  ];

  return (
    <section className="text-center py-12 px-6">
      <motion.h2 
        className="text-4xl font-bold text-green-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose Us?
      </motion.h2>

      <motion.p 
        className="mt-4 text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        We provide farm-fresh, organic vegetables, sourced directly from local farmers.
      </motion.p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-4 gap-6 mt-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative shadow-lg rounded-lg flex flex-col items-center h-[500px] bg-cover bg-center overflow-hidden cursor-pointer"
            style={{ backgroundImage: `url(${feature.img})` }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0  bg-opacity-40 transition duration-300 hover:bg-opacity-60"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white transition duration-300">
              <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
