import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src=" " alt="logo.img"></img>
      </div>
      <div className={styles.menu}>
        <h2 className={styles.navbarText}>HOME</h2>
        <h2 className={styles.navbarText}>ABOUT US</h2>
        <h2 className={styles.navbarText}>CONTACT</h2>
      </div>
      <div className={styles.registerLogin}>
        <h2 className={styles.navbarText}>REGISTER</h2>
        <h2 className={styles.navbarText}>LOGIN</h2>
      </div>
    </div>
  );
};
export default Navbar;
