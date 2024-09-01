import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/FeaturesSection";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero></Hero>
      </div>
      <div id="features">
        <Features></Features>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="pricing" className="py-48">
        Pricing
      </div>
      <div id="testimonial" className="py-48">
        Testimonial
      </div>
      <div id="faq" className="py-48">
        FAQ
      </div>
      <div id="contact" className="py-48">
        Contact
      </div>
    </>
  );
};

export default Home;
