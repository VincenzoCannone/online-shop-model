//  short cut rafce   REACT ARROW FUNCTION EXPORT COMPONENT
//? why the {} would not work in slider component?
import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Navbar375 from "../components/Navbar375";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

// give us the possibility to render the navbar

const Home = () => {
  return (
    <>
      <Announcement />
      {/* {window.innerWidth > 375 ? <Navbar /> : null} */}
      <Navbar />
      <Navbar375 />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
