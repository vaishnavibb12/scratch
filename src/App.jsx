import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Products from "./components/Products";
import ClientReview from "./components/ClientReview";
import "bootstrap/dist/css/bootstrap.css";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";
import Carreer from "./components/Carreer";
import Footer from "./components/Footer";
import Getintouch from "./components/Getintouch";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Slider />
        <About />
        <Getintouch />
        <Products />
        <ClientReview />
        <WhyChooseUs />
        <Contact />
        <Carreer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
