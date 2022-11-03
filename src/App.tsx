import * as reactRouter from "react-router-dom";

import Main from "./Pages/Main";
import LandingPage from "./Pages/LandingPage";

import './Assets/styles/index.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HTTP404 from "./Pages/HTTP404";

const { BrowserRouter, Routes, Route } = reactRouter;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="*" element={<HTTP404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LandingPage />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}