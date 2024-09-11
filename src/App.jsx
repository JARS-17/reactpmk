import Home from "./HomePage/Home/Home";
import Profil from "./ProfilPage/Profil/Profil";
import Pengurus from "./PengurusPage/Pengurus";
import Renungan from "./RenunganPage/Renungan";
import Persembahan from "./PersembahanPage/Persembahan";
import Dokumentasi from "./DokumentasiPage/Dokumentasi";
import VideoPlayer from "./HomePage/VideoPlayer/VideoPlayer";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/Pengurus" element={<Pengurus />}></Route>
        <Route path="/Renungan" element={<Renungan />}></Route>
        <Route path="/Persembahan" element={<Persembahan />}></Route>
        <Route path="/Dokumentasi" element={<Dokumentasi />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
