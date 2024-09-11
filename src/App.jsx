import Home from "./HomePage/Home/Home";
import Profil from "./ProfilPage/Profil/Profil";
import Pengurus from "./PengurusPage/Pengurus/Pengurus";
import VideoPlayer from "./HomePage/VideoPlayer/VideoPlayer";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/pengurus" element={<Pengurus/>}></Route>

      </Routes>
    </Router>
  );
};

export default App;
