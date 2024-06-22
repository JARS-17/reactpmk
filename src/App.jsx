import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Docum from "./Components/Docum/Docum";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const App = () => {

  

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="contaier">
        <Title subTitle="Our Events" Title="Ibadah Persekutuan" />
        <Programs />
        <About/>
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
