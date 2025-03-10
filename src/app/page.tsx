import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import SaleBanner from "@/components/layout/SaleBanner";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import Testimonials from "@/components/layout/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <SaleBanner />
      <Testimonials/>
      <Footer />
    </div>
  );
}
