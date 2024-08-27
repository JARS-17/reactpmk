import React from 'react'
import logo from "../../assets/logo.png";
import './Footer.css'

const Footer = () => {
  return (
    // <div className="footer">
    // </div>
  <footer className="bg-gray-100 py-8 mt-8 w-full">
    <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
      {/* Logo Section */}
      <div className="w-full sm:w-1/4 mb-4 sm:mb-0"> 
        <img src={logo} alt="" className="logo" />
        {/* <img src="path_to_logo_image" alt="PMK ITERA Logo" className="w-24" /> */}
      </div>

      {/* Links Section */}
      <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
        <h2 className="font-bold text-gray-700 mb-2">LINKS</h2>
        <ul>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Beranda</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Profil</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Pengurus</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Renungan</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Persembahan</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Dokumentasi</a></li>
        </ul>
      </div>

      {/* Media Section */}
      <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
        <h2 className="font-bold text-gray-700 mb-2">MEDIA</h2>
        <ul>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Tiktok</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Youtube</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Spotify</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="w-full sm:w-1/4">
        <h2 className="font-bold text-gray-700 mb-2">HUBUNGI KAMI</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum lorem lorem loremmh</p>
        <a href="#" className="text-gray-600 hover:text-gray-800">Kirimkan pesan</a>
        <div className="mt-4">
          <textarea className="w-full h-24 p-2 rounded bg-gray-200 text-gray-600 resize-none" placeholder="Your message..."></textarea>
          <button className="mt-2 py-2 px-4 bg-gray-600 text-white rounded">KIRIM</button>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="bg-gray-300 py-2 mt-8 text-center">
      <p className="text-gray-600 text-sm">© 2024-PMK ITERA-hAll right reserved.</p>
    </div>
  </footer>
    

    
  );
}

export default Footer
