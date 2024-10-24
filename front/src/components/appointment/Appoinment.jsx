import PropTypes from 'prop-types'
import styles from './Appointment.module.css'
const Appoinment = ({ date, time, status, description }) => {
    return (
        <div className={styles.container}>
            <h2>{date}</h2>
            <h2>{time}</h2>
            <h2>
                {status === 'active' ? (
                    <span className={styles.active}>{status}</span>
                ) : (
                    <span className={styles.cancelled}>{status}</span>
                )}
            </h2>
            <h2>{description}</h2>
        </div>
    )
}
Appoinment.propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Appoinment
