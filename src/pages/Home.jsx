//  short cut rafce   REACT ARROW FUNCTION EXPORT COMPONENT
// ? why the {} would not work in slider component?
import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

// give us the possibility to render the navbar

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
