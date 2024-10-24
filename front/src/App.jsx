import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Appointments from "./views/appointments/Appointments";
import Home from "./views/home/Home";
import Register from "./views/register/Register";
import Login from "./views/login/Login";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
