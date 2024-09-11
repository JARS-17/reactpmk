import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <a href="/Home" target="_blank" rel="noopener noreferrer" smooth={true} offset={-260} duration={500}>
            {" "}
            Home{" "}
          </a>
        </li>
        <li>
          <a href="/Profil" target="_blank" rel="noopener noreferrer" smooth={true} offset={-260} duration={500}>
            {" "}
            Profil{" "}
          </a>
        </li>
        <li>
          <a href="/Pengurus" target="_blank" rel="noopener noreferrer" smooth={true} offset={-260} duration={500}>
            {" "}
            Pengurus{" "}
          </a>
        </li>
        <li>
          <a href="/Renungan" target="_blank" rel="noopener noreferrer" smooth={true} offset={-260} duration={500}>
            {" "}
            Renungan{" "}
          </a>
        </li>
        <li>
          <a href="/Persembahan" target="_blank" rel="noopener noreferrer" smooth={true} offset={-260} duration={500}>
            {" "}
            Persembahan{" "}
          </a>
        </li>
        <li>
          <a href="/Dokumentasi" target="_blank" rel="noopener noreferrer">
            {" "}
            Dokumentasi{" "}
          </a>
        </li>

        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
