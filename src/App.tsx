import * as reactRouter from "react-router-dom";

import PrivateRoute from "./Utils/PrivateRoute";

import Main from "./Pages/Main";
import Login from "./Pages/Login";
import HTTP404 from "./Pages/HTTP404";
import Register from "./Pages/Register";
import LandingPage from "./Pages/LandingPage";

import { AuthenticationProvider } from "./Context/AuthenticationContext";

import './Assets/styles/index.css';

const { BrowserRouter, Routes, Route } = reactRouter;

export default function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute><Main /></PrivateRoute>}/>
          <Route path="*" element={<HTTP404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<LandingPage />}/>
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}