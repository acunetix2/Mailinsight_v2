// src/App.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import NewsletterSupport from "@/components/NewsLetterSupport";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <NewsletterSupport />
      <Footer />
    </>
  );
};

export default App;
