import React from "react";
import Carousel from "./components/Carousel";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
