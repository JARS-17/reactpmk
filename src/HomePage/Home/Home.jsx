import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Programs from "../../HomePage/Programs/Programs";
import Title from "../../HomePage/Title/Title";
import About from "../../HomePage/About/About";
import Docum from "../../HomePage/Docum/Docum";
import Testimonials from "../../HomePage/Testimonials/Testimonials";
import Contact from "../../HomePage/Contact/Contact";
import Footer from "../../Components/Footer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Events" Title="Ibadah Persekutuan" />
        <Programs />
        <About />
        <Title subTitle="Gallery" Title="Dokumentasi PMK" />
        <Docum />
        <Title subTitle="Apa kata mereka?" Title="" />
        <Testimonials />
        <Title subTitle="Contact Us" Title="Hubungi Kami" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
