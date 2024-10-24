import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src=" " alt="logo.img"></img>
            </div>
            <div className={styles.menu}>
                <Link className={styles.navbarText} to="/home">
                    HOME
                </Link>
                <Link className={styles.navbarText} to="/appointments">
                    APPPOINTMENTS
                </Link>
                <Link className={styles.navbarText} to="/aboutUs">
                    ABOUT US
                </Link>
                <Link className={styles.navbarText} to="/contact">
                    CONTACT
                </Link>
            </div>
            <div className={styles.registerLogin}>
                <Link className={styles.navbarText} to="/register">
                    REGISTER
                </Link>
                <Link className={styles.navbarText} to="/login">
                    LOGIN
                </Link>
            </div>
        </div>
    )
}
export default Navbar
