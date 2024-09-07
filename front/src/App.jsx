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
      <Home />
      <Appointments />
      <Register />
      <Login />
    </div>
  );
}

export default App;
