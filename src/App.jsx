import React from "react";
import HeroSection from "./components/HeroSection";
import CategorySlider from "./components/CategorySlider";
import About from "./components/About";
import Singers from "./components/Singers";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <HeroSection />
      <CategorySlider />
      <About />
      <Singers />
      <Table />
    </>
  );
};

export default App;
