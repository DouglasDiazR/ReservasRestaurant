import myAppointments from "../../helpers/myAppointments";
import Appoinment from "../../components/appointment/Appoinment";
import { useState } from "react";
const Appointments = () => {
  const [appoinments /* setAppoinments */] = useState(myAppointments);
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
