import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import UseCases from "@/components/sections/UseCases";
import Demo from "@/components/sections/Demo";
import ProductDetails from "@/components/sections/ProductDetails";
import WhyVendors from "@/components/sections/WhyVendors";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* Content that scrolls over the fixed hero */}
        <div className="relative z-10 bg-white">
          <UseCases />
          <Demo />
          <ProductDetails />
          <WhyVendors />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
