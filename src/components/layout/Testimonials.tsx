import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Priya Sharma",
    review: "The vegetables are so fresh and tasty! Highly recommend.",
    image: "/users/priya.jpg",
  },
  {
    name: "Rohan Patel",
    review: "Timely delivery and excellent quality. Love shopping here!",
    image: "/users/rohan.jpg",
  },
  {
    name: "Ananya Verma",
    review: "Supporting local farmers while getting fresh produce – amazing!",
    image: "/users/ananya.jpg",
  },
  {
    name: "Amit Kumar",
    review: "Great quality and super convenient! Will order again.",
    image: "/users/amit.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 my-4 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">What Our Customers Say ?</h2>

      <Marquee pauseOnHover gradient={false} speed={40}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mx-4 my-4 p-6 bg-white shadow-lg rounded-xl text-center w-80"
          >
            <p className="mt-4 text-lg text-gray-700 italic">
              {testimonial.review}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-green-600">
              {testimonial.name}
            </h3>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
