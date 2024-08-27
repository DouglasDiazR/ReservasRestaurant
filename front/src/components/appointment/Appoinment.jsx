import PropTypes from "prop-types";
const Appoinment = ({ date, time, status, descripcion }) => {
  return (
    <div>
      <h2>{date}</h2>
      <h2>{time}</h2>
      <h2>{status}</h2>
      <h2>{descripcion}</h2>
    </div>
  );
};
Appoinment.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

export default Appoinment;
