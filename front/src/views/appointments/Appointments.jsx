import Appoinment from "../../components/appointment/Appoinment";
import { useState, useEffect } from "react";
import axios from "axios";
const Appointments = () => {
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then((response) => response.data)
      .then((data) => setAppoinments(data));
  }, []);
  return (
    <div>
      <h1>Mis Turnos</h1>
      <div>
        {appoinments.map((appoinment) => {
          return (
            <Appoinment
              key={appoinment.id}
              time={appoinment.time}
              date={appoinment.date}
              status={appoinment.status}
              descripcion={appoinment.descripcion}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Appointments;
