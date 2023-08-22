import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Based on wireframe, we need to add a form (to calcuate delivery quickly) + successful stories inside  +   trusted companies

const Home = () => {
  return (
    <>
      <Hero />
      <p>Form to submit quickly</p>
      <p>Successful stories</p>
      <p>Trusted companies</p>
    </>
  );
};

export default Home;
