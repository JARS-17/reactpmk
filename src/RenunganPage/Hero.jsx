import React from "react";

import dark_arrow from "../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>RENUNGAN</h1>
        <p> PMK ITERA adalah sebuah unit kegiatan Mahasiswa dalam bidang kerohanian yang mewadahi Mahasiswa kristen protestan di Institut Teknologi Sumatera sejak tahun 2020 </p>
        <button className="btn">
          Learn More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
