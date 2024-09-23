import React from "react";
import HeroSection from "./components/HeroSection";
import CategorySlider from "./components/CategorySlider";
import About from "./components/About";
import Singers from "./components/Singers";
import Table from "./components/Table";
import Plans from "./components/Plans";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";
import CustomCarousel from "./components/Common/CustomCarousel";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <HeroSection />
      <CategorySlider />
      <About />
      <Singers />
      <Table />
      <Plans />
      <Sponsors />
      <Testimonials />
      <CustomCarousel />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
