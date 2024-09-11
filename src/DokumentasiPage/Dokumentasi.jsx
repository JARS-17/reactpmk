import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import SectionDokumentasi from "./SectionDokumentasi";

import Hero from "./Hero";
import Footer from "../Components/Footer";

const Dokumentasi = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionDokumentasi />
      <Footer />
    </div>
  );
};

export default Dokumentasi;
