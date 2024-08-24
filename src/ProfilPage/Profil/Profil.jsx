import React from "react";
import Navbar from "../Navbar/Navbar";
import './Profil.css';
import { Link } from 'react-router-dom';


const Profil = () => {
    return (
        <div>
        <Navbar/>
            <div className="profil container">
                <div className="pmk-text">
                    <h1> Tentang PMK ITERA</h1>
                    <p> PMK ITERA resmi didirikan pada tanggal 14 Februari 2020. UKM ini menjadi komunitas yang mengakomodir seluruh mahasiswa aktif Kristen Protestan di ITERA. PMK ITERA berfungsi untuk memfasilitasi kebutuhan spiritual mahasiswa Kristen Protestan dalam menjalankan ibadah, memperkuat ikatan antar umat beragama, dan menjadi 'keluarga' dalam menumbuhkan nilai-nilai Kristen yang diajarkan oleh Tuhan Yesus Kristus. </p>
                </div>
            </div>
        </div>
    );
}

export default Profil