import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Pages/Main";
import LandingPage from "./Pages/LandingPage";

import './Assets/styles/index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/home" element={<LandingPage />}/>
      </Routes>
    </Router>
  );
}