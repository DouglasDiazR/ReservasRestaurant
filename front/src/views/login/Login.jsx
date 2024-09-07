import axios from "axios";
import { useState } from "react";
import ValidateLogin from "../../helpers/validateLogin";
import styles from "./Login.module.css";

const GETUSER_URL = "http://localhost:3000/users/login";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);

  const [errors, setErrors] = useState(initialState);

  const handleImputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);

    setErrors(
      ValidateLogin({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: userData.email,
      password: userData.password,
    };
    axios
      .post(GETUSER_URL, user)
      .then(({ data }) => {
        alert("Sesión Iniciada");
        setUserData(initialState);
      })
      .catch((error) => alert(error?.response?.data?.message));
  };
  return (
    <form className={styles.container} onSubmit={handleOnSubmit}>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          placeholder="Javier123"
          onChange={handleImputChange}
        />
      </div>
      <p>{errors.email ? errors.email : null}</p>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="********"
          onChange={handleImputChange}
        />
        <p>{errors.password ? errors.password : null}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button>Login</button>
      </div>
    </form>
  );
};

export default Login;
