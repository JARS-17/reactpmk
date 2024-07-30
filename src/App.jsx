import Home from "./Components/Home/Home"
import Profil from "./Components/Profil/Profil";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profil" element={<Profil/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
