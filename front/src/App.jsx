import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Appointments from "./views/appointments/Appointments";
import Home from "./views/home/Home";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Appointments />
    </div>
  );
}

export default App;
