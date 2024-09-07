import axios from "axios";
import { useState } from "react";
import styles from "./Register.module.css";
import ValidateRegister from "../../helpers/validateRegister";

const POSTUSER_URL = "http://localhost:3000/users/register";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState(initialState);

  const [errors, setErrors] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      ValidateRegister({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: userData.name,
      email: userData.email,
      birthdate: userData.birthdate,
      nDni: userData.nDni,
      username: userData.username,
      password: userData.password,
    };
    axios
      .post(POSTUSER_URL, user)
      .then(({ data }) => {
        console.log("data", data);
        setUserData(initialState);
      })
      .catch((error) => alert(error.message));
  };

  const handleOnReset = (event) => {
    event.preventDefault();
    setUserData(initialState);
    setErrors(initialState);
  };

  return (
    <form className={styles.container} onSubmit={handleOnSubmit}>
      <h1>Register</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          placeholder="Javier"
          onChange={handleInputChange}
        />
        <p>{errors.name ? errors.name : null}</p>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          placeholder="javier@emai.com"
          onChange={handleInputChange}
        />
        <p>{errors.email ? errors.email : null}</p>
      </div>
      <div>
        <label>Birthdate</label>
        <input
          type="date"
          name="birthdate"
          value={userData.birthdate}
          onChange={handleInputChange}
        />
        <p>{errors.birthdate ? errors.birthdate : null}</p>
      </div>
      <div>
        <label>Dni</label>
        <input
          type="text"
          name="nDni"
          value={userData.nDni}
          placeholder="123456789"
          onChange={handleInputChange}
        />
        <p>{errors.nDni ? errors.nDni : null}</p>
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          placeholder="javier123"
          onChange={handleInputChange}
        />
        <p>{errors.username ? errors.username : null}</p>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="********"
          onChange={handleInputChange}
        />
        <p>{errors.password ? errors.password : null}</p>
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          placeholder="********"
          onChange={handleInputChange}
        />
        <p>{errors.confirmPassword ? errors.confirmPassword : null}</p>
      </div>
      <div className={styles.buttons}>
        <button type="submit" value="register">
          Register
        </button>
        <button onClick={handleOnReset} value="empty">
          Empty
        </button>
      </div>
    </form>
  );
};

export default Register;
