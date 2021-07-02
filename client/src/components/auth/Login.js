import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/AlertContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="registerContainer">
      <h1 className="TitleLoginRegister">
        Account <span>Login</span>
      </h1>
      
      <form className="LoginRegisterContent" onSubmit={onSubmit}>
        <div className="groupRegisterLogin">
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="groupRegisterLogin">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" value="Login" className="btnLoginRegister" />
      </form>
    </div>
  );
};

export default Login;
