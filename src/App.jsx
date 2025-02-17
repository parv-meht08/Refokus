/* eslint-disable no-unused-vars */
import React from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Markies from "./components/Markies";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-full font-['poppins'] bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Markies />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
