import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-700">About Us</h1>
        <p className="mt-2 text-lg">
          Fresh, Organic & Locally Grown – Delivered to Your Doorstep!
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center mt-6">
        <Image
          src="/farm.jpg" // Add an image in the public/ folder
          alt="Our Organic Farm"
          width={800}
          height={350}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="mt-8 space-y-6">
        <p>
         {` Welcome to our organic vegetable store! We are passionate about
          providing fresh, pesticide-free, and naturally grown vegetables to our
          community. Our farm follows sustainable farming practices, ensuring
          that every product you receive is 100% organic and full of nutrients.`}
        </p>
        <p>
          {`With a focus on health, quality, and sustainability, we handpick our
          vegetables from our farm, ensuring that only the best reaches your
          kitchen. Whether you're looking for fresh greens, root vegetables, or
          seasonal specialties, we've got you covered.`}
        </p>
        <p>
         {`Thank you for supporting local farmers and choosing healthy, organic
          food. Join us in our mission to make healthy eating accessible and
          sustainable for everyone!`}
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-8 border-t pt-6 text-center">
        <h2 className="text-xl font-semibold text-green-700">Get in Touch</h2>
        {/* <p>
          Email:{" "}
          <a href="mailto:info@organicstore.com" className="text-blue-600">
            info@organicstore.com
          </a>
        </p> */}
        <p>Gurveer Singh (Owner and Distributer) : +91 9781225280</p>
      </div>
    </div>
  );
};

export default AboutUs;
